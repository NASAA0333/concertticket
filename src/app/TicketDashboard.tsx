"use client";
import { useState } from "react";
import { Star, Pencil, Trash2, Plus, X } from "lucide-react";

export default function TicketDashboard() {
  const [filters, setFilters] = useState([
    "Уран бүтээлч",
    "Davaidasha",
    "Хурд",
  ]);
  const [tickets] = useState(
    Array(10).fill({
      name: "Only you",
      artist: "Sally",
      total: 234,
      vip: 234,
      regular: 234,
      cheap: 234,
      date: "10/23",
      profit: "316'000'000₮",
    })
  );

  const removeFilter = (f) => setFilters(filters.filter((x) => x !== f));
  const clearFilters = () => setFilters([]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen text-sm">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-xl font-semibold">Тасалбар</h1>
        <p className="text-gray-500">Идэвхтэй зарагдаж буй тасалбарууд</p>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
        {/* Search */}
        <input
          type="text"
          placeholder="Тасалбар хайх"
          className="px-3 py-2 border rounded-md w-60"
        />

        {/* Filters */}
        <div className="flex items-center flex-wrap gap-2 px-3 py-2 border rounded-md bg-white">
          <Plus size={16} />
          {filters.map((f) => (
            <span
              key={f}
              className="bg-gray-200 px-2 py-1 rounded-full flex items-center gap-1">
              {f}
              <button onClick={() => removeFilter(f)}>
                <X size={14} />
              </button>
            </span>
          ))}
        </div>

        {/* Clear Filters */}
        <button
          onClick={clearFilters}
          className="flex items-center gap-1 px-3 py-2 border rounded-md bg-white">
          Цэвэрлэх <X size={14} />
        </button>

        {/* Date Picker */}
        <input type="date" className="px-3 py-2 border rounded-md bg-white" />
      </div>

      {/* Table */}
      <div className="bg-white border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Онцлох</th>
              <th className="p-2">Тоглолтын нэр</th>
              <th className="p-2">Артист</th>
              <th className="p-2">Нийт тоо</th>
              <th className="p-2">VIP</th>
              <th className="p-2">Regular</th>
              <th className="p-2">Задгай</th>
              <th className="p-2">Тоглох өдөрүүд</th>
              <th className="p-2">Нийт ашиг</th>
              <th className="p-2">Үйлдэл</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                <td className="p-2">
                  <Star size={16} />
                </td>
                <td className="p-2">{ticket.name}</td>
                <td className="p-2">{ticket.artist}</td>
                <td className="p-2">{ticket.total}</td>
                <td className="p-2">{ticket.vip}</td>
                <td className="p-2">{ticket.regular}</td>
                <td className="p-2">{ticket.cheap}</td>
                <td className="p-2">{ticket.date}</td>
                <td className="p-2 font-semibold">{ticket.profit}</td>
                <td className="p-2 flex gap-2">
                  <Star size={16} />
                  <Pencil size={16} />
                  <Trash2 size={16} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center gap-1">
        {["<", 1, 2, 3, 4, 5, 6, ">"].map((p, idx) => (
          <button
            key={idx}
            className="px-3 py-1 border rounded-md bg-white hover:bg-gray-100">
            {p}
          </button>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-400 mt-6">
        ©2024 Copyright
      </footer>
    </div>
  );
}
