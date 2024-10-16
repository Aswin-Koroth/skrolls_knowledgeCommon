import React, { useState, useCallback, useMemo } from 'react';
import { users } from '@/data/constants';
import { TableNav, Table, UserToolbar } from '@/components/Table';
import view_icon from '@/assets/visibility.svg';
import { useModal } from '@/context/ModalContext';

const LibrarianUser = () => {
  const [tableData, setTableData] = useState(users);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const { setIsSubmissionPanelOpen } = useModal();

  const columns = useMemo(
    () => [
      { header: 'Users', key: 'name' },
      { header: 'Status', key: 'status' },
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
    () => [{ label: 'View', onClick: handleView, icon: view_icon }],
    [handleView]
  );

  const setTableDataCallback = useCallback((newData) => {
    setTableData(newData);
    setCurrentPage(1); // Reset to first page when data changes
  }, []);

  const handleAddNew = useCallback(() => {
    setIsSubmissionPanelOpen(true);
  }, [setIsSubmissionPanelOpen]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return tableData.slice(startIndex, startIndex + itemsPerPage);
  }, [tableData, currentPage, itemsPerPage]);
  return (
    <section className="max-xs:p-2 flex h-[calc(100%-80px)] flex-col p-10 pb-2 max-sm:p-5">
      <h1 className="mb-4 text-xl font-bold">User Management</h1>
      <div className="flex min-h-0 flex-col overflow-hidden bg-white dark:bg-gray-800">
        <UserToolbar />
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

export default LibrarianUser;
