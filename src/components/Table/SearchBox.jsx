import { useState } from 'react';
import search_icon from '@/assets/search.svg';

const SearchBox = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInput = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredData = data.filter(
      (item) =>
        item.productName.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.brand.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.price.toString().includes(query)
    );
    setTableData(filteredData);
  };
  return (
    <div className="w-full md:w-1/2">
      <form className="flex items-center">
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <img src={search_icon} className="h-5 w-5" alt="" />
          </div>
          <input
            type="text"
            id="simple-search"
            className="dark:focus:ring-primary-500 dark:focus:border-primary-500 placeholder-text-fade block h-[37px] w-full border-[1px] border-gray-400 bg-gray-50 p-2 pl-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            placeholder="Search"
            required
            value={searchQuery}
            onInput={handleInput}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
