import React, { useState } from 'react';
import { DialogClose, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import FileInput from '../Form/FileInput';
import Input from '../Form/Input';

const AddCollegeFormDialog = () => {
  const [isSubmittable, setisSubmittable] = useState(false);
  //setissubittable

  return (
    <>
      <DialogHeader>
        <DialogTitle className="font-bold">Add University</DialogTitle>
      </DialogHeader>

      <form className="align-center flex justify-between">
        <div>
          <div className="flex flex-col gap-4 pb-5">
            <Input label="Name" placeholder="Calicut University" name="name" />
            <Input label="Location" placeholder="Calicut" name="location" />
            <Input label="Website" name="website" />
            <Input label="Email" name="email" />
            <FileInput label="Logo" accept=".png,.jpg,.jpeg,.webp" />
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
        </div>
        <div>
          <Input
            label="Departments"
            name="departments"
            placeholder="Add departments"
          />
        </div>
      </form>
    </>
  );
};

export default AddCollegeFormDialog;
