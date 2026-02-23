import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as Icon from "react-feather";
import { useRouter } from "next/router";
import Head from "next/head";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

export default function PageHeader() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const router = useRouter();

  const navLinks = [
    { href: "/", label: t("Home") },
    { href: "/contact", label: t("Contact_us") },
  ];

  const linkClass = (href: string) =>
    `relative rounded-lg px-4 py-2.5 text-sm font-medium transition ${router.asPath === href
      ? "text-white bg-white/10"
      : "text-white/85 hover:bg-white/5 hover:text-white"
    }`;

  const LeftToRightMenu = () => (
    <>
      {navLinks.map(({ href, label }) => (
        <Link key={href} href={href} className={linkClass(href)}>
          {label}
        </Link>
      ))}
    </>
  );

  const RightToLeftMenu = () => (
    <>
      {[...navLinks].reverse().map(({ href, label }) => (
        <Link key={href} href={href} className={linkClass(href)}>
          {label}
        </Link>
      ))}
    </>
  );

  const languages = [
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "ar", label: "AR" },
  ];

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 shadow-[0_1px_0_0_rgba(255,255,255,0.03)] backdrop-blur-md">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <nav className="hidden lg:flex lg:min-w-[140px] lg:items-center lg:gap-1">
            {i18n.language === "fr" || i18n.language === "en" ? (
              <LeftToRightMenu />
            ) : (
              <RightToLeftMenu />
            )}
          </nav>

          <Link
            href="/"
            className="group absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-lg py-1 transition hover:opacity-90"
          >
            <span className="text-base font-semibold tracking-tight text-white sm:text-lg">
              TransitLoop
            </span>
          </Link>

          <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3 lg:min-w-[140px]">
            <div className="hidden items-center rounded-lg bg-white/5 p-1 lg:flex">
              {languages.map(({ code, label }) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => i18n.changeLanguage(code)}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${i18n.language === code
                      ? "bg-white/15 text-white shadow-sm"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="hidden lg:flex lg:items-center lg:gap-1">
              <a
                href="https://facebook.com/transitloop"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2.5 text-white/75 transition hover:bg-white/10 hover:text-white"
                aria-label="Facebook"
              >
                <Icon.Facebook size={20} strokeWidth={2} />
              </a>
              <a
                href="https://www.linkedin.com/company/transitloop"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2.5 text-white/75 transition hover:bg-white/10 hover:text-white"
                aria-label="LinkedIn"
              >
                <Icon.Linkedin size={20} strokeWidth={2} />
              </a>
            </div>
            <button
              type="button"
              className="rounded-lg p-2.5 text-white lg:hidden transition hover:bg-white/10 active:bg-white/15"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Icon.Menu size={24} strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${mobileMenuOpen ? "visible" : "invisible"
          }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-full max-w-sm flex-col border-l border-white/10 bg-black shadow-2xl transition-transform duration-200 ease-out ${i18n.dir() === "rtl" ? "left-0 right-auto border-l-0 border-r border-white/10" : ""
            } ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <span className="text-lg font-semibold text-white">Menu</span>
            <button
              type="button"
              className="rounded-lg p-2 text-white hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <Icon.X size={24} />
            </button>
          </div>
          <nav
            className={`flex flex-1 flex-col gap-0.5 p-5 ${i18n.dir() === "rtl" ? "items-end text-right" : ""}`}
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-xl px-4 py-3.5 text-base font-medium transition ${router.asPath === href
                    ? "bg-white/15 text-white"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/cgu"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-4 py-3.5 text-base font-medium text-white/75 hover:bg-white/10 hover:text-white"
            >
              {t("Terms_of_service")}
            </Link>
          </nav>
          <div className="border-t border-white/10 p-6">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/50">
              Langue
            </p>
            <div className="flex flex-wrap gap-2">
              {languages.map(({ code, label }) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => {
                    i18n.changeLanguage(code);
                    setMobileMenuOpen(false);
                  }}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${i18n.language === code
                      ? "bg-white/15 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href="https://facebook.com/transitloop"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-white/80 hover:bg-white/10 hover:text-white"
                aria-label="Facebook"
              >
                <Icon.Facebook size={22} />
              </a>
              <a
                href="https://www.linkedin.com/company/transitloop"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-white/80 hover:bg-white/10 hover:text-white"
                aria-label="LinkedIn"
              >
                <Icon.Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
