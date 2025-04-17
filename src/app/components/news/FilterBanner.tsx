import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const FilterBanner = () => {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");

  if (!filter) return null;

  const getFilterLabel = (filter: string) => {
    switch (filter.toLowerCase()) {
      case "villa":
        return "La Villa de los Niños";
      case "scholas":
        return "Scholas Ocurrentes";
      case "ludica":
        return "Lúdica";
      case "teleton":
        return "Fundación Teletón";
      case "1111":
        return "Fundación 11 11";
      default:
        return filter;
    }
  };

  return (
    <div className="bg-blue-50 p-4 mb-6 rounded-lg">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-blue-800">
          Mostrando:{" "}
          <span className="font-semibold">{getFilterLabel(filter)}</span>
        </p>
        <Link
          href="/noticias"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Ver todas las noticias
        </Link>
      </div>
    </div>
  );
};
