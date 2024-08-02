import { useState } from 'react';
import search_icon from '@/assets/search.svg';
import { products } from '@/data/constants';
import TableToolbar from './TableToolbar';
import TableNav from './TableNav';
import IconButton from './ui/IconButton';

const Table = () => {
  const [tableData, setTableData] = useState(products);

  return (
    <div className="relative bg-white dark:bg-gray-800 sm:rounded-lg flex flex-col min-h-0">
      <TableToolbar
        data={products}
        setTableData={setTableData}
        action={() => {}}
      />
      {/* <div className="flex h-[430px] min-h-0 min-w-full overflow-hidden"> */}
      <div className="h-[430px] min-h-0 overflow-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead
            style={{ position: 'sticky', top: 0 }}
            className="bg-background-mut text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" className="px-4 py-3">
                Product name
              </th>
              <th scope="col" className="px-4 py-3">
                Category
              </th>
              <th scope="col" className="px-4 py-3">
                Brand
              </th>
              <th scope="col" className="px-4 py-3">
                Description
              </th>
              <th scope="col" className="px-4 py-3">
                Price
              </th>
              <th scope="col" className="px-4 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.length === 0 ? (
              <tr>
                <td colSpan={6} className="pt-5 text-center">
                  No Data
                </td>
              </tr>
            ) : (
              tableData.map((item, index) => (
                <tr className="border-b dark:border-gray-700" key={index}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                    {item.productName}
                  </td>
                  <td className="px-4 py-2">{item.category}</td>
                  <td className="px-4 py-2">{item.brand}</td>
                  <td className="max-w-xs truncate px-4 py-2">
                    {item.description}
                  </td>
                  <td className="px-4 py-2">{item.price}</td>
                  <td className="h-200px flex items-center justify-end gap-1 px-4 py-2">
                    {/* <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg> */}

                    <IconButton
                      label="View"
                      onclick={() => {}}
                      icon={search_icon}
                    />
                    <IconButton
                      label="Approve"
                      onclick={() => {}}
                      icon={search_icon}
                    />
                    <IconButton
                      label="Reject"
                      onclick={() => {}}
                      icon={search_icon}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* </div> */}
      <TableNav />
    </div>
  );
};

export default Table;
