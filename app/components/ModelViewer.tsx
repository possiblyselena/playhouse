"use client";

import { createElement, useEffect } from "react";

type ModelViewerProps = {
  src: string;
};

export default function ModelViewer({ src }: ModelViewerProps) {
  useEffect(() => {
    void import("@google/model-viewer");
  }, []);

    return createElement("model-viewer", {
        src,
        alt: "3D assembly model",
        "camera-controls": true,
        "auto-rotate": true,
        "camera-orbit": "0deg 180deg 2m",
        exposure: "0.6",
        "shadow-intensity": "0.25",
        style: { width: "100%", height: "500px" },
});
}
