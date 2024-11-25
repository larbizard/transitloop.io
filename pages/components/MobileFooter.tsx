import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as Icon from 'react-feather'
import { useRouter } from 'next/router'
import {
    ArrowPathIcon,
    BellAlertIcon,
    BuildingLibraryIcon,
    ChatBubbleBottomCenterIcon,
    ChatBubbleLeftEllipsisIcon,
    CloudArrowUpIcon,
    FingerPrintIcon,
    HomeIcon,
    LockClosedIcon,
    PaperAirplaneIcon,
    PuzzlePieceIcon,
    RectangleStackIcon,
    RssIcon,
    ScaleIcon,
    SignalIcon,
    Square3Stack3DIcon,
    SwatchIcon,
  } from "@heroicons/react/24/outline";

export default function MobileFooter () {

    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const router = useRouter()

    React.useEffect(() => {

    }, [])

    return(
        <div className="fixed bottom-0 bg-black w-full py-4 border-t-2">
            <div className="flex flex-row justify-center space-between space-x-20">
                <Link href="/" onClick={() => {if(router.asPath == "/") setMobileMenuOpen(false)}}>
                    <HomeIcon className={`cursor-pointer ${router.asPath == "/" && "underline"}}`} width={25} color={"white"}/>
                </Link>
                {/* <Link href="/carriere" onClick={() => {if(router.asPath == "/carriere") setMobileMenuOpen(false)}}>
                    <Icon.Briefcase className={`cursor-pointer ${router.asPath == "/" && "underline"}}`} size={25} color={"white"}/>
                </Link>
                <Link href="/about" onClick={() => {if(router.asPath == "/about") setMobileMenuOpen(false)}}>
                    <Icon.BookOpen className={`cursor-pointer ${router.asPath == "/" && "underline"}}`} size={25} color={"white"}/>
                </Link> */}
                <Link href="/contact" onClick={() => {if(router.asPath == "/contact") setMobileMenuOpen(false)}}>
                    <ChatBubbleLeftEllipsisIcon className={`cursor-pointer ${router.asPath == "/" && "underline"}}`} width={25} color={"white"}/>
                </Link>
            </div>
        </div>
    )
    
}