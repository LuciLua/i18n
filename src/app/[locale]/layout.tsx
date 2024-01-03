import "../../styles/globals.css"
import { Providers } from "../../components/Providers";
import { Saira } from "next/font/google"
import { notFound } from "next/navigation";
import { BtnToggleLocale } from "../../components/BtnToggleLocale";

const saira = Saira({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin-ext", "latin", "vietnamese"] })
const locales = ['en', 'pt', 'fr']

export default function root_layout({ children, params }) {

    const { locale } = params
    if (!locales.includes(locale)) {
        notFound()
    }

    return (
        <html lang={locale}>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>i18n</title>
            </head>
            <body className={saira.className} lang="pt">
                <Providers params={params}>
                    {children}
                    <BtnToggleLocale />
                </Providers>
            </body>
        </html>
    )
}