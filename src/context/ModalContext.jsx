import { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isSubmissionPanelOpen, setIsSubmissionPanelOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{ isSubmissionPanelOpen, setIsSubmissionPanelOpen }}
    >
      {children}
      {isSubmissionPanelOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      )}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
