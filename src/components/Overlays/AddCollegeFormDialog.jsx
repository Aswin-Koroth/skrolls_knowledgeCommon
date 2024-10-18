import React, { useState } from 'react';
import { DialogClose, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import FileInput from '../Form/FileInput';
import Input from '../Form/Input';
import NewListItem from '../general/NewListItem';
import searchUserIcon from '@/assets/search_user.svg';
import Textarea from '../Form/Textarea';
import SelectBox from '../Form/SelectBox';

const AddCollegeFormDialog = () => {
  const [isSubmittable, setisSubmittable] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [universities, setUniversities] = useState([
    { value: 'calicut_university', label: 'Calicut University' },
    { value: 'kannur_university', label: 'Kannur University' },
  ]);
  //setissubittable

  return (
    <>
      <DialogHeader>
        <DialogTitle className="font-bold">Add College</DialogTitle>
      </DialogHeader>

      <form>
        <div className="flex justify-between gap-3">
          <div className="flex w-full flex-col gap-4 pb-5">
            <Input label="Name" placeholder="Farook College" name="name" />
            <SelectBox
              label="Select University"
              name="university"
              options={universities}
            />

            <Textarea label="Address" name="address" />
            <Input label="Librarian Name" name="Name" />
            <Input label="Librarian Email" name="email" />

            <FileInput label="College Logo" accept=".png,.jpg,.jpeg,.webp" />
          </div>
          <div className="flex w-full flex-col gap-4 pb-5">
            <div className="flex gap-2">
              <Input label="Country" placeholder="India" name="location" />
              <Input label="State" placeholder="Kerala" name="location" />
              <Input label="District" placeholder="Calicut" name="location" />
            </div>
            <div className="">
              <Input
                label="Departments"
                name="departments"
                placeholder="Add departments"
                icon={searchUserIcon}
              >
                {isSearching && (
                  <div className="absolute top-full flex max-h-60 w-full flex-col gap-1 overflow-y-auto rounded-md bg-gray-300 p-1">
                    <NewListItem
                      lable="CSE"
                      icon="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    />
                    <NewListItem
                      lable="CSE"
                      icon="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    />
                    <NewListItem
                      lable="CSE"
                      icon="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    />
                    <NewListItem
                      lable="CSE"
                      icon="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    />
                  </div>
                )}
              </Input>
              <div className="mt-3 flex max-h-80 flex-col items-center gap-1 overflow-y-auto rounded-md bg-bg-primary p-1">
                <NewListItem
                  lable="CSE"
                  icon="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                />
                <NewListItem
                  lable="CSE"
                  icon="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                />
                <NewListItem
                  lable="CSE"
                  icon="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                />
              </div>
            </div>
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

export default AddCollegeFormDialog;
