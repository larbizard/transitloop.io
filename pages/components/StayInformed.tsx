import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";

export default function StayInformed() {

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
      url: 'https://formspree.io/f/xlevpvjb',
      data: inputs,
    })
      .then(() => {
        handleServerResponse(
          true,
          'Merci, vous serez le premier informé du lancement.',
        );
      })
      .catch((error: { response: { data: { error: string; }; }; }) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
        <div>
            <div className="flex flex-row justify-center items-start">
                <main className="w-full sm:w-1/3 md:w-3/4 lg:w-1/4 space-y-4">

                <form onSubmit={handleOnSubmit} className="flex flex-col">
                    <input
                    placeholder={`${t("Email")}`}
                    id="email"
                    type="email"
                    name="_replyto"
                    onChange={handleOnChange}
                    required
                    value={inputs.email}
                    className="p-2 text-center"
                    />
                    <button type="submit" disabled={status.submitting} className="bg-black p-2 text-white my-2">
                    {!status.submitting
                        ? !status.submitted
                        ? t("I_want_to_stay_informed")
                        : t("Sent")
                        : t("Sending")}
                    </button>
                </form>
                {status.info.error && (
                    <div className="error">Erreur : {status.info.msg}</div>
                )}
                {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
                </main>
            </div>
        </div>
  );
}
