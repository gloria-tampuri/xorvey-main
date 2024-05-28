import React, { useContext } from 'react'
import classes from './Modal.module.css'
import { ApproveModalContext } from '../../context/ShowApprovedModalContext'
import { AddOfficerContext } from '../../context/AddOfficerContext'

interface ModalProps {
    children: React.ReactNode
}

const Backdrop: React.FC = () => {
    const { hideApproveModal } = useContext(ApproveModalContext)!
    const userCtx= useContext(AddOfficerContext)!
    const {hideAddOfficer } = userCtx
    const closeModal = () => {
        hideApproveModal() 
        hideAddOfficer()   
    }

    return <div onClick={closeModal} className={classes.backdrop} />
}

const ModalOverlay: React.FC<ModalProps> = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const Modal: React.FC<ModalProps> = ({ children }) => {
    return (
        <>
            <Backdrop />
            <ModalOverlay>{children}</ModalOverlay>
        </>
    )
}

export default Modal
