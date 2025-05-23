import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <nav
      className="flex items-center justify-between px-6 py-4 text-white bg-black"
      role="navigation"
      aria-label="Main Navigation">
      <div className="flex items-center gap-2 text-lg font-bold text-white">
        <span
          className="inline-block w-4 h-4 rounded-full bg-sky-400"
          aria-hidden="true"></span>
        <span>TICKET BOOKING</span>
      </div>
      <div className="flex-1 max-w-xl mx-6">
        <div className="flex items-center px-4 py-2 bg-black border border-gray-700 rounded-md">
          <input
            type="text"
            placeholder="Хайлт"
            className="flex-1 text-white placeholder-gray-400 bg-transparent outline-none"
            aria-label="Search"
          />
          <FaSearch className="text-white" aria-hidden="true" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <FaShoppingCart
          className="text-xl text-white"
          aria-label="Shopping Cart"
        />
        <button className="px-4 py-2 text-white border border-gray-700 rounded-md">
          Бүртгүүлэх
        </button>
        <button className="px-4 py-2 font-medium text-black rounded-md bg-sky-400 hover:bg-sky-500">
          Нэвтрэх
        </button>
      </div>
    </nav>
  );
};

export default Header;
