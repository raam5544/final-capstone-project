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
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';

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
            <AnimatedRoutes qty={qty} setQty={setQty} user={user} setUser={setUser}/>
          </CartQuantityContext.Provider>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
