import Image from "next/image";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

import NosRealisationsTextBlock from "./NosRealisationsTextBlock";

const BLASSTY_APP_URL = "https://app.blassty.ma";

const Blassty = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col justify-center bg-white pt-10">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:text-center">
        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-balance">
          {t("BlasstyApp.whiteLabelBefore")}
          <span className="bg-black text-white underline">{t("BlasstyApp.whiteLabelWord")}</span>
          {t("BlasstyApp.whiteLabelAfter")}{" "}
          <a
            href={BLASSTY_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Blassty
          </a>
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center bg-white py-20">
        {i18n.language !== "ar" ? (
          <>
            <NosRealisationsTextBlock className="flex flex-col md:w-1/5 py-10 px-4 justify-center md:justify-start" />
            <Image
              className="px-2 self-center md:self-center"
              src="/assets/images/blassty-app-screenshot.png"
              width={400}
              height={700}
              alt="Application Blassty - Planification d'itinéraires à Rabat"
            />
          </>
        ) : (
          <>
            <NosRealisationsTextBlock className="flex flex-col md:w-1/5 justify-center py-10 px-4 md:hidden" />
            <Image
              className="px-2 self-center md:self-center"
              src="/assets/images/blassty-app-screenshot.png"
              width={400}
              height={700}
              alt="Application Blassty - Planification d'itinéraires à Rabat"
            />
            <NosRealisationsTextBlock className="flex flex-col md:w-1/5 justify-center px-4 hidden md:block py-10 mx-4" />
          </>
        )}
      </div>
    </section>
  );
};

export default Blassty;
