import Image from "next/image";
import i18n from "i18next";

import { useTranslation } from "react-i18next";

// Store badge paths by language (same approach as LandingRedirect)
const storeBadges = {
  en: {
    playStore: "/assets/images/badges/Android/google-play-badge-en.png",
    appStore: "/assets/images/badges/Apple/App_Store_Badge_en.svg",
  },
  fr: {
    playStore: "/assets/images/badges/Android/google-play-badge-fr.png",
    appStore: "/assets/images/badges/Apple/App_Store_Badge_fr.svg",
  },
  ar: {
    playStore: "/assets/images/badges/Android/google-play-badge-ar.png",
    appStore: "/assets/images/badges/Apple/App_Store_Badge_ar.svg",
  },
} as const;

const storeBadgeStyles = {
  buttonGroup: {
    display: "flex" as const,
    flexDirection: "column" as const,
    gap: "15px",
    marginBottom: "30px",
    width: "100%",
    maxWidth: "200px",
    alignItems: "center" as const,
  },
  storeBadgeLink: {
    display: "block",
    textDecoration: "none",
    transition: "transform 0.2s ease, opacity 0.2s ease",
    width: "200px",
    minWidth: "200px",
    maxWidth: "200px",
  },
  storeBadge: {
    height: "100px",
    width: "200px",
    minWidth: "200px",
    maxWidth: "200px",
    display: "block",
    borderRadius: "4px",
    objectFit: "contain" as const,
  },
};

const DownloadApp = () => {
  const { t } = useTranslation();
  const lang = (i18n.language || "en") as keyof typeof storeBadges;
  const badges = storeBadges[lang] || storeBadges.en;

  const TextComponent = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return (
      <div {...props}>
        <h1
          className={`text-2xl xl:text-4xl text-black font-black ${i18n.language === "ar" ? "text-right" : ""}`}
        >
          {t("Welcome_message")}
        </h1>
        <p className={`mt-2 text-black/80 ${i18n.language === "ar" ? "text-right" : ""}`}>
          {t("DownloadApp.Description")}
        </p>
        <div
          style={{
            ...(() => {
              const { alignItems: _a, ...rest } = storeBadgeStyles.buttonGroup;
              return { ...rest, marginBottom: 0 };
            })(),
          }}
          className="self-center xl:self-auto items-center xl:items-start"
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.larbizard.MdinaMapper"
            style={storeBadgeStyles.storeBadgeLink}
          >
            <img
              src={badges.playStore}
              alt={t("StoreBadges.playStoreAlt") as string}
              style={storeBadgeStyles.storeBadge}
            />
          </a>
          <a
            href="https://apps.apple.com/us/app/mdinamapper/id1662853420"
            style={storeBadgeStyles.storeBadgeLink}
          >
            <img
              src={badges.appStore}
              alt={t("StoreBadges.appStoreAlt") as string}
              style={storeBadgeStyles.storeBadge}
            />
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col justify-center bg-white pt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:text-center">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-balance">
            {t("DownloadApp.greyLabelBefore")}
            <span className="text-gray-500">{t("DownloadApp.greyLabelWord")}</span>
            {t("DownloadApp.greyLabelAfter")}{" "}
            <a href="https://mdinamapper.com" target="_blank"
              rel="noopener noreferrer" className="underline">MdinaMapper</a>.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center bg-white py-20">
        {i18n.language !== "ar" ? (
          <>
            <TextComponent className="flex flex-col md:w-1/5 py-10 px-4 justify-center md:justify-start" />
            <Image
              className="px-2 self-center md:self-center"
              src="/assets/images/mockups/1_ver.png"
              width={400}
              height={700}
              alt={t("StoreBadges.appStoreAlt")}
            />
          </>
        ) : (
          <>
            <TextComponent className="flex flex-col md:w-1/5 justify-center py-10 px-4 md:hidden" />
            <Image
              className="px-2 self-center md:self-center"
              src="/assets/images/mockups/1_ver.png"
              width={400}
              height={700}
              alt={t("StoreBadges.appStoreAlt")}
            />
            <TextComponent className="flex flex-col md:w-1/5 justify-center px-4 hidden md:block py-10 mx-4" />
          </>
        )}
      </div>
    </>
  );
};

export default DownloadApp;
