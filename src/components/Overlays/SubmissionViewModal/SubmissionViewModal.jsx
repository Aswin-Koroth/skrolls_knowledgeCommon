import { useModal } from '@/context/ModalContext';
import useClickOutside from '@/hooks/useClickOutside';
import { useRef } from 'react';
import { modals } from '@/data/constants';
import { cn } from '@/lib/utils';
import Button from './Button';
import EditIcon from '@/assets/EditIcon';
import TrashIcon from '@/assets/TrashIcon';
import CheckIcon from '@/assets/CheckIcon';
import Attatchment from './Attatchment';
import close_icon from '@/assets/close.svg';

const SubmissionViewModal = () => {
  const { isModalOpen, closeModal } = useModal();
  const modalRef = useClickOutside(isModalOpen(modals.VIEW_MODAL), () =>
    closeModal(modals.VIEW_MODAL)
  );
  if (!isModalOpen(modals.VIEW_MODAL)) return null;

  console.log('rendered');

  return (
    <div
      ref={modalRef}
      className={cn(
        'max-h-[95%] max-w-[90%] overflow-y-auto rounded-sm bg-background-sec px-7 pt-7 dark:bg-gray-900 max-lg:w-[80%] lg:w-[70%]',
        {
          block: isModalOpen(modals.VIEW_MODAL),
          hidden: !isModalOpen(modals.VIEW_MODAL),
        },
        'absolute left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]'
      )}
    >
      <img
        src={close_icon}
        className="absolute right-2 top-2 float-end cursor-pointer rounded-full p-1 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-500"
        alt="close"
        onClick={() => {
          closeModal(modals.VIEW_MODAL);
        }}
      />
      <H1>Title</H1>
      <TextContainer>
        Handheld augmented reality indoor navigation with activity-based
        instructions
      </TextContainer>
      <H1>Abstract</H1>
      <TextContainer>
        In this study, we investigate the multifaceted interactions between
        emerging technologies and contemporary social dynamics. Leveraging a
        comprehensive dataset spanning various industries, we employ advanced
        analytical techniques to explore the implications of technological
        advancements on societal structures and individual behaviors. Our
        findings reveal significant correlations between the adoption of new
        technologies and shifts in economic, cultural, and psychological
        paradigms. The research highlights the importance of adaptive strategies
        for stakeholders to harness the benefits while mitigating the challenges
        posed by rapid technological changes. This abstract serves as a
        placeholder, providing a concise overview of the anticipated scope and
        impact of the forthcoming journal article.
      </TextContainer>
      <H1>Authors</H1>
      <TextContainer>
        <Button className="dark:bg-white dark:text-text">A. Majeed</Button>
        <Button className="dark:bg-white dark:text-text"> Anurag T K</Button>
        <Button className="dark:bg-white dark:text-text">Ishaque Risan</Button>
      </TextContainer>
      <H1>Attatchments</H1>
      <TextContainer>
        <Attatchment />
        <Attatchment />
      </TextContainer>
      <section className="border-1 sticky bottom-0 flex gap-2 border-t-2 bg-background-sec py-3 dark:border-gray-800 dark:bg-gray-900 max-sm:gap-5">
        <Button className="bg-green-200 font-semibold text-green-600 hover:bg-opacity-50 dark:hover:bg-green-300">
          <CheckIcon className="t h-4" />
          Approve
        </Button>
        <Button className="bg-red-200 font-semibold text-red-600 hover:bg-opacity-50 dark:hover:bg-red-300">
          <TrashIcon className="h-4" />
          Delete
        </Button>
        <Button className="bg-black font-semibold hover:bg-opacity-50 dark:bg-white dark:text-black dark:hover:bg-gray-300">
          <EditIcon className="h-4" />
          Edit
        </Button>
      </section>
    </div>
  );
};

const H1 = ({ children }) => {
  return <div className="font-bold dark:text-white">{children}</div>;
};

const TextContainer = ({ children }) => {
  return (
    <div className="mb-4 mt-1 flex flex-wrap gap-1 rounded-sm bg-background-mut p-2 text-sm text-text-sec dark:bg-gray-700 dark:text-gray-100">
      {children}
    </div>
  );
};

export default SubmissionViewModal;
