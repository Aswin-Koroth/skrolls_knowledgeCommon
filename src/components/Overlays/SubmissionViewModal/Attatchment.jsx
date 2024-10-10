import Button from './Button';
import download_icon from '@/assets/download.svg';
import cover_img from '@/assets/cover.webp';

const Attatchment = () => {
  return (
    <div className="flex gap-2 rounded-sm bg-gray-200 p-2 pr-3 dark:bg-gray-500">
      <img
        src={cover_img}
        alt="document"
        className="h-24 w-16 rounded-sm bg-black object-cover"
      />
      <div className="flex flex-col">
        <div className="text-sm font-semibold dark:text-white">Book1.pdf</div>
        <div className="text-xs text-text-sec dark:text-gray-300">123kb</div>
        <Button className="mt-auto gap-2 rounded-sm bg-primary text-white hover:bg-red-400 dark:bg-red-500 dark:hover:bg-red-400">
          <img src={download_icon} alt="Download" className="h-5" />
          <div className="h-4 w-[1px] bg-white"></div>
          Download
        </Button>
      </div>
    </div>
  );
};

export default Attatchment;
