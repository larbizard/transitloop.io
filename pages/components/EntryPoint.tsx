import Link from "next/link";

const EntryPoint = () => {
  return (
    <div className="mb-10">
      <div className="relative">
        <img
          src="/assets/images/pexels-toter-yau-5305300-6009287.jpg"
          alt="img"
          className="h-screen w-full object-cover opacity-70"
        />
        <div className="w-full absolute top-0 left-0 pt-28 xl:pt-96 px-4 xl:px-96">
          <h2 className="text-5xl lg:text-7xl font-bold text-white text-start lg:w-2/3">
            Construisons ensemble la mobilité de demain
          </h2>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Link
              href="/contact"
              className="rounded-md w-full xl:w-auto bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white text-center"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EntryPoint;
