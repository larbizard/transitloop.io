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

const NosRealisationsTextBlock = ({ className = "" }: { className?: string }) => {
  const { t } = useTranslation();
  const lang = (i18n.language || "en") as keyof typeof storeBadges;
  const badges = storeBadges[lang] || storeBadges.en;

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
        style={{
          ...(() => {
            const { alignItems: _a, ...rest } = storeBadgeStyles.buttonGroup;
            return { ...rest, marginBottom: 0 };
          })(),
        }}
        className="self-center xl:self-auto items-center xl:items-start"
      >
        <a
          href="https://play.google.com/store/apps/details?id=com.transitloop.rrm"
          style={storeBadgeStyles.storeBadgeLink}
        >
          <img
            src={badges.playStore}
            alt={t("StoreBadges.playStoreAlt") as string}
            style={storeBadgeStyles.storeBadge}
          />
        </a>
        <a
          href="https://apps.apple.com/us/app/blassty/id6752820579"
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

export default NosRealisationsTextBlock;
