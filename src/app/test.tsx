"use client";
import { useState } from "react";
import { Plus, X } from "lucide-react";

export default function FilterBar() {
  const [filters, setFilters] = useState([
    "Уран бүтээлч",
    "Davaidasha",
    "Хурд",
  ]);

  const removeFilter = (filter) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-md w-full max-w-5xl">
      <input
        type="text"
        placeholder="Тасалбар хайх"
        className="px-3 py-2 border border-gray-300 rounded-md w-60 text-sm"
      />
      <div className="flex flex-wrap items-center gap-2 border border-gray-300 px-3 py-2 rounded-md bg-white">
        <button className="text-gray-500 hover:text-black">
          <Plus size={16} />
        </button>
        {filters.map((filter, index) => (
          <div
            key={index}
            className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full text-sm">
            {filter}
            <button onClick={() => removeFilter(filter)}>
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={clearFilters}
        className="text-sm px-3 py-2 rounded-md bg-white border border-gray-300 hover:bg-gray-100 flex items-center gap-1">
        Цэвэрлэх <X size={14} />
      </button>
      <input
        type="date"
        className="px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"
        placeholder="Өдөр сонгох"
      />
    </div>
  );
}
