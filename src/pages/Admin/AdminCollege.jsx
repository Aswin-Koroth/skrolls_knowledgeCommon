import React, { useState, useCallback, useMemo } from 'react';
import { products } from '@/data/constants';
import { TableNav, CollegeToolbar, Table } from '@/components/Table';
import search_icon from '@/assets/search.svg';
import approve_icon from '@/assets/search.svg';
import reject_icon from '@/assets/search.svg';

const AdminCollege = () => {
  const [tableData, setTableData] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const columns = useMemo(
    () => [
      { header: 'Product name', key: 'productName' },
      { header: 'Category', key: 'category' },
      { header: 'Brand', key: 'brand' },
      {
        header: 'Description',
        key: 'description',
        className: 'max-w-xs truncate',
        render: (item) => item.description,
      },
      {
        header: 'Price',
        key: 'price',
        render: (item) => `$${item.price.toFixed(2)}`,
      },
    ],
    []
  );

  const handleView = useCallback((item) => {
    console.log('Viewing item:', item);
  }, []);

  const handleApprove = useCallback((item) => {
    console.log('Approving item:', item);
  }, []);

  const handleReject = useCallback((item) => {
    console.log('Rejecting item:', item);
  }, []);

  const actions = useMemo(
    () => [
      { label: 'View', onClick: handleView, icon: search_icon },
      { label: 'Approve', onClick: handleApprove, icon: approve_icon },
      { label: 'Reject', onClick: handleReject, icon: reject_icon },
    ],
    [handleView, handleApprove, handleReject]
  );

  const setTableDataCallback = useCallback((newData) => {
    setTableData(newData);
    setCurrentPage(1);
  }, []);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return tableData.slice(startIndex, startIndex + itemsPerPage);
  }, [tableData, currentPage, itemsPerPage]);

  return (
    <section className="max-xs:p-2 flex h-[calc(100%-80px)] flex-col p-10 pb-2 max-sm:p-5">
      <h1 className="mb-4 text-xl font-bold">College Management</h1>
      <div className="flex min-h-0 flex-col overflow-hidden bg-white dark:bg-gray-800">
        <CollegeToolbar />
        <Table
          columns={columns}
          data={paginatedData}
          actions={actions}
          emptyMessage="No products found"
        />
        <TableNav
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={tableData.length}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </section>
  );
};

export default AdminCollege;
