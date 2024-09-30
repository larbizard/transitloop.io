import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as Icon from 'react-feather'
import { useRouter } from 'next/router'
import Head from 'next/head'
import i18n from 'i18next';
import { useTranslation } from "react-i18next";


export default function PageHeader () {

    const { t } = useTranslation();

    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const router = useRouter()

    React.useEffect(() => {

    }, [])

    const LeftToRightMenu = () => {
        return(
            <>
                <Link href="/">
                    <h2 className={`text-xl cursor-pointer hover:text-white ${router.asPath == "/" ? "underline" : "text-black"}`}>
                        {t("Home")}
                    </h2>
                </Link>
                <Link href="/cities">
                    <h2 className={`text-xl cursor-pointer hover:text-white ${router.asPath == "/cities" ? "underline" : "text-black"}`}>
                        {t("Cities")}
                    </h2>
                </Link>
                <Link href="/carriere">
                    <h2 className={`text-xl cursor-pointer hover:text-white ${router.asPath == "/carriere" ? "underline" : "text-black"}`}>
                        {t("Career")}
                    </h2>
                </Link>
                <Link href="/about">
                    <h2 className={`text-xl cursor-pointer hover:text-white ${router.asPath == "/about" ? "underline" : "text-black"}`}>
                        {t("About_us")}
                    </h2>
                </Link>
                <Link href="/contact">
                    <h2 className={`text-xl cursor-pointer hover:text-white ${router.asPath == "/contact" ? "underline" : "text-black"}`}>
                        {t("Contact_us")}
                    </h2>
                </Link>
            </>
        )
    }

    const RightToLeftMenu = () => {
        return(
            <>
                <Link href="/contact">
                    <h2 className={`text-xl cursor-pointer hover:text-white ${router.asPath == "/contact" ? "underline" : "text-black"}`}>
                        {t("Contact_us")}
                    </h2>
                </Link>
                <Link href="/about">
                    <h2 className={`text-xl cursor-pointer hover:text-white ${router.asPath == "/about" ? "underline" : "text-black"}`}>
                        {t("About_us")}
                    </h2>
                </Link>
                <Link href="/carriere">
                    <h2 className={`text-xl cursor-pointer hover:text-white ${router.asPath == "/carriere" ? "underline" : "text-black"}`}>
                        {t("Career")}
                    </h2>
                </Link>

                <Link href="/cities">
                    <h2 className={`text-xl cursor-pointer hover:text-white ${router.asPath == "/cities" ? "underline" : "text-black"}`}>
                        {t("Cities")}
                    </h2>
                </Link>
                <Link href="/">
                    <h2 className={`text-xl cursor-pointer hover:text-white ${router.asPath == "/" ? "underline" : "text-black"}`}>
                        {t("Home")}
                    </h2>
                </Link>
            </>
        )
    }

    return(
        <>        
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={`flex flex-row items-center justify-between py-4 sm:py-8 sm:p-8 px-4`}>
                <Link href="/">
                    <div className="group menu-identity flex flex-row items-center cursor-pointer">
                        <div className="hidden lg:block mr-4">
                            <div className="block group-hover:hidden">
                                <Image src="/assets/images/mdinamapper_logo_no_text.svg" width={30} height={60} alt="Logo no text" />
                            </div>
                            <div className="hidden group-hover:block">
                                <Image src="/assets/images/mdinamapper_logo_no_text_hover.svg" width={30} height={60} alt="Logo no text hover" />
                            </div>
                        </div>
                        <div className="lg:hidden mr-4">
                            <div className="block group-hover:hidden">
                                <Image src="/assets/images/mdinamapper_logo_no_text.svg" width={25} height={60} alt="Logo no text" />
                            </div>
                            <div className="hidden group-hover:block">
                                <Image src="/assets/images/mdinamapper_logo_no_text_hover.svg" width={25} height={60} alt="Logo no text hover" />
                            </div>
                        </div>
                        <h1 className="text-2xl">
                            MdinaMapper
                        </h1>
                    </div>
                </Link>
                <div className="hidden lg:flex menu flex-col space-y-4">
        
                    <div className="hidden lg:flex menu flex-row justify-between space-x-8">
                        <Link href="https://www.facebook.com/mdinamapper"><Icon.Facebook className="hidden lg:block cursor-pointer hover:text-white" size={25} /></Link>
                        <Link href="https://www.instagram.com/mdinamapper/"><Icon.Instagram className="hidden lg:block cursor-pointer hover:text-white" size={25} /></Link>
                        <Link href="https://twitter.com/mdinamapper"><Icon.Twitter className="hidden lg:block cursor-pointer hover:text-white" size={25} /></Link>
                    {i18n.language === 'fr' || i18n.language === 'en' ? 
                        <LeftToRightMenu />
                    
                    :
                    
                        <RightToLeftMenu />
                    }
                    </div>
                    <div className="hidden lg:flex flex-row self-end cursor-pointer">
                        <h1 
                            className={`pr-2 text-xl font-bold ${i18n.language === 'en' ? 'underline' : ''}`}
                            onClick={() => i18n.changeLanguage('en')}
                        >
                            English
                        </h1>
                        <h1 
                            className={`px-2 text-xl font-bold ${i18n.language === 'fr' ? 'underline' : ''}`}
                            onClick={() => i18n.changeLanguage('fr')}
                        >
                            Français
                        </h1>
                        <h1 
                            className={`pl-2 text-xl font-bold ${i18n.language === 'ar' ? 'underline' : ''}`}
                            onClick={() => i18n.changeLanguage('ar')}
                        >
                            العربية
                        </h1>
                    </div>
                </div>
                {!mobileMenuOpen ?
                <Icon.Menu className="lg:hidden cursor-pointer" size={25} onClick={() => setMobileMenuOpen(true)}/> :
                <Icon.X className="lg:hidden cursor-pointer" size={25} onClick={() => setMobileMenuOpen(false)}/>}
            </div>
            <div className={`absolute ${mobileMenuOpen ? "flex" : "hidden" } bg-yellow-400 w-full h-full p-6 flex-col space-y-8 z-30`}>
                <div className={`flex flex-col py-2 space-y-4 ${i18n.dir() === "rtl" && "text-right items-end"}`}>
                    <LeftToRightMenu />
                    <div className="pt-8 py-2 space-y-4">
                        <Icon.Globe className="lg:hidden cursor-pointer" size={25}/>
                    </div>
                    <div className="py-2 space-y-4">
                        <h1 
                            className={`cursor-pointer text-xl ${i18n.language === 'en' ? 'underline' : ''}`}
                            onClick={() => {i18n.changeLanguage('en'); setMobileMenuOpen(false);}}
                        >
                            English
                        </h1>
                        <h1 
                            className={`cursor-pointer text-xl ${i18n.language === 'fr' ? 'underline' : ''}`}
                            onClick={() => {i18n.changeLanguage('fr'); setMobileMenuOpen(false);}}
                        >
                            Français
                        </h1>
                        <h1 
                            className={`cursor-pointer text-xl ${i18n.language === 'ar' ? 'underline' : ''}`}
                            onClick={() => {i18n.changeLanguage('ar'); setMobileMenuOpen(false);}}
                        >
                            العربية
                        </h1>
                    </div>
                    <div className="pt-8 py-2 space-y-4">
                        <Icon.Umbrella className="lg:hidden cursor-pointer" size={25}/>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <Link href="/cgu" className="text-xl">
                            {t("Terms_of_service")}
                        </Link>
                    </div>
                    <div className="flex flex-row pt-8 space-x-4 py-4">
                        <Link href="https://www.facebook.com/mdinamapper"><Icon.Facebook className="cursor-pointer hover:text-white" size={25} /></Link>
                        <Link href="https://www.instagram.com/mdinamapper/"><Icon.Instagram className="cursor-pointer hover:text-white" size={25} /></Link>
                        <Link href="https://twitter.com/mdinamapper"><Icon.Twitter className="cursor-pointer hover:text-white" size={25} /></Link>
                    </div>
                </div>
            </div>
        </>
    )
    
}