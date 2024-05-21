import React, { createContext, useState, ReactNode } from 'react'

type DeniedModalContextType = {
    deniedModal: boolean
    showDeniedModal: () => void
    hideDeniedModal: () => void
}

export const DeniedModalContext =
    createContext<DeniedModalContextType | null>(null)

interface DeniedModalContextProviderProps {
    children: ReactNode
}

export const DeniedModalContextProvider: React.FC<
    DeniedModalContextProviderProps
> = ({ children }) => {
    const [deniedModal, setDeniedModal] = useState<boolean>(false)

    const showDeniedModal = () => {
        setDeniedModal(true)
    }

    const hideDeniedModal = () => {
        setDeniedModal(false)
    }
    return (
        <DeniedModalContext.Provider
            value={{
                deniedModal,
                showDeniedModal,
                hideDeniedModal,
            }}
        >
            {children}
        </DeniedModalContext.Provider>
    )
}
