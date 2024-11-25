import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import MobileFooter from "./components/MobileFooter";
import Features from "./components/Features";
import StayInformed from "./components/StayInformed";
import DownloadApp from "./components/DownloadApp";
import Head from "next/head";
import Map from "./components/Map";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Founder from "./components/Founder";
import EntryPoint from "./components/EntryPoint";
import ExitPoint from "./components/ExitPoint";
export default function IndexPage() {
  const { t } = useTranslation();

  return (
    <div className="bg-black h-screen md:h-full">
      <Head>
        <title className="text-white">TransitLoop</title>
      </Head>
      <PageHeader />
      <EntryPoint />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 lg:text-center">
        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance">
          Découvrez nos solutions
        </p>
      </div>
      <Features />
      <div className="bg-black flex flex-col py-4 md:py-4">
        <div className="flex md:hidden flex-row justify-center">
          <div className="flex flex-row items-center">
            <Image
              src="/assets/images/icons/location.svg"
              width={30}
              height={30}
              alt="Location icon"
            />
            <p className="text-4xl bold px-2">.</p>
            <Image
              src="/assets/images/icons/8679664_walk_fill_icon.svg"
              width={25}
              height={25}
              alt="Walk icon"
            />
            <p className="text-4xl bold px-2">.</p>
            <Image
              src="/assets/images/icons/8541789_bus_transport_icon.svg"
              width={20}
              height={20}
              alt="Bus icon"
            />
            <p className="text-4xl bold px-2">.</p>
            <Image
              src="/assets/images/icons/6646595_and_fast_rail_train_transport_icon.svg"
              width={30}
              height={30}
              alt="Train icon"
            />
            <p className="text-4xl bold px-2">.</p>
            <Image
              src="/assets/images/icons/7437314_cycle_bicycle_bike_icon.svg"
              width={30}
              height={30}
              alt="Bike icon"
            />
            <p className="text-4xl bold px-2">.</p>
            <Image
              src="/assets/images/icons/9055574_bxs_taxi_icon.svg"
              width={30}
              height={30}
              alt="Taxi icon"
            />
            <p className="text-4xl bold px-2">.</p>
            <Image
              src="/assets/images/icons/location.svg"
              className="rotate-180"
              width={30}
              height={30}
              alt="Location icon"
            />
          </div>
        </div>
        <div className="hidden md:flex flex-row justify-center p-8">
          <div className="flex flex-row items-center">
            <Image
              src="/assets/images/icons/location.svg"
              className="hover:text-white"
              width={30}
              height={30}
              alt="Location icon"
            />
            <p className="text-4xl bold px-4">.</p>
            <Image
              src="/assets/images/icons/8679664_walk_fill_icon.svg"
              width={30}
              height={30}
              alt="Walk icon"
            />
            <p className="text-4xl bold px-4">.</p>
            <Image
              src="/assets/images/icons/8541789_bus_transport_icon.svg"
              width={30}
              height={30}
              alt="Bus icon"
            />
            <p className="text-4xl bold px-4">.</p>
            <Image
              src="/assets/images/icons/6646595_and_fast_rail_train_transport_icon.svg"
              width={40}
              height={40}
              alt="Train icon"
            />
            <p className="text-4xl bold px-4">.</p>
            <Image
              src="/assets/images/icons/7437314_cycle_bicycle_bike_icon.svg"
              width={30}
              height={30}
              alt="Bike icon"
            />
            <p className="text-4xl bold px-4">.</p>
            <Image
              src="/assets/images/icons/9055574_bxs_taxi_icon.svg"
              width={30}
              height={30}
              alt="Taxi icon"
            />
            <p className="text-4xl bold px-4">.</p>
            <Image
              src="/assets/images/icons/location.svg"
              className="rotate-180"
              width={30}
              height={30}
              alt="Location icon"
            />
          </div>
        </div>
      </div>
      {/* <Map /> */}
      {/* <div className="bg-black hidden md:block py-8 px-2">
        <h1 className="flex flex-row text-white justify-center text-xl text-center font-bold py-8">{t("Soon_in_all_cities")}</h1>
        <StayInformed />
      </div> */}
      <ExitPoint />

      <div className="center">
      <img
          alt=""
          src="/assets/images/transitloop_logo.svg"
          className="mx-auto h-12"
        />
        </div>
      <h1 className="bg-black text-white text-4xl text-center py-2">
        TransitLoop
      </h1>
      <div className="bg-black hidden md:block py-20">
        <PageFooter />
      </div>
      <div className="bg-black md:hidden py-10">
        <MobileFooter />
      </div>
    </div>
  );
}
