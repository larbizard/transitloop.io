import Link from 'next/link'
import PageHeader from './components/PageHeader'
import PageFooter from './components/PageFooter'
import MobileFooter from './components/MobileFooter'
import Image from 'next/image'
import Head from 'next/head'
import i18n from 'i18next';
import { useTranslation } from "react-i18next";

export default function AboutPage() {

  const { t } = useTranslation();

  return (
    <div className="bg-yellow-400 h-screen md:h-full">
      <Head>
        <title>À propos</title>
      </Head>
      <PageHeader />
      <div>
        <div className="flex flex-row justify-center">
          <Image src="/assets/images/illustrations/standing.svg" 
          className="hidden sm:flex lg:w-1/6"  
          width={250} height={400} 
          alt="Setting on weelchair girl"/>
          <div className="p-6 lg:w-1/2 space-y-4">
            <h1 className="text-2xl font-bold"> 
              {t("About.Title")}
            </h1>
            <p>
            {t("About.Text1")}<br/>
            {t("About.Text2")}
            </p>
          </div>
        </div>

        <div className="px-6 sm:hidden text-left">
            {i18n.language === 'fr' || i18n.language === 'en' ? 
            <span>{t("Made_with_love_in")} 🇲🇦</span>
            :
            <span>🇲🇦 {t("Made_with_love_in")}</span>
            }
        </div>
      </div>
      <div className="hidden md:block py-20">
          <PageFooter />
      </div>
      <div className="md:hidden py-10">
          <MobileFooter />
      </div>
    </div>
  )
}
