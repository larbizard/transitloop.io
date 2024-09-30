import React, { useState } from 'react';
import axios from 'axios';
import PageHeader from './components/PageHeader'
import PageFooter from './components/PageFooter'
import MobileFooter from './components/MobileFooter'
import Head from 'next/head'
import { useTranslation } from "react-i18next";


export default function Contact() {

  const { t } = useTranslation();

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: "" },
  });
  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  });
  const handleServerResponse = (ok:boolean, msg:string) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
        message: '',
      });
    } else {
    setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: msg },
    });
    }
  };
  const handleOnChange = (e: { persist: () => void; target: { id: any; value: any; }; }) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: "" },
    });
  };
  const handleOnSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mwkzrbjg',
      data: inputs,
    })
      .then(() => {
        handleServerResponse(
          true,
          'Merci, votre message a bien été transmis.',
        );
      })
      .catch((error: { response: { data: { error: string; }; }; }) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <div className="bg-yellow-400 h-screen">
        <Head>
          <title>Contact</title>
        </Head>
        <PageHeader />
        <div className="p-6">
            <div className="flex flex-row justify-center items-start">
                <main className="w-full sm:w-1/3 md:w-3/4 lg:w-1/3 space-y-4">
                <h1 className="text-2xl font-bold">{t("Contact.Title")}</h1>

                <form onSubmit={handleOnSubmit} className="flex flex-col space-y-2">
                    <label htmlFor="email">{t("Contact.Email")}</label>
                    <input
                    id="email"
                    type="email"
                    name="_replyto"
                    onChange={handleOnChange}
                    required
                    value={inputs.email}
                    className="p-2"
                    />
                    <label htmlFor="message">{t("Contact.Message")}</label>
                    <textarea
                    id="message"
                    name="message"
                    onChange={handleOnChange}
                    required
                    value={inputs.message}
                    className="p-2"
                    />
                    <button type="submit" disabled={status.submitting} className="bg-black p-2 text-white my-2">
                    {!status.submitting
                        ? !status.submitted
                        ? t("Contact.Submit")
                        : t("Contact.Submitted")
                        : t("Contact.InProgress")}
                    </button>
                </form>
                {status.info.error && (
                    <div className="error">Erreur : {status.info.msg}</div>
                )}
                {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
                </main>
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
