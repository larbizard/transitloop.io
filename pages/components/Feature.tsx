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
  const isRtl = i18n.language === "ar";
  const dir = isRtl ? "rtl" : "ltr";

  return (
    <div className="bg-black sm:py-10 mb-20 py-20" dir={dir}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`mx-auto max-w-2xl ${isRtl ? "lg:text-right" : "lg:text-center"}`}>
          <p className="mt-8 text-pretty text-2xl font-semibold tracking-tight text-white sm:text-2xl lg:text-balance">
            {title}
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features?.map((feature) => (
              <div
                key={feature.name}
                className={`relative ${isRtl ? "pr-16 pl-0" : "pl-16"}`}
              >
                <dt className={`text-base/7 font-semibold text-white ${isRtl ? "text-right" : ""}`}>
                  <div
                    className={`absolute top-0 flex size-20 items-center justify-center rounded-lg ${isRtl ? "right-0" : "left-0"}`}
                  >
                    <feature.icon
                      aria-hidden="true"
                      className="size-10 text-white"
                      width={25}
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className={`mt-2 text-base/7 text-white ${isRtl ? "text-right" : ""}`}>
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
