'use client'
import Link from "next/link";
import { useTranslation } from "../../../hooks/useTranslation";

export default function about() {

    const { translations, lang } = useTranslation()

    return (
        <div className="w-full h-full justify-center items-center flex flex-col max-w-[1000px] m-auto">
            <h1 className="text-[#121212] font-[700] text-[30px]">{translations.about.title}</h1>
            <p className="p-2">{translations.about.text}</p>
            <Link href={`/${lang}/`} className="text-white px-4 py-2 bg-[#121212] rounded-[4px]">{translations.about.btn_back_to_home}</Link>
        </div>
    )
}