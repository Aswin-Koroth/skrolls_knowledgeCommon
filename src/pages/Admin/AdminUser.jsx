import React, { useState, useCallback, useMemo } from 'react';
import { products } from '@/data/constants';
import { TableNav, UserToolbar } from '@/components/Table';
import search_icon from '@/assets/search.svg';
import approve_icon from '@/assets/search.svg';
import reject_icon from '@/assets/search.svg';
import { useModal } from '@/context/ModalContext';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
];

const AdminUser = () => {
  const [tableData, setTableData] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const { setIsSubmissionPanelOpen } = useModal();

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

        <Table>
          <TableHeader>
            <TableRow className="text-lg">
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-base">
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <TableNav
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={columns.length}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </section>
  );
};

export default AdminUser;
