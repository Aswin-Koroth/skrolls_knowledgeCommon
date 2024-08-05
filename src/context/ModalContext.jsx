import React, { createContext, useState, useContext } from 'react';
// import { modals as modalName } from '@/data/constants';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [modals, setModals] = useState({});

  const openModal = (modalName) => {
    setModals((prev) => ({ ...prev, [modalName]: true }));
  };

  const closeModal = (modalName) => {
    setModals((prev) => ({ ...prev, [modalName]: false }));
  };

  const isModalOpen = (modalName) => !!modals[modalName];

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isModalOpen }}>
      {children}
      {Object.keys(modals).map(
        (modalName) =>
          modals[modalName] && (
            <div
              key={modalName}
              className="fixed inset-0 z-40 bg-black bg-opacity-30 backdrop-blur-sm"
            ></div>
          )
      )}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
