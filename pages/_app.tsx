

import '../styles/globals.css'
import type { AppProps } from 'next/app'

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../lang/en.json"
import ar from "../lang/ar.json"
import fr from "../lang/fr.json"

i18n
  .use(initReactI18next)
  .init({
    lng: "fr",
    fallbackLng: "fr",
    resources: {
      en:{
        translation: en
      },
      fr:{
        translation: fr
      },
      ar:{
        translation: ar
      }
    },
    interpolation: {
      escapeValue: false
    }
  });

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App