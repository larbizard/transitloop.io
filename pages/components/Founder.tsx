import Image from "next/image";
import { useTranslation } from "react-i18next";

const team = [
  {
    name: "Gharib Larbi",
    roleKey: "Founder.role_founder",
    image: "/assets/images/larbi_gharib_low_res.jpeg",
    alt: "Gharib Larbi",
  },
  {
    name: "Yassire Mtioui",
    roleKey: "Founder.role_fullstack",
    image: "/assets/images/yassire-mtioui.png",
    alt: "Yassire Mtioui",
  },
  {
    name: "Youssef Sagaoui",
    roleKey: "Founder.role_designer",
    image: "/assets/images/youssef-sagaoui.png",
    alt: "Youssef Sagaoui",
  },
];

const Founder = () => {
  const { t } = useTranslation();

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <img
          alt=""
          src="/assets/images/transitloop_logo_black.png"
          className="mx-auto h-12"
        />
        <blockquote className="mt-10 text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
          <p>{t("Founder.quote")}</p>
        </blockquote>
        <div className="mt-12">
          <h3 className="text-center text-lg font-semibold text-gray-900 sm:text-xl">
            {t("Founder.team_title")}
          </h3>
          <ul className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {team.map((member) => (
              <li
                key={member.name}
                className="flex flex-col items-center text-center"
              >
                <Image
                  alt={member.alt}
                  src={member.image}
                  className="size-28 rounded-full object-cover sm:size-36"
                  width={144}
                  height={144}
                />
                <div className="mt-4">
                  <div className="font-semibold text-gray-900">{member.name}</div>
                  <div className="text-gray-600">{t(member.roleKey)}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Founder;
