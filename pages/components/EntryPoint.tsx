import Link from "next/link";
import { useTranslation } from "react-i18next";

const EntryPoint = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-10">
      <div className="relative">
        <img
          src="/assets/images/pexels-toter-yau-5305300-6009287.jpg"
          alt="img"
          className="h-screen w-full object-cover opacity-70"
        />
        <div className="absolute px-10 lg:px-60 inset-0 flex flex-col justify-center px-4 lg:px-24 items-start">
          <h2 className="text-6xl font-bold text-white text-left max-w-3xl">
            {t("EntryPoint.hero_title")}
          </h2>
          <div className="mt-10 flex items-center justify-start gap-x-6">
            <Link
              href="/contact"
              className="rounded-md w-full xl:w-auto bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white text-center"
            >
              {t("Contact_us")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EntryPoint;
