interface ModalProps {
    children: React.ReactNode;
    modalId: string;
  }

export default function Modal(props: ModalProps){
    return (
        <dialog
            id={props.modalId}
            className="modal-overlay modal bg-gray-500 bg-opacity-30 opacity-0 backdrop-blur-sm transition-opacity duration-300 pop-up-shadow"
        >
            {props.children}
        </dialog>
    );
}