import React, { createContext, useState, ReactNode } from 'react'

type AddProofModalContextType = {
    addProofModal: boolean
    showAddProofModal: () => void
    hideAddProofModal: () => void
}

export const AddProofModalContext =
    createContext<AddProofModalContextType | null>(null)

interface AddProofModalContextProviderProps {
    children: ReactNode
}

export const AddProofModalContextProvider: React.FC<
    AddProofModalContextProviderProps
> = ({ children }) => {
    const [addProofModal, setAddProofModal] = useState<boolean>(false)

    const showAddProofModal = () => {
        setAddProofModal(true)
    }

    const hideAddProofModal = () => {
        setAddProofModal(false)
    }
    return (
        <AddProofModalContext.Provider
            value={{
                addProofModal,
                showAddProofModal,
                hideAddProofModal,
            }}
        >
            {children}
        </AddProofModalContext.Provider>
    )
}
