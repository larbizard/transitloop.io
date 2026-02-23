import Image from "next/image";
import i18n from "i18next";
import Link from "next/link";

const BLASSTY_APP_URL = "https://app.blassty.ma";

const NosRealisations = () => {
  const TextBlock = ({ className = "" }: { className?: string }) => (
    <div
      className={`flex flex-col justify-center px-4 py-10 md:w-1/5 md:justify-start ${className}`}
    >
      <h1
        className={`text-2xl font-black text-black xl:text-4xl ${i18n.language === "ar" ? "text-right" : ""}`}
      >
        Blassty
      </h1>
      <p className={`mt-2 text-black/80 ${i18n.language === "ar" ? "text-right" : ""}`}>
        Application de mobilité pour la région de Rabat. Planification
        d&apos;itinéraires tramway, bus, vélo-taxi et parkings.
      </p>
      <Link
        href={BLASSTY_APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block font-semibold text-black underline hover:no-underline"
      >
        Ouvrir l&apos;application →
      </Link>
    </div>
  );

  return (
    <>
      <div className="flex flex-col justify-center bg-white pt-10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:text-center">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-balance">
            Notre application en marque blanche est déployée dans la région de
            Rabat sous le nom de{" "}
            <a
              href={BLASSTY_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Blassty
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center bg-white py-20 md:flex-row">
        {i18n.language !== "ar" ? (
          <>
            <TextBlock />
            <div className="flex flex-1 justify-center px-2 self-center md:self-center">
              <Image
                src="/assets/images/blassty-app-screenshot.png"
                width={400}
                height={700}
                alt="Application Blassty - Planification d'itinéraires à Rabat"
                className="max-h-[700px] w-auto object-contain"
              />
            </div>
          </>
        ) : (
          <>
            <TextBlock className="md:hidden" />
            <div className="flex flex-1 justify-center px-2 self-center md:self-center">
              <Image
                src="/assets/images/blassty-app-screenshot.png"
                width={400}
                height={700}
                alt="Application Blassty - Planification d'itinéraires à Rabat"
                className="max-h-[700px] w-auto object-contain"
              />
            </div>
            <TextBlock className="hidden md:block" />
          </>
        )}
      </div>
    </>
  );
};

export default NosRealisations;
