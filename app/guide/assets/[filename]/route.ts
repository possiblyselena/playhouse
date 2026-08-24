import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const contentDirectory = path.join(process.cwd(), "content", "guides");
const contentTypes: Record<string, string> = {
    ".gif": "image/gif",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".webp": "image/webp",
};

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ filename: string }> },
) {
    const { filename } = await params;
    const safeFilename = path.basename(filename);
    const filePath = path.join(contentDirectory, safeFilename);
    const extension = path.extname(safeFilename).toLowerCase();

    if (!contentTypes[extension]) {
        return new NextResponse("Unsupported image type", { status: 415 });
    }

    try {
        const image = await fs.readFile(filePath);
        return new NextResponse(image, {
            headers: { "Content-Type": contentTypes[extension], "Cache-Control": "public, max-age=3600" },
        });
    } catch {
        return new NextResponse("Image not found", { status: 404 });
    }
}