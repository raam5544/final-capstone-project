import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import NewOrderPage from '../../pages/NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../../pages/OrderHistoryPage/OrderHistoryPage';
import PlantDetailPage from '../../pages/PlantDetailPage/PlantDetailPage';
import CartPage from '../../pages/CartPage/CartPage';
import ContactUs from '../../pages/ContactUs/ContactUs';

import { AnimatePresence } from 'framer-motion'


function AnimatedRoutes({ qty, setQty, user, setUser }) {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {/* client-side route that renders the component instance if the path matches the url in the address bar */}
                <Route path="/neworder" element={<NewOrderPage qty={qty} setQty={setQty} user={user} setUser={setUser} />} />
                <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
                <Route path="/plants" element={<PlantDetailPage />} />
                <Route path='/cart' element={<CartPage user={user} setUser={setUser} setQty={setQty} qty={qty} />} />
                <Route path='/contactus' element={<ContactUs />} />
                {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
                <Route path="/*" element={<Navigate to={"/neworder"} />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
