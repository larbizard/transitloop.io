import Image from "next/image";
import i18n from "i18next";
import Link from "next/link";

import { useTranslation } from "react-i18next";

const DownloadApp = () => {
  const { t } = useTranslation();

  const TextComponent = (props: any) => {
    return (
      <div {...props}>
        <h1
          className={`text-2xl xl:text-4xl text-black font-black  ${i18n.language === "ar" ? "text-right" : ""
            }`}
        >
          {t("Welcome_message")}
        </h1>
        <div
          className={`flex flex-col xl:flex-row ${i18n.language === "ar" ? "justify-end" : "justify-start"
            } py-4`}
        >
          {/* <Link
            className="pr-2"
            href="https://play.google.com/store/apps/details?id=com.larbizard.MdinaMapper"
          >
            <Image
              src={`/assets/images/badges/Android/google-play-badge-${i18n.language}.png`}
              height={30}
              width={200}
              alt="Android 
    badge"
            />
          </Link>
          <Link
            className="pt-2 xl:pt-0 xl:pl-2"
            href="https://apps.apple.com/us/app/mdinamapper/id1662853420"
          >
            <Image
              src={`/assets/images/badges/Apple/App_Store_Badge_${i18n.language}.svg`}
              height={30}
              width={
                i18n.language === "ar" || i18n.language === "en" ? 180 : 190
              }
              alt="Android badge"
            />
          </Link> */}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col justify-center bg-white pt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:text-center">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-balance">
            Notre application en marque blanche
          </p>
          <p className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-black sm:text-2xl lg:text-balance">
            Contactez-nous pour une démonstration de notre application en marque blanche
          </p>
          <button onClick={() => window.location.href = "/contact"} className="bg-black p-2 text-white my-2">Contactez-nous</button>
        </div>
      </div >
      <div className="flex flex-col md:flex-row justify-center bg-white py-20">
        {i18n.language !== "ar" ? (
          <>
            <TextComponent className="flex flex-col md:w-1/5 py-10 px-4 justify-center md:justify-start" />
            <Image
              className="px-2 self-center md:self-center"
              src={`/assets/images/mockups/app.png`}
              width={400}
              height={700}
              alt="Android badge"
            />
          </>
        ) : (
          <>
            <TextComponent className="flex flex-col md:w-1/5 justify-center py-10 px-4 md:hidden" />
            <Image
              className="px-2 self-center md:self-center"
              src={`/assets/images/mockups/app.png`}
              width={400}
              height={700}
              alt="Android badge"
            />
            <TextComponent className="flex flex-col md:w-1/5 justify-centerpx-4 hidden md:block py-10 mx-4" />
          </>
        )}
      </div>
    </>
  );
};

export default DownloadApp;
