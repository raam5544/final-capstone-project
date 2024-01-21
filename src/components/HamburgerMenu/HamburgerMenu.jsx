import React from 'react'
import Hamburger from 'hamburger-react'
import { NavLink } from 'react-router-dom'

function HamburgerMenu({qty}) {
    return (
        <div className="nav">
            <nav style={{ justifyContent: "space-evenly", display: "flex", alignItems: 'center', backgroundColor: '#52BE80 ', height: '100px' }}>
                <NavLink style={{ width: '150px', textAlign: 'center' }} to="/neworder">New Order</NavLink>
                <NavLink style={{ width: '150px', textAlign: 'center' }} to="/orders">Order History</NavLink>
                <NavLink style={{ width: '150px', textAlign: 'center' }} to='/plants'>Plants</NavLink>
                <NavLink style={{ width: '150px', textAlign: 'center' }} to='/contactus'>Contact Us</NavLink>
                <NavLink style={{ width: '150px', justifyContent: 'center', display: 'flex', }} to='/cart'><img style={{ width: '25px', height: '25px', mixBlendMode: 'multiply' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrn3ynZwtTxWA6B8nBdEX3FF8l_nzRGq-KjA&usqp=CAU"></img>{qty}</NavLink>
            </nav>
        </div>
    )
}

export default HamburgerMenu
