import React, { useEffect } from 'react'
import { useState } from 'react'
import { Alert } from 'react-native'

export default function useOrders() {

    const [orders, setOrders] = useState([])
    const [confirm, setConfirm] = useState([])
    const [finished, setFinished] = useState([])

    // const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://boiling-temple-62751.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setOrders(data))
        Alert
    }, [])

    const confirmOrder = (id) => {
        const removeOrderList = orders.filter(or => or._id != id)
        setOrders(removeOrderList)
        const result = orders.find(con => con._id == id)
        setConfirm([...confirm, result])
    }
    
    const delivriedOrder = (id) => {
        const removeConList = confirm.filter(con => con._id != id)
        setConfirm(removeConList)
        const result = confirm.find(con => con._id == id)
        setFinished([...finished, result])
    }

    return {
        orders,
        confirm,
        finished,
        confirmOrder,
        delivriedOrder,
    }
}



