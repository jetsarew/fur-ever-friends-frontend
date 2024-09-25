export const handleOpenModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement | null;
    if (modal) {
      (modal).showModal()
    }
  };
  
  export const handleCloseModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement | null;
  
    if (modal) {
      modal.close();
    }
  };
  
  export const isModalOpen = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement | null;
  
    return modal;
  };
  