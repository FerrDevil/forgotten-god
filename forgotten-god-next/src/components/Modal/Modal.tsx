"use client"
import { useEffect, useRef } from "react"
import { ModalDialog, ModalDialogContent } from "./styles"
import { IModal } from "./types"

const Modal = ({children, isOpen, setOpen}: IModal) => {
  const modal = useRef(null)
  useEffect(() => {
    isOpen ? modal.current.showModal() : modal.current.close()
  }, [isOpen])

  const closeModal = (event : React.MouseEvent<HTMLDialogElement>) => {
    setOpen(false)
  }
  return(
    <ModalDialog $isOpen={isOpen} ref={modal} onClick={closeModal}>
      <ModalDialogContent onClick={(event : React.MouseEvent<HTMLDivElement>) => {event.stopPropagation()}}>
        {children}
      </ModalDialogContent>
    </ModalDialog>
  )
} 

export default Modal