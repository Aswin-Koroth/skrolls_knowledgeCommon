import { useEffect, useRef, useState } from 'react';
import search_icon from '@/assets/search.svg';
import filter_icon from '@/assets/filter.svg';
import downarrow_icon from '@/assets/downarrow.svg';
import add_icon from '@/assets/add.svg';
import { useModal } from '@/context/ModalContext';
import DropdownButton from './ui/DropDownButton';

const TableToolbar = ({ data, setTableData }) => {
  const { setIsSubmissionPanelOpen } = useModal();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

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
    <div class="flex flex-col items-center justify-between space-y-3 bg-background py-4 md:flex-row md:space-x-4 md:space-y-0">
      <div class="w-full md:w-1/2">
        <form class="flex items-center">
          <div class="relative w-full">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <img src={search_icon} className="h-5 w-5" alt="" />
            </div>
            <input
              type="text"
              id="simple-search"
              class="dark:focus:ring-primary-500 dark:focus:border-primary-500 block h-[37px] w-full border-[1px] border-gray-200 bg-gray-50 p-2 pl-10 text-sm text-gray-900 placeholder-text-fade focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="Search"
              required=""
              value={searchQuery}
              onInput={handleInput}
            />
          </div>
        </form>
      </div>
      <div class="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
        <div
          ref={dropdownRef}
          class="flex w-full items-center space-x-3 md:w-auto"
        >
          <div className="relative w-full">
            <DropdownButton
              onClick={() => toggleDropdown('filter')}
              dropdownId="filterDropdown"
              isActive={activeDropdown === 'filter'}
            >
              <img
                src={filter_icon}
                alt="filter icon"
                className="h- mr-2 w-5"
              />
              Filter
              <img
                src={downarrow_icon}
                alt="down arrow"
                className="-mr-1 ml-1.5 w-7"
              />
            </DropdownButton>
            {activeDropdown === 'filter' && (
              <div
                id="filterDropdown"
                class="absolute top-[110%] z-10 w-48 rounded-lg bg-white p-3 shadow dark:bg-gray-700 max-md:w-full md:right-0"
              >
                <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                  Choose brand
                </h6>
                <ul
                  class="space-y-2 text-sm"
                  aria-labelledby="filterDropdownButton"
                >
                  <li class="flex items-center">
                    <input
                      id="apple"
                      type="checkbox"
                      value=""
                      class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                    />
                    <label
                      htmlFor="apple"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Apple (56)
                    </label>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative w-full">
            <DropdownButton
              onClick={() => toggleDropdown('action')}
              dropdownId="actionsDropdown"
              isActive={activeDropdown === 'action'}
            >
              <img
                src={downarrow_icon}
                alt="down arrow"
                className="-ml-1 mr-1.5 w-7"
              />
              Actions
            </DropdownButton>
            {activeDropdown === 'action' && (
              <div
                id="actionsDropdown"
                class="absolute top-[110%] z-10 w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700 max-md:w-full md:right-0"
              >
                {/* <ul
                  class="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="actionsDropdownButton"
                ></ul> */}
                <div class="py-1">
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Delete all
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="relative w-full">
            <button
              class="hover:text-primary-700 flex h-[37px] w-full items-center justify-center border border-gray-200 bg-primary px-4 py-1 text-sm font-medium text-white hover:bg-red-400 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
              type="button"
              onClick={() => {
                setIsSubmissionPanelOpen(true);
              }}
            >
              <img src={add_icon} alt="Add icon" className="-ml-1 mr-1.5 w-6" />
              <span className="leading-none">Add new</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableToolbar;
