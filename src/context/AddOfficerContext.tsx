import React, { createContext, useState, ReactNode } from 'react'

type AddOfficerContextType = {
    addOfficer: boolean
    showAddOfficer: () => void
    hideAddOfficer: () => void
}

export const AddOfficerContext =
    createContext<AddOfficerContextType | null>(null)

interface AddOfficerContextProviderProps {
    children: ReactNode
}

export const AddOfficerContextProvider: React.FC<
    AddOfficerContextProviderProps
> = ({ children }) => {
    const [addOfficer, setAddOfficer] = useState<boolean>(false)

    const showAddOfficer = () => {
        setAddOfficer(true)
    }

    const hideAddOfficer = () => {
        setAddOfficer(false)
    }
    return (
        <AddOfficerContext.Provider
            value={{
                addOfficer,
                showAddOfficer,
                hideAddOfficer,
            }}
        >
            {children}
        </AddOfficerContext.Provider>
    )
}
