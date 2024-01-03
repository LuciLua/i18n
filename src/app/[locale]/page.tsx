'use client'

import { AiOutlineGlobal } from "react-icons/ai"
import { useTranslation } from "../../hooks/useTranslation"
import Link from "next/link"

export default function homepage() {

    const { translations, lang, novoPathname } = useTranslation()

    return (
        <div className="w-full h-full min-h-[100svh]">
            <div className="flex flex-col justify-center items-center h-full w-full">
                <h1 className="font-[900] text-[30px]">i18n</h1>
                <h2 className="font-[400] text-[20px]">{translations.home.subtitle}</h2>
                <p className="p-5 text-[#bbb]">{translations.home.text}</p>
                <h3 className="my-3 px-4 py-2 text-[18px] text-cyan-500 rounded-[12px] border-[1px] border-cyan-500 bg-cyan-50 flex justify-center items-center gap-2">< AiOutlineGlobal />{translations.home.language}</h3>
                <Link className="mt-4 text-white px-4 py-2 bg-[#121212] rounded-[4px]" href={`${novoPathname}/about`}>{translations.home.btn_to_about}</Link>
            </div>
        </div>
    )
}