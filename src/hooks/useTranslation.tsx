import { useContext } from "react";
import { TranslationContext } from "../contexts/TranslationContext";

export function useTranslation() {
    const { translations, lang, novoPathname } = useContext(TranslationContext)
    return { translations, lang, novoPathname }
}