import Table from '@/components/Table/Table';

const AdminContent = () => {
  return (
    <section className="h-[calc(100%-80px)] p-10 pb-2 flex flex-col max-sm:p-5 max-[375px]:p-2">
      <div className="text-xl font-bold">Content Management</div>
      <Table />
    </section>
  );
};

export default AdminContent;
