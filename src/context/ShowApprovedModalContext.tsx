import React, { createContext, useState, ReactNode } from 'react'

type ApproveModalContextType = {
    approveModal: boolean
    showApproveModal: () => void
    hideApproveModal: () => void
}

export const ApproveModalContext =
    createContext<ApproveModalContextType | null>(null)

interface ApproveModalContextProviderProps {
    children: ReactNode
}

export const ApproveModalContextProvider: React.FC<
    ApproveModalContextProviderProps
> = ({ children }) => {
    const [approveModal, setApproveModal] = useState<boolean>(false)

    const showApproveModal = () => {
        setApproveModal(true)
    }

    const hideApproveModal = () => {
        setApproveModal(false)
    }
    return (
        <ApproveModalContext.Provider
            value={{
                approveModal,
                showApproveModal,
                hideApproveModal,
            }}
        >
            {children}
        </ApproveModalContext.Provider>
    )
}
