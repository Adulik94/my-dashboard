import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { lang, toggleLanguage } = useLanguage();

  const isEn = lang === "en";

  return (
    <motion.button
      onClick={toggleLanguage}
      whileTap={{ scale: 0.95 }}
      className="
        flex items-center justify-center text-center lg:w-32 gap-2 p-3 rounded-full text-sm font-medium
        bg-lexa-100 dark:bg-lexa-700
        hover:bg-lexa-200 dark:hover:bg-lexa-600
        transition-colors "
      aria-label="Toggle language"
    >
      <span className="hidden lg:block">
        {isEn ? "Հայերեն" : "English"}
      </span>

      <span className="lg:hidden block text-lg leading-none">
        {isEn ? "🇦🇲" : "🇬🇧"}
      </span>
    </motion.button>
  );
}
