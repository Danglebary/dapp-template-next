import { createContext, useState } from 'react'

interface iDappContext {
    connected: boolean
    connectAccount: null | (() => void)
    disconnectAccount: null | (() => void)
}

interface iProviderProps {
    children?: React.ReactNode
}

const defaultState: iDappContext = {
    connected: false,
    connectAccount: null,
    disconnectAccount: null
}

export const DappContext = createContext(defaultState)

export const DappProvider: React.FC<iProviderProps> = ({ children }) => {
    const [connected, setConnected] = useState(defaultState.connected)

    const connectAccount = () => {
        setConnected(true)
    }

    const disconnectAccount = () => {
        setConnected(false)
    }

    return (
        <DappContext.Provider
            value={{
                connected,
                connectAccount,
                disconnectAccount
            }}
        >
            {children}
        </DappContext.Provider>
    )
}
