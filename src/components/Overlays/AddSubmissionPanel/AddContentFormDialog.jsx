import search_user_icon from '@/assets/search_user.svg';
import upload_icon from '@/assets/cloud_upload.svg';
import warning_icon from '@/assets/warning.svg';
import TrashIcon from '@/assets/TrashIcon';
import ViewIcon from '@/assets/ViewIcon';

import { SUBMISSION_TYPES } from '@/data/constants';
import { DialogClose, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Button from '../SubmissionViewModal/Button';
import { useState } from 'react';

export const AddContentFormDialog = ({ selection }) => {
  const [selected, setSelected] = useState(selection);
  const [fileData, setFileData] = useState(null);
  const [file, setFile] = useState(null);
  const [isSubmittable, setisSubmittable] = useState(false);

  const formatFileSize = (sizeInBytes) => {
    // If the file size is less than 1 MB, convert to KB
    if (sizeInBytes < 1024 * 1024) {
      return (sizeInBytes / 1024).toFixed(2) + ' KB';
    }
    // Else, convert to MB
    else {
      return (sizeInBytes / (1024 * 1024)).toFixed(2) + ' MB';
    }
  };
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
    <>
      <DialogHeader>
        <DialogTitle></DialogTitle>
      </DialogHeader>

      <form className="px-5">
        <div className="flex flex-col gap-4 pb-5">
          <div className="flex flex-col gap-2 max-xl:gap-1">
            <label
              htmlFor="research_activity"
              className="select-none text-sm font-bold"
            >
              Publication Type
            </label>
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              name="research_activity"
              id="research_activity"
              className="h-10 rounded-md border-b-[1px] border-text-primary bg-bg-primary px-2 py-1 text-text-hard outline-none"
            >
              {SUBMISSION_TYPES.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2 max-xl:gap-1">
            <label htmlFor="title" className="select-none text-sm font-bold">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="h-10 rounded-md border-b-[1px] border-border-primary bg-bg-primary px-2 py-1 outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-2 max-xl:gap-1">
            <label htmlFor="doi" className="select-none text-sm font-bold">
              DOI
            </label>
            <input
              type="text"
              name="doi"
              id="doi"
              className="h-10 rounded-md border-b-[1px] border-border-primary bg-bg-primary px-2 py-1 outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-2 max-xl:gap-1">
            <label htmlFor="authors" className="select-none text-sm font-bold">
              Authors
            </label>
            <div className="flex h-10 flex-col gap-1 rounded-md border-b-[1px] border-border-primary bg-bg-primary px-2 py-1">
              <div className="grid w-full grid-cols-2 items-center gap-2"></div>
              <div className="flex items-center gap-2 text-sm font-light">
                <img
                  src={search_user_icon}
                  className="w-4"
                  alt="user search"
                  draggable="false"
                />
                <input
                  type="text"
                  className="w-full bg-bg-primary outline-none placeholder:text-text-secondary"
                  placeholder="Search users"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 max-xl:gap-1">
            <label htmlFor="abstract" className="select-none text-sm font-bold">
              Abstract
            </label>
            <textarea
              name="abstract"
              id="abstract"
              className="h-40 resize-none rounded-md border-b-[1px] border-border-primary bg-bg-primary px-2 py-1 outline-none"
              required
            ></textarea>
          </div>

          <div className="flex flex-col gap-2 max-xl:gap-1">
            <label htmlFor="" className="select-none text-sm font-bold">
              File
            </label>
            {file == null ? (
              <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border-[1px] border-dashed border-border-primary bg-bg-primary px-1 py-1 text-sm text-text-secondary outline-none">
                <div className="flex items-center justify-center gap-2 pt-3">
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
                    accept="pdf"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                    required
                  />
                </div>

                <div className="flex h-fit gap-1 rounded-lg bg-primary p-1">
                  <img
                    src={warning_icon}
                    alt="warning"
                    draggable="false"
                    className="w-7"
                  />
                  <p className="text-xs text-secondary">
                    Uploading copyrighted content without permission can lead to
                    legal trouble, including fines and account suspension.
                    Always ensure you have the right to share what you upload.
                  </p>
                </div>
              </label>
            ) : (
              <div className="flex w-fit items-stretch justify-start gap-3 rounded-md border-[1px] border-border-primary bg-bg-primary p-3">
                <img src={fileData} className="h-40"></img>
                <div className="w-30 flex flex-col items-start justify-between gap-6">
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
                      className="rounded-md bg-red-200 p-2 px-5 font-semibold text-red-600 hover:bg-opacity-50 dark:hover:bg-red-300"
                    >
                      <TrashIcon className="h-4 text-red-500" />
                      <span className="text-base">Delete</span>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-2 text-sm font-bold">
          <DialogClose asChild>
            <div className="cursor-pointer select-none rounded-md bg-bg-primary px-4 py-2 text-lg hover:bg-slate-200">
              Cancel
            </div>
          </DialogClose>
          <input
            type="submit"
            value="Save"
            className="cursor-pointer select-none rounded-md bg-primary px-4 py-2 text-lg text-bg-secondary hover:bg-red-500 active:bg-red-900"
          />
        </div>
      </form>
    </>
  );
};
