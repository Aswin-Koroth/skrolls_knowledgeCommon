import add_icon from '@/assets/add.svg';
import settings_icon from '@/assets/settings.svg';
import { useModal } from '@/context/ModalContext';
import useClickOutside from '@/hooks/useClickOutside';
import { useRef } from 'react';
import clsx from 'clsx';

const AddSubmissionPanel = () => {
  const { isSubmissionPanelOpen, setIsSubmissionPanelOpen } = useModal();
  const panelRef = useRef(null);

  useClickOutside(panelRef, () => setIsSubmissionPanelOpen(false));

  const SUBMISSION_TYPES = [
    'Article',
    'Book',
    'Thesis',
    'Dissertation',
    'Conference Proceedings',
    'Presentations',
    'Question Papers',
    'Others',
  ];

  return (
    <div
      className={clsx(
        'fixed z-50 flex h-full flex-col overflow-hidden bg-white pt-1 transition-all duration-300',
        {
          'right-0': isSubmissionPanelOpen,
          '-right-[100%]': !isSubmissionPanelOpen,
        }
      )}
      ref={panelRef}
    >
      <img
        src={add_icon}
        alt="close"
        className="m-3 h-7 w-7 cursor-pointer self-end rounded-full bg-primary hover:bg-red-200"
        onClick={() => {
          setIsSubmissionPanelOpen(false);
        }}
      />
      {SUBMISSION_TYPES.map((item) => (
        <div
          key={item}
          className="group box-border flex h-16 cursor-pointer items-center gap-2 border-[1px] border-border-sec from-white via-white to-primary p-2 transition-all hover:border-primary hover:bg-gradient-to-r"
        >
          <img
            src={settings_icon}
            className="h-11 rounded-md bg-background-mut p-2 group-hover:bg-red-100"
            alt={item}
          />
          <span className="group-hover:text-primary">{item}</span>
          <span className="invisible ml-auto flex items-center gap-2 text-white group-hover:visible">
            <img src={add_icon} alt="create" className="h-5" />
            Create
          </span>
        </div>
      ))}
    </div>
  );
};

export default AddSubmissionPanel;
