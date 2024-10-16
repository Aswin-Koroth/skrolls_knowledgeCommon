import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import React from 'react';

const DeleteConfirm = ({ dialogType, description, subType, handleDelete }) => {
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle className="text-center font-bold">
          {dialogType === 'Reject' ? (
            <>
              <span className="text-primary">Reject</span> this submission?
            </>
          ) : dialogType === 'Delete' ? (
            <>
              Are you sure you want to
              <span className="text-primary"> Delete</span>?
            </>
          ) : null}
        </AlertDialogTitle>

        <AlertDialogDescription className="flex flex-col gap-2 rounded-md border-b-2 border-gray-300 bg-bg-muted p-2">
          {description}
          <span className="flex w-min items-center justify-between gap-1 rounded-sm bg-secondary p-2">
            {subType}
          </span>
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction className="bg-primary" onClick={handleDelete}>
          {<span className="font-bold text-white">{dialogType}</span>}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default DeleteConfirm;
