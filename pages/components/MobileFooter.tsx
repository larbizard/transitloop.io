import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as Icon from 'react-feather'
import { useRouter } from 'next/router'


export default function MobileFooter () {

    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const router = useRouter()

    React.useEffect(() => {

    }, [])

    return(
        <div className="fixed bottom-0 bg-yellow-400 w-full py-4 border-t-2">
            <div className="flex flex-row justify-center space-between space-x-20">
                <Link href="/" onClick={() => {if(router.asPath == "/") setMobileMenuOpen(false)}}>
                    <Icon.Home className="cursor-pointer" size={25} color={router.asPath == "/" ? "black" : "white"}/>
                </Link>
                <Link href="/carriere" onClick={() => {if(router.asPath == "/carriere") setMobileMenuOpen(false)}}>
                    <Icon.Briefcase className="cursor-pointer" size={25} color={router.asPath == "/carriere" ? "black" : "white"}/>
                </Link>
                <Link href="/about" onClick={() => {if(router.asPath == "/about") setMobileMenuOpen(false)}}>
                    <Icon.BookOpen className="cursor-pointer" size={25} color={router.asPath == "/about" ? "black" : "white"}/>
                </Link>
                <Link href="/contact" onClick={() => {if(router.asPath == "/contact") setMobileMenuOpen(false)}}>
                    <Icon.MessageCircle className="cursor-pointer" size={25} color={router.asPath == "/contact" ? "black" : "white"}/>
                </Link>
            </div>
        </div>
    )
    
}