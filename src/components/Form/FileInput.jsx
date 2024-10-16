import { formatFileSize } from '@/lib/utils';
import Button from './ui/Button';
import upload_icon from '@/assets/cloud_upload.svg';
import TrashIcon from '@/assets/TrashIcon';
import ViewIcon from '@/assets/ViewIcon';
import { useState } from 'react';

const FileInput = ({ label, accept, children }) => {
  const [fileData, setFileData] = useState(null);
  const [file, setFile] = useState(null);

  const handleView = (e) => {
    window.open(fileData);
  };
  const handleDelete = (e) => {
    setFile(null);
    setFileData(null);
  };
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setFileData(URL.createObjectURL(uploadedFile));
    }
  };
  return (
    <div className="flex flex-col gap-2 max-xl:gap-1">
      <label htmlFor="" className="select-none text-sm font-bold">
        {label}
      </label>
      {file == null ? (
        <label className="flex h-20 cursor-pointer flex-col items-center justify-center rounded-md border-[1px] border-dashed border-border-primary bg-bg-primary p-1 text-sm text-text-secondary outline-none">
          <div className="flex items-center justify-center gap-2">
            <img
              src={upload_icon}
              alt="upload"
              className="w-10"
              draggable="false"
            />
            Upload file
            <input
              type="file"
              name="file"
              id="file"
              accept={accept}
              style={{ display: 'none' }}
              onChange={handleFileChange}
              required
            />
          </div>
        </label>
      ) : (
        <div className="flex w-fit items-stretch justify-start gap-3 rounded-md border-[1px] border-border-primary bg-bg-primary p-3">
          <img src={fileData} className="h-40 w-full"></img>
          <div className="flex flex-col items-start justify-between gap-6">
            <div className="">
              <div className="font-bold">{file.name}</div>
              <div className="text-sm">{formatFileSize(file.size)}</div>
            </div>
            <div className="flex flex-col items-stretch justify-center gap-1 text-lg">
              <Button
                onClick={handleView}
                className="rounded-md bg-black p-2 px-5 font-semibold text-white hover:bg-opacity-50 dark:bg-white dark:text-black dark:hover:bg-gray-300"
              >
                <ViewIcon className="h-4" />
                <span className="text-base">View</span>
              </Button>
              <Button
                onClick={handleDelete}
                className="rounded-md border-[1px] border-black p-2 px-5 font-semibold hover:bg-opacity-50 dark:hover:bg-red-300"
              >
                <TrashIcon className="h-4 text-black" />
                <span className="text-base">Delete</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileInput;
