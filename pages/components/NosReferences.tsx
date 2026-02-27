const NosReferences = () => {
  return (
    <section className="relative isolate overflow-hidden bg-black px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Nos références
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-12">
          <a
            href="https://www.rabatregionmobilite.ma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center transition opacity-90 hover:opacity-100"
            aria-label="Rabat Région Mobilité"
          >
            <img
              src="/assets/images/logo-rrm-officiel.png"
              alt="Rabat Région Mobilité"
              className="h-48 w-auto object-contain sm:h-60"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NosReferences;
