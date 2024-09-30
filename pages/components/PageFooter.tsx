import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import i18n from 'i18next';
import { useTranslation } from "react-i18next";

export default function PageFooter () {

    const { t } = useTranslation();

    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const router = useRouter()

    React.useEffect(() => {

    }, [])

    return(
        <>
            <div className="flex flex-row justify-center">
                <div className="flex flex-col text-center">
                    {i18n.language === 'fr' || i18n.language === 'en' ? 
                    <span>{t("Made_with_love_in")} 🇲🇦</span>
                    :
                    <span>🇲🇦 {t("Made_with_love_in")}</span>
                    }
                    <Link href="/cgu" className="font-bold underline py-4">
                        {t("Terms_of_service")}
                    </Link>
                </div>
            </div>
        </>
    )
    
}