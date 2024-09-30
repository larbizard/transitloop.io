import Image from 'next/image'
import i18n from 'i18next';
import Link from 'next/link'

import { useTranslation } from "react-i18next";

const DownloadApp = () => {

    const { t } = useTranslation();

    const TextComponent = (props:any) => {
        return (<div {...props}>
            <h1 className={`text-4xl font-black  ${i18n.language === "ar" ? "text-right" : ""}`}>{t("Welcome_message")}</h1>
            <div className="flex justify-center py-4">
                <Link className="pr-2" href="https://play.google.com/store/apps/details?id=com.larbizard.MdinaMapper">
                    <Image src={`/assets/images/badges/Android/google-play-badge-${i18n.language}.png`} height={30} width={200} alt="Android 
    badge"/>
                </Link>
                <Link className="pl-2" href="https://apps.apple.com/us/app/mdinamapper/id1662853420">
                    <Image src={`/assets/images/badges/Apple/App_Store_Badge_${i18n.language}.svg`} height={30} width={i18n.language === "ar" || i18n.language === "en" ? 180 : 190} alt="Android badge" />
                </Link>
            </div>
        </div>)
    }

    return (
        <div className="flex flex-col md:flex-row justify-center bg-yellow-400">
            {i18n.language !== "ar" ? <><TextComponent className="flex flex-col md:w-1/5 py-10 px-4 justify-center md:justify-start" />
                <Image className="px-2 self-center md:self-center" src={`/assets/images/mockups/${i18n.language}/2_ver.png`} width={400} height={700} alt="Android badge" /></> : <>
                <TextComponent className="flex flex-col md:w-1/5 justify-center py-10 px-4 md:hidden"/>
                <Image className="px-2 self-center md:self-center" src={`/assets/images/mockups/${i18n.language}/2_ver.png`} width={400} height={700} alt="Android badge" />
                <TextComponent className="flex flex-col md:w-1/5 justify-center py-10 px-4 hidden md:block py-10 mx-4"/>
            </>
            }
        </div>
    )
}

export default DownloadApp