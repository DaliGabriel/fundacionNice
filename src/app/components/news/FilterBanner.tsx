import { useRouter, useSearchParams } from "next/navigation";
import { BiFilterAlt } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Suspense } from "react";

const FilterBannerContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const filter = searchParams.get("filter");

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilter = e.target.value;
    const params = new URLSearchParams(searchParams.toString());

    if (newFilter === "all") {
      params.delete("filter");
    } else {
      params.set("filter", newFilter);
    }

    router.push(`/noticias?${params.toString()}`);
  };

  return (
    <div className="bg-[#e6e6e6] p-6 mb-8 rounded-xl shadow-sm">
      <div className="container mx-auto flex justify-center items-center">
        <div className="w-full max-w-md">
          <label
            htmlFor="news-filter"
            className="text-sm font-medium text-[#00295c] dark:text-[#00295c] mb-2 flex items-center gap-2"
          >
            <BiFilterAlt className="h-4 w-4" />
            Filtrar noticias por categoría
          </label>
          <div className="relative">
            <select
              id="news-filter"
              value={filter || "all"}
              onChange={handleFilterChange}
              className="w-full px-4 py-3 border-2 border-gray rounded-lg bg-white text-gray-800 
                appearance-none cursor-pointer hover:border-dark transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-dark focus:border-dark
                font-medium"
            >
              <option value="all">Todas las noticias</option>
              <option value="villa">La Villa de los Niños</option>
              <option value="scholas">Scholas Ocurrentes</option>
              <option value="ludica">Lúdica</option>
              <option value="teleton">Fundación Teletón</option>
              <option value="1111">Fundación 11 11</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#92c0e9]">
              <MdKeyboardArrowDown className="h-5 w-5" />
            </div>
          </div>
          <p className="mt-2 text-sm text-[#00295c] dark:text-[#00295c]">
            Selecciona una categoría para filtrar las noticias relacionadas
          </p>
        </div>
      </div>
    </div>
  );
};

export const FilterBanner = () => {
  return (
    <Suspense
      fallback={<div className="h-24 bg-blue-50 animate-pulse rounded-xl" />}
    >
      <FilterBannerContent />
    </Suspense>
  );
};
