import React, { useState } from "react";
import axios from "axios";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import MobileFooter from "./components/MobileFooter";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: "" },
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });
  const handleServerResponse = (ok: boolean, msg: string) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e: {
    persist: () => void;
    target: { id: any; value: any };
  }) => {
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
  const handleOnSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/xanwraqj",
      data: inputs,
    })
      .then(() => {
        handleServerResponse(true, t("Contact.SuccessMessage"));
      })
      .catch((error: { response: { data: { error: string } } }) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <div className="bg-black h-screen text-white">
      <Head>
        <title>Contact</title>
      </Head>
      <PageHeader />
      <div className="p-6">
        <div className="flex flex-row justify-center items-start">
          <main className="w-full sm:w-1/3 md:w-3/4 lg:w-1/3 space-y-4">
            <h1 className="text-2xl text-center font-bold">
              {t("Contact.Title")}
            </h1>

            <form onSubmit={handleOnSubmit} className="flex flex-col space-y-2">
              <label htmlFor="email">{t("Contact.Email")}</label>
              <input
                id="email"
                type="email"
                name="_replyto"
                onChange={handleOnChange}
                required
                value={inputs.email}
                autoComplete="email"
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm/6"
              />
              <label htmlFor="message">{t("Contact.Message")}</label>
              <textarea
                id="message"
                name="message"
                onChange={handleOnChange}
                required
                value={inputs.message}
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm/6"
              />
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm/6 font-semibold text-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
                disabled={status.submitting}
              >
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
