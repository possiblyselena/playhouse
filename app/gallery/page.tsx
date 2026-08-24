"use client";
import Image from "next/image";
import Script from "next/script";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { FooterBar } from "../components/footerbar";

export default function Home() {
    return (
        <div className="bg-[url('/ikeabackground.jpg')] font-sans dark:bg-black w-full">
            <Navbar />
            <h1 className="text-black">Hello! These are completed projects for Playhouse! Click on them to view their repository.</h1>
            <div>

            </div>
            <FooterBar/>
        </div>
    );
}