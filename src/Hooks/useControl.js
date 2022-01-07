import { useContext } from "react"
import { OrderContext } from "../contexts/OrderProvider"


const useControl = () => {
    return useContext(OrderContext)
}

export default useControl