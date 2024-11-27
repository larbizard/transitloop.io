import Image from "next/image";
import i18n from "i18next";
import Link from "next/link";
import {
  AdjustmentsVerticalIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

type FeatureProps = {
  title: string;
  features: {
    name: string;
    description: string;
    icon: any;
  }[];
};

const Feature = (data: FeatureProps) => {
  const { title, features } = data;
  return (
    <div className="bg-black sm:py-10 mb-20 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-8 text-pretty text-2xl font-semibold tracking-tight text-white sm:text-2xl lg:text-balance">
            {title}
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features?.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-white">
                  <div className="absolute left-0 top-0 flex size-20 items-center justify-center rounded-lg ">
                    <feature.icon
                      aria-hidden="true"
                      className="size-10 text-white"
                      width={25}
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-white">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex flex-row justify-center"></div>
      </div>
    </div>
  );
};

export default Feature;
