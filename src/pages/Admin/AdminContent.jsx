import { products } from '@/data/constants';
import { TableNav, TableToolbar, Table } from '@/components/Table';
import { useState } from 'react';

const AdminContent = () => {
  const [tableData, setTableData] = useState(products);

  return (
    <>
      <section className="flex h-[calc(100%-80px)] flex-col p-10 pb-2 max-sm:p-5 max-[375px]:p-2">
        <div className="text-xl font-bold">Content Management</div>
        <div className="flex min-h-0 flex-col overflow-hidden bg-white dark:bg-gray-800">
          <TableToolbar
            data={products}
            setTableData={setTableData}
            action={() => {}}
          />
          <Table tableData={tableData} />
          <TableNav />
        </div>
      </section>
    </>
  );
};

export default AdminContent;
