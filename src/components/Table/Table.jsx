
import search_icon from '@/assets/search.svg';

import IconButton from './ui/IconButton';

const Table = ({tableData}) => {
  

  return (
    
      <div className="h-[460px] min-h-0 overflow-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead
            style={{ position: 'sticky', top: 0 }}
            className="bg-gray-200 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
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
      
  );
};

export default Table;
