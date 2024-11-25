import Link from "next/link";

const ExitPoint = () => {
  return (
    <div className="mb-10">
      <div className="relative">
        <img
          src="/assets/images/pexels-pixabay-417171.jpg"
          alt="img"
          className="h-64 w-full object-cover opacity-70"
        />
        <div className="w-full absolute top-0 left-0 pt-28 xl:pt-16 lg:px-96">
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-center">
            <Link
              href="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExitPoint;
