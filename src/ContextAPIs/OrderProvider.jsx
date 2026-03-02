import { createContext, useRef, useState } from "react";

export const OrderContext = createContext(null)
const OrderProvider = ({children}) => {
    const [examID, setExamID] = useState(null)
    const [open, setOpen] = useState(true)
    const sidebarRef = useRef(null);
    const [cart, setCart] = useState([])
    const [qty, setQty] = useState(0)
    const [checkoutData, setCheckoutData] = useState({})

    const info = {
        examID,
        setExamID,
        open,
        setOpen,
        sidebarRef,
        cart,
        setCart,
        qty,
        setQty,
        checkoutData,
        setCheckoutData
    }
    return (
        <OrderContext.Provider value={info} >
            {children}
        </OrderContext.Provider>
    );
};

export default OrderProvider;