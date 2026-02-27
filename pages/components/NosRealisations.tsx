import Image from "next/image";
import i18n from "i18next";

import NosRealisationsTextBlock from "./NosRealisationsTextBlock";

const BLASSTY_APP_URL = "https://app.blassty.ma";
const MDINAMAPPER_APP_URL = "https://mdinamapper.com";

const iconContainerStyle: React.CSSProperties = {
  marginBottom: "30px",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const appIconStyleBlassty: React.CSSProperties = {
  width: "160px",
  height: "160px",
  borderRadius: "35px",
  boxShadow:
    "0 20px 40px rgba(0, 0, 0, 0.25), 0 8px 16px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05)",
  backgroundColor: "#3b0841",
  padding: "16px",
  objectFit: "contain",
  display: "block",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

const appIconStyleMdinaMapper: React.CSSProperties = {
  width: "160px",
  height: "160px",
  borderRadius: "35px",
  boxShadow:
    "0 20px 40px rgba(0, 0, 0, 0.25), 0 8px 16px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05)",
  objectFit: "contain",
  display: "block",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};
const NosRealisations = () => {
  return (
    <>
      <section className="flex flex-col justify-center bg-white pt-10">
        <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Nos réalisations
          </h2>
          <div className="flex flex-row justify-center gap-10">
            <a
              href={BLASSTY_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex flex-col items-center transition opacity-90 hover:opacity-100"
              aria-label="Blassty"
            >
              <div style={iconContainerStyle}>
                <img
                  src="/assets/images/blassty-logo.svg"
                  alt="Blassty"
                  style={appIconStyleBlassty}
                />
              </div>
              <span className="text-sm font-medium text-gray-700">Blassty</span>
            </a>
            <a
              href={MDINAMAPPER_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex flex-col items-center transition opacity-90 hover:opacity-100"
              aria-label="MdinaMapper"
            >
              <div style={iconContainerStyle}>
                <img
                  src="/assets/images/mdinamapper-logo.png"
                  alt="MdinaMapper"
                  style={appIconStyleMdinaMapper}
                />
              </div>
              <span className="text-sm font-medium text-gray-700">MdinaMapper</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default NosRealisations;
