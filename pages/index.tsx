import PageHeader from './components/PageHeader'
import PageFooter from './components/PageFooter'
import MobileFooter from './components/MobileFooter'
import StayInformed from './components/StayInformed'
import DownloadApp from './components/DownloadApp'
import Head from 'next/head'
import Map from "./components/Map"
import { useTranslation } from "react-i18next";
import Image from 'next/image'
export default function IndexPage() {

  const { t } = useTranslation();

  return (
    <div className="bg-yellow-400 h-screen md:h-full">
      <Head>
          <title>MdinaMapper</title>
      </Head>
      <PageHeader />
      <DownloadApp />

       <div className="bg-yellow-400 flex flex-col py-4 md:py-4">
        <div className="flex md:hidden flex-row justify-center">
          <div className="flex flex-row items-center">
            <Image src="/assets/images/icons/location.svg" width={30} height={30} alt="Location icon"/>
            <p className="text-4xl bold px-2">.</p>
            <Image src="/assets/images/icons/8679664_walk_fill_icon.svg" width={25} height={25} alt="Walk icon"/>
            <p className="text-4xl bold px-2">.</p>
            <Image src="/assets/images/icons/8541789_bus_transport_icon.svg" width={20} height={20} alt="Bus icon"/>
            <p className="text-4xl bold px-2">.</p>
            <Image src="/assets/images/icons/6646595_and_fast_rail_train_transport_icon.svg" width={30} height={30} alt="Train icon"/>
            <p className="text-4xl bold px-2">.</p>
            <Image src="/assets/images/icons/7437314_cycle_bicycle_bike_icon.svg" width={30} height={30} alt="Bike icon"/>
            <p className="text-4xl bold px-2">.</p>
            <Image src="/assets/images/icons/9055574_bxs_taxi_icon.svg" width={30} height={30} alt="Taxi icon"/>
            <p className="text-4xl bold px-2">.</p>
            <Image src="/assets/images/icons/location.svg" className="rotate-180" width={30} height={30} alt="Location icon"/>
          </div>
        </div>
        <div className="hidden md:flex flex-row justify-center p-8">
          <div className="flex flex-row items-center">
            <Image src="/assets/images/icons/location.svg" className="hover:text-white" width={30} height={30} alt="Location icon"/>
            <p className="text-4xl bold px-4">.</p>
            <Image src="/assets/images/icons/8679664_walk_fill_icon.svg" width={30} height={30} alt="Walk icon"/>
            <p className="text-4xl bold px-4">.</p>
            <Image src="/assets/images/icons/8541789_bus_transport_icon.svg" width={30} height={30} alt="Bus icon"/>
            <p className="text-4xl bold px-4">.</p>
            <Image src="/assets/images/icons/6646595_and_fast_rail_train_transport_icon.svg" width={40} height={40} alt="Train icon"/>
            <p className="text-4xl bold px-4">.</p>
            <Image src="/assets/images/icons/7437314_cycle_bicycle_bike_icon.svg" width={30} height={30} alt="Bike icon"/>
            <p className="text-4xl bold px-4">.</p>
            <Image src="/assets/images/icons/9055574_bxs_taxi_icon.svg" width={30} height={30} alt="Taxi icon"/>
            <p className="text-4xl bold px-4">.</p>
            <Image src="/assets/images/icons/location.svg" className="rotate-180" width={30} height={30} alt="Location icon"/>
          </div>
        </div>
      </div>

      <h1 className="text-4xl text-center py-2">MdinaMapper.ma</h1>
      {/* <Map /> */}
      <div className="bg-yellow-400 hidden md:block py-8 px-2">
        <h1 className="text-xl text-center py-8">{t("Available_in_casablanca")}</h1>
        <h1 className="flex flex-row justify-center text-xl text-center font-bold py-8">{t("Soon_in_all_cities")}</h1>
        <StayInformed />
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
