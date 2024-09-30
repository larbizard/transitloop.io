import React, { useState } from 'react';
import PageHeader from './components/PageHeader'
import PageFooter from './components/PageFooter'
import MobileFooter from './components/MobileFooter'
import Image from 'next/image'
import { useForm, ValidationError } from '@formspree/react'
import Head from 'next/head'


export default function AboutPage() {

    const [state, handleSubmit] = useForm("mzbwjywl");
        

    return (
        <div className="bg-yellow-400 h-screen md:h-full">
            <Head>
            <title>Carrière</title>
            </Head>
            <PageHeader />
            <div className="bg-yellow-400">
                <div className="flex flex-row justify-center">
                    <Image 
                    src="/assets/images/illustrations/peep-standing-27.svg" 
                    className="hidden sm:flex lg:w-1/6" 
                    width={220} height={400} 
                    alt="Standing boy with mustache"/>
                    <div className="p-6 space-y-4">
                        <h1 className="text-2xl font-bold"> 
                        Rejoignez-notre équipe de passionnés !
                        </h1>
                        <p className="">
                        Rejoignez-nous afin de créer la meilleure expérience de plannification de trajet au Maroc.<br/>
                        </p>
                        {state.succeeded ? 
                        <div className="h-full"><p className="text-xl font-bold">Merci, votre message a bien été transmis.</p></div> :
                        <div className="h-full">
                        <h3 className="py-4">Nous recherchons un(e):</h3>
                        <ul className="list-disc pl-4">
                            <li>UX Designer(euse)</li>
                            <li>Developpeur(euse) Web</li>
                            <li>Developpeur(euse) Mobile</li>
                            <li>Developpeur(euse) Java</li>
                            <li>Developpeur(euse) Python</li>
                            <li>Data analysts</li>
                        </ul>
                        <main className="w-full sm:w-3/4">
                            <h2 className="text-xl font-bold py-4"> 
                            Envoyez votre Curriculum Vitae et votre lettre de motivation.
                            </h2>
                            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                                <label htmlFor="email">Email</label>
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
                                <label htmlFor="email">Nom</label>
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
                                <label htmlFor="email">Prénom</label>
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
                                <label htmlFor="message">Pourquoi voulez-vous rejoindre MdinaMapper ?</label>
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
                                    ? 'Soumettre'
                                    : 'Soumis'
                                    }
                                </button>
                            </form>
                        </main></div>}
                    </div>
                </div>
            </div>
            <div className="bg-yellow-400 hidden md:block py-20">
                <PageFooter />
            </div>
            <div className="bg-yellow-400 md:hidden py-10">
                <MobileFooter />
            </div>
        </div>
    )
}
