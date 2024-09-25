import React, { useState, useCallback, useMemo } from 'react';
import { Overlays } from '@/components/Overlays';
import { TableNav, Table } from '@/components/Table';
import { report } from '@/data/constants';
import TableToolBarLibR from '@/components/Librarian/TableToolBarLibR';

const LibrarianReportAndAnalysis = () => {
  const [tableData, setTableData] = useState(report);
  
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    // const { setIsSubmissionPanelOpen } = useModal();

    const columns = useMemo(
      () => [
        { header: 'User', key: 'users' },
        { header: 'Approvals', key: 'approvals' },
        { header: 'Pending', key: 'Pending' },
        { header: 'Rejected', key: 'rejected' },
        { header: 'Views', key: 'views' },
        { header: 'Downloads', key: 'downloads' },
      ],
      []
    );
    
    
    const setTableDataCallback = useCallback((newData) => {
      setTableData(newData);
      setCurrentPage(1); // Reset to first page when data changes
    }, []);
    const paginatedData = useMemo(() => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      return tableData.slice(startIndex, startIndex + itemsPerPage);
    }, [tableData, currentPage, itemsPerPage]);
  return (
    <>
     <section className="static flex h-[calc(100%-80px)] flex-col p-10 pb-2 max-sm:p-5 max-xs:p-2">
        <h1 className="mb-4 text-xl font-bold">Report and Analysis</h1>
        <div className="flex min-h-0 flex-col dark:bg-gray-800 ">
          <TableToolBarLibR/>
          <div className="flex min-h-0 flex-col overflow-hidden bg-white dark:bg-gray-800 mt-[15px] ">
          <Table
            columns={columns}
            data={paginatedData}
            emptyMessage="No products found"
          />
          <TableNav
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalItems={tableData.length}
            itemsPerPage={itemsPerPage}
          />
          </div>
        </div>
     </section>
      <Overlays />
    </>
  )
}

export default LibrarianReportAndAnalysis
