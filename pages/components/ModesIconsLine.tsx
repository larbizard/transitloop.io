import Image from 'next/image'

export default function ModesIconsLine() {
    return (<div className="bg-yellow-400 flex flex-col md:py-4">
        <div className="hidden md:flex flex-row justify-center p-8">
            <div className="flex flex-row items-center">
                <Image src="/assets/images/icons/location.svg" className="hover:text-white" width={30} height={30} alt="Location icon" />
                <p className="text-4xl bold px-4">.</p>
                <Image src="/assets/images/icons/8679664_walk_fill_icon.svg" width={30} height={30} alt="Walk icon" />
                <p className="text-4xl bold px-4">.</p>
                <Image src="/assets/images/icons/8541789_bus_transport_icon.svg" width={30} height={30} alt="Bus icon" />
                <p className="text-4xl bold px-4">.</p>
                <Image src="/assets/images/icons/6646595_and_fast_rail_train_transport_icon.svg" width={40} height={40} alt="Train icon" />
                <p className="text-4xl bold px-4">.</p>
                <Image src="/assets/images/icons/7437314_cycle_bicycle_bike_icon.svg" width={30} height={30} alt="Bike icon" />
                <p className="text-4xl bold px-4">.</p>
                <Image src="/assets/images/icons/9055574_bxs_taxi_icon.svg" width={30} height={30} alt="Taxi icon" />
                <p className="text-4xl bold px-4">.</p>
                <Image src="/assets/images/icons/location.svg" className="rotate-180" width={30} height={30} alt="Location icon" />
            </div>
        </div>
    </div>)
}