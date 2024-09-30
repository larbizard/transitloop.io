import Link from "next/link";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import MobileFooter from "./components/MobileFooter";
import Image from "next/image";
import Head from "next/head";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import TextImage from "./components/TextImage";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="bg-yellow-400 h-screen md:h-full">
      <Head>
        <title>{t("Cities")}</title>
      </Head>
      <PageHeader />
      <div>
        <div className="flex flex-col justify-center">
          <TextImage
            imageLeft={false}
            imageSrc="/assets/images/0_2-removebg-preview.png"
            header={t("Cities_page.Title")}
            body={
              <p>
                {t("Cities_page.Text1")}
                <br />
                {t("Cities_page.Text2")}
              </p>
            }
          />
          <div className="p-6 lg:w-1/2 space-y-4">
            <h1 className="text-5xl font-bold">
              {t("Cities_page.Problematic1")}
            </h1>
            <h1 className="text-5xl font-bold">
              {t("Cities_page.Problematic2")}
            </h1>
            <p>
              {t("Cities_page.Text1")}
              <br />
              {t("Cities_page.Text2")}
            </p>
          </div>
          <div className="p-6 lg:w-1/2 space-y-4">
            <h1 className="text-5xl font-bold">{t("Cities_page.Solution1")}</h1>
            <h1 className="text-5xl font-bold">{t("Cities_page.Solution2")}</h1>
            <p>
              {t("Cities_page.Text1")}
              <br />
              {t("Cities_page.Text2")}
            </p>
          </div>
        </div>

        <div className="px-6 sm:hidden text-left">
          {i18n.language === "fr" || i18n.language === "en" ? (
            <span>{t("Made_with_love_in")} 🇲🇦</span>
          ) : (
            <span>🇲🇦 {t("Made_with_love_in")}</span>
          )}
        </div>
      </div>
      <div className="hidden md:block py-20">
        <PageFooter />
      </div>
      <div className="md:hidden py-10">
        <MobileFooter />
      </div>
    </div>
  );
}
