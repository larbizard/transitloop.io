import React, { useState } from 'react';
import PageHeader from './components/PageHeader'
import PageFooter from './components/PageFooter'
import MobileFooter from './components/MobileFooter'
import Image from 'next/image'
import { useForm, ValidationError } from '@formspree/react'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

export default function AboutPage() {
    const { t } = useTranslation();
    const [state, handleSubmit] = useForm("mzbwjywl");
    const positions = ["position_ux", "position_web", "position_mobile", "position_java", "position_python", "position_devops", "position_data"];

    return (
        <div className="bg-black text-white h-screen md:h-full">
            <Head>
                <title>{t("Career")}</title>
            </Head>
            <PageHeader />
            <div className="bg-black">
                <div className="flex flex-row justify-center">
                    <div className="p-6 space-y-4">
                        <h1 className="text-2xl font-bold"> 
                        {t("Career.hero_title")}
                        </h1>
                        <p className="">
                        {t("Career.hero_subtitle")}<br/>
                        </p>
                        {state.succeeded ? 
                        <div className="h-full"><p className="text-xl font-bold">{t("Career.thank_you")}</p></div> :
                        <div className="h-full">
                        <h3 className="py-4">{t("Career.we_are_looking_for")}</h3>
                        <ul className="list-disc pl-4">
                            {positions.map((key) => (
                                <li key={key}>{t(`Career.${key}`)}</li>
                            ))}
                        </ul>
                        <main className="w-full sm:w-3/4">
                            <h2 className="text-xl font-bold py-4"> 
                            {t("Career.send_cv")}
                            </h2>
                            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                                <label htmlFor="email">{t("Email")}</label>
                                <input
                                id="email"
                                type="email"
                                name="email"
                                required
                                className="p-2"
                                />
                                <ValidationError 
                                    prefix="Email" 
                                    field="email"
                                    errors={state.errors}
                                />
                                <label htmlFor="lastname">{t("Career.lastname")}</label>
                                <input
                                id="lastname"
                                type="lastname"
                                name="lastname"
                                required
                                className="p-2"
                                />
                                <ValidationError 
                                    prefix="LastName" 
                                    field="lastname"
                                    errors={state.errors}
                                />
                                <label htmlFor="firstname">{t("Career.firstname")}</label>
                                <input
                                id="firstname"
                                type="firstname"
                                name="firstname"
                                required
                                className="p-2"
                                />
                                <ValidationError 
                                    prefix="FirstName" 
                                    field="firstname"
                                    errors={state.errors}
                                />
                                <label htmlFor="message">{t("Career.why_join")}</label>
                                <textarea
                                id="message"
                                name="message"
                                required
                                className="p-2"
                                />
                                <ValidationError 
                                    prefix="Message" 
                                    field="message"
                                    errors={state.errors}
                                />
                                {/* <label htmlFor="curriculum-vitae">Curriculum Vitae</label>
                                <input 
                                    type="file"
                                    id="curriculum-vitae"
                                    name="curriculum-vitae" 
                                    required
                                    className="p-2"
                                ></input>
                                <ValidationError 
                                    prefix="Curriculum Vitae" 
                                    field="curriculum-vitae"
                                    errors={state.errors}
                                />
                                <label htmlFor="curriculum-vitae">Lettre de motivation</label>
                                <input 
                                    type="file"
                                    id="lettre-motivation"
                                    name="lettre-motivation" 
                                    required
                                    className="p-2"
                                ></input>
                                <ValidationError 
                                    prefix="Lettre de motivation" 
                                    field="lettre-motivation"
                                    errors={state.errors}
                                /> */}
                                <button type="submit" disabled={state.submitting} className="bg-black p-2 text-white my-2">
                                {!state.submitting
                                    ? t("Career.submit")
                                    : t("Career.submitted")
                                    }
                                </button>
                            </form>
                        </main></div>}
                    </div>
                </div>
            </div>
            <div className="bg-black hidden md:block py-20">
                <PageFooter />
            </div>
            <div className="bg-black md:hidden py-10">
                <MobileFooter />
            </div>
        </div>
    )
}
