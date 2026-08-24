"use client";

import { init } from "@plausible-analytics/tracker";
import { useEffect } from "react";

export function PlausibleAnalytics() {
    useEffect(() => {
        const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

        if (!domain) {
            return;
        }

        init({ domain });
    }, []);

    return null;
}