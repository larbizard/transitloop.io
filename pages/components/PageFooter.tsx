import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as Icon from "react-feather";
import { useTranslation } from "react-i18next";

export default function PageFooter() {
  const { t } = useTranslation();

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 bg-black">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 0%, white, transparent)`,
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4 lg:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 rounded-lg transition hover:opacity-90"
            >
              <Image
                src="/assets/images/transitloop_logo_no_text.svg"
                width={30}
                height={30}
                alt=""
                className="flex-shrink-0"
              />
              <span className="text-2xl font-semibold tracking-tight text-white">
                TransitLoop
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              {t("Made_with_love_in")}
            </p>
          </div>
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/45">
              Navigation
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link
                  href="/"
                  className="text-sm font-medium text-white/75 transition hover:text-white"
                >
                  {t("Home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-white/75 transition hover:text-white"
                >
                  {t("Contact_us")}
                </Link>
              </li>
              <li>
                <Link
                  href="/cgu"
                  className="text-sm font-medium text-white/75 transition hover:text-white"
                >
                  {t("Terms_of_service")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3 flex flex-col items-start md:items-end md:text-right">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/45">
              Suivez-nous
            </h3>
            <div className="mt-4 flex gap-2">
              <a
                href="https://facebook.com/transitloop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/75 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                aria-label="Facebook"
              >
                <Icon.Facebook size={18} strokeWidth={2} />
              </a>
              <a
                href="https://www.linkedin.com/company/transitloop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/75 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                aria-label="LinkedIn"
              >
                <Icon.Linkedin size={18} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} TransitLoop. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
