import React, { useState, useCallback, useMemo } from 'react';
import { modals, submission } from '@/data/constants';
import { TableNav, TableToolbar, Table } from '@/components/Table';
import view_icon from '@/assets/visibility.svg';
import edit_icon from '@/assets/edit.svg';
import delete_icon from '@/assets/delete.svg';
import { useModal } from '@/context/ModalContext';
import { Overlays } from '@/components/Overlays';

const LibrarianSubmission = () => {
    const [tableData, setTableData] = useState(submission);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    // const { setIsSubmissionPanelOpen } = useModal();
    const { openModal } = useModal();
  
    const columns = useMemo(
      () => [
        { header: 'Title', key: 'title' },
        { header: 'Type', key: 'type' },
        { header: 'Status', key: 'status' },
      ],
      []
    );
  
    const handleView = useCallback((item) => {
      openModal(modals.VIEW_MODAL);
      // console.log('Viewing item:', item);
    }, []);
  
    const handleApprove = useCallback((item) => {
      console.log('Approving item:', item);
    }, []);
  
    const handleReject = useCallback((item) => {
      console.log('Rejecting item:', item);
    }, []);
  
    const actions = useMemo(
      () => [
        { label: 'View', onClick: handleView, icon: view_icon },
        { label: 'Edit', onClick: handleApprove, icon: edit_icon },
        { label: 'Delete', onClick: handleReject, icon: delete_icon },
      ],
      [handleView, handleApprove, handleReject]
    );
  
    const setTableDataCallback = useCallback((newData) => {
      setTableData(newData);
      setCurrentPage(1); // Reset to first page when data changes
    }, []);
  
    // const handleAddNew = useCallback(() => {
    //   setIsSubmissionPanelOpen(true);
    // }, [setIsSubmissionPanelOpen]);
  
    const paginatedData = useMemo(() => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      return tableData.slice(startIndex, startIndex + itemsPerPage);
    }, [tableData, currentPage, itemsPerPage]);
  return (
    <>
      <section className="static flex h-[calc(100%-80px)] flex-col p-10 pb-2 max-sm:p-5 max-xs:p-2">
        <h1 className="mb-4 text-xl font-bold">Submission Management</h1>
        <div className="flex min-h-0 flex-col overflow-hidden bg-white dark:bg-gray-800">
          <TableToolbar
            data={submission}
            setTableData={setTableDataCallback}
            // searchFields={[
            //   'productName',
            //   'category',
            //   'brand',
            //   'description',
            //   'price',
            // ]}
            // onAddNew={handleAddNew}
          />
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
      <Overlays />
    </>
  );
}

export default LibrarianSubmission
