import React from 'react'
import { createContext } from 'react'
import { View, Text } from 'react-native'
import useOrders from '../Hooks/useOrders'

export const OrderContext = createContext()

export default function OrderProvider({ children }) {
    const allContext = useOrders()
    return (
        <OrderContext.Provider value={allContext}>
            {children}
        </OrderContext.Provider>
    )
}
