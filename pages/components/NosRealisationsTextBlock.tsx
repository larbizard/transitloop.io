import Image from "next/image";
import i18n from "i18next";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const NosRealisationsTextBlock = ({ className = "" }: { className?: string }) => {
  const { t } = useTranslation();

  return (
  <div className={className}>
    <h1
      className={`text-2xl xl:text-4xl text-black font-black ${i18n.language === "ar" ? "text-right" : ""}`}
    >
      {t("BlasstyApp.title")}
    </h1>
    <p className={`mt-2 text-black/80 ${i18n.language === "ar" ? "text-right" : ""}`}>
      {t("BlasstyApp.description")}
    </p>
    <div
      className={`flex flex-col xl:flex-row ${i18n.language === "ar" ? "justify-end" : "justify-start"} py-4`}
    >
      <Link
        className="pr-2"
        href="https://play.google.com/store/apps/details?id=com.transitloop.rrm"
      >
        <Image
          src={`/assets/images/badges/Android/google-play-badge-${i18n.language}.png`}
          height={30}
          width={200}
          alt="Android badge"
        />
      </Link>
      <Link
        className="pt-2 xl:pt-0 xl:pl-2"
        href="https://apps.apple.com/us/app/blassty/id6752820579"
      >
        <Image
          src={`/assets/images/badges/Apple/App_Store_Badge_${i18n.language}.svg`}
          height={30}
          width={
            i18n.language === "ar" || i18n.language === "en" ? 180 : 190
          }
          alt="Android badge"
        />
      </Link>
    </div>
  </div>
  );
};

export default NosRealisationsTextBlock;
