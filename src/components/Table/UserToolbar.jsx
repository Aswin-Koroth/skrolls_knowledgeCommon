import { useState } from 'react';

import SearchBox from './SearchBox';
import DropdownButton from './ui/DropDownButton';

import useClickOutside from '@/hooks/useClickOutside';
import filter_icon from '@/assets/filter.svg';
import downarrow_icon from '@/assets/downarrow.svg';

const UserToolbar = ({ data, setTableData }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownRef = useClickOutside(activeDropdown, () =>
    setActiveDropdown(null)
  );

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div className="flex flex-col items-center justify-between space-y-3 bg-bg-muted py-4 md:flex-row md:space-x-4 md:space-y-0">
      <SearchBox />
      <div className="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
        <div
          ref={dropdownRef}
          className="flex w-full items-center space-x-3 md:w-auto"
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
                className="absolute top-[110%] z-10 w-48 rounded-lg bg-white p-3 shadow dark:bg-gray-700 max-md:w-full md:right-0"
              >
                <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                  Choose brand
                </h6>
                <ul
                  className="space-y-2 text-sm"
                  aria-labelledby="filterDropdownButton"
                >
                  <li className="flex items-center">
                    <input
                      id="apple"
                      type="checkbox"
                      value=""
                      className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                    />
                    <label
                      htmlFor="apple"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Apple (56)
                    </label>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserToolbar;
