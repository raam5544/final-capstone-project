import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.css';
import { getUser } from './utilities/users-service';
import AuthPage from './pages/AuthPage/AuthPage';
import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
import PlantDetailPage from './pages/PlantDetailPage/PlantDetailPage'
import Navbar from './components/Navbar';
import OrderDetail from './components/OrderDetail/OrderDetail';
import CartPage from './pages/CartPage/CartPage'
import { CartQuantityContext } from './Contexts/CartQuantityContext';
import ContactUs from './pages/ContactUs/ContactUs';

export default function App() {
  const [user, setUser] = useState(getUser());
  console.log(user)
  const [qty, setQty] = useState(0)
  return (
    <main className={styles.App}>
      {user ?
        <>
          <CartQuantityContext.Provider>
            <Navbar user={user} setUser={setUser} qty={qty} />
            <Routes>
              {/* client-side route that renders the component instance if the path matches the url in the address bar */}
              <Route path="/neworder" element={<NewOrderPage qty={qty} setQty={setQty} user={user} setUser={setUser} />} />
              <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser}/>} />
              <Route path="/plants" element={<PlantDetailPage />} />
              <Route path='/cart' element={<CartPage user={user} setUser={setUser} setQty={setQty} />} />
              <Route path='/contactus' element={<ContactUs/>} />
              {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
              <Route path="/*" element={<Navigate to={"/neworder"} />} />
            </Routes>
          </CartQuantityContext.Provider>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
