"use client"

import { dayjsLocales } from "@/lib/dayjs";
import dayjs from "dayjs";
import { ReactNode, useEffect, useTransition } from "react"

export function LocaleProvider({ children }: { children: ReactNode }) {
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        startTransition(async () => {
            if (dayjsLocales['fr']) {
                dayjs.locale(await dayjsLocales['fr']());
            }
        });
    }, [])

    if (isPending) return null;
    return children;
}