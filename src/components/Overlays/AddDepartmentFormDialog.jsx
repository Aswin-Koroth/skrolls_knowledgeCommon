import React, { useState } from 'react';
import { formatFileSize } from '@/lib/utils';
import { DialogClose, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Button from '../Form/ui/Button';
import upload_icon from '@/assets/cloud_upload.svg';
import TrashIcon from '@/assets/TrashIcon';
import ViewIcon from '@/assets/ViewIcon';
import FileInput from '@/components/Form/FileInput';
const AddDepartmentFormDialog = () => {
  const [fileData, setFileData] = useState(null);
  const [file, setFile] = useState(null);
  const [isSubmittable, setisSubmittable] = useState(false);
  //setissubittable

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
        <DialogTitle className="font-bold">Add Department</DialogTitle>
      </DialogHeader>

      <form className="">
        <div className="flex flex-col gap-4 pb-5">
          <div className="flex flex-col gap-2 max-xl:gap-1">
            <label htmlFor="dpt-name" className="select-none text-sm font-bold">
              Department Name
            </label>
            <input
              type="text"
              name="dpt-name"
              id="dpt-name"
              className="h-10 rounded-md border-b-[1px] border-border-primary bg-bg-primary px-2 py-1 outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-2 max-xl:gap-1">
            <label
              htmlFor="description"
              className="select-none text-sm font-bold"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              className="h-40 resize-none rounded-md border-b-[1px] border-border-primary bg-bg-primary px-2 py-1 outline-none"
              required
            ></textarea>
          </div>

          <FileInput label="Cover Image" accept=".png,.jpg,.jpeg,.webp" />
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

export default AddDepartmentFormDialog;
