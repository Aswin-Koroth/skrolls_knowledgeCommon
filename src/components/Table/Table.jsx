import React from 'react';
import IconButton from './ui/IconButton';

const Table = ({ columns, data, actions, emptyMessage = 'No Data' }) => {
  return (
    <div className="h-[460px] min-h-0 overflow-auto">
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead
          style={{ position: 'sticky', top: 0 }}
          className="bg-gray-200 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            {columns.map((column, index) => (
              <th key={index} scope="col" className="px-4 py-3">
                {column.header}
              </th>
            ))}
            {actions && (
              <th scope="col" className="px-4 py-3">
                <span className="sr-only">Actions</span>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + (actions ? 1 : 0)}
                className="pt-5 text-center"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((item, rowIndex) => (
              <tr className="border-b dark:border-gray-700" key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className={`px-4 py-2 ${column.className || ''} ${
                      column.key === 'productName'
                        ? 'whitespace-nowrap font-medium text-gray-900 dark:text-white'
                        : ''
                    }`}
                  >
                    {column.render ? column.render(item) : item[column.key]}
                  </td>
                ))}
                {actions && (
                  <td className="h-200px flex items-center justify-end gap-1 px-4 py-2">
                    {actions.map((action, actionIndex) => (
                      <IconButton
                        key={actionIndex}
                        label={action.label}
                        onclick={() => action.onClick(item)}
                        icon={action.icon}
                      />
                    ))}
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
