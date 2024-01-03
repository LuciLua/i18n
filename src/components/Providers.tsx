'use client'

import { NextIntlClientProvider } from "next-intl"
import { dictionaries } from "../dictionaries/dictionaries"
import { TranslationContextProvider } from "../contexts/TranslationContext"

export function Providers({ children, params }) {
    const dic = dictionaries()
    return (
        <NextIntlClientProvider locale="pt" messages={dic}>
            <TranslationContextProvider params={params}>
                <br />
                {children}
            </TranslationContextProvider>
        </NextIntlClientProvider>
    )
}