import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import * as userService from '../utilities/users-service'
import { logOut } from '../utilities/users-service'
import UserLogOut from "./UserLogOut/UserLogOut";
import DropDown from "./DropDown/DropDown";
import Hamburger from "hamburger-react";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

function Navbar({ user, setUser, qty }) {
  console.log({user})
  const [drop, setDrop] = useState(false)
  function handleLogOut() {
    // Delegate to the users-service
    logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  //   function handleLogOut() {
  //     logOut();
  //     setUser(null);
  // }
  return (
    <div>
      <div className="hiddenNav">
        <Hamburger />
        <div onClick={() => setDrop((prev) => !prev)}><img style={{ width: '25px', height: '25px', mixBlendMode: 'multiply' }} src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"></img></div>
        <HamburgerMenu qty={qty}/>
      </div>
      <div className="nav">
        <nav style={{ justifyContent: "space-evenly", display: "flex", alignItems: 'center', backgroundColor: '#52BE80 ', height: '100px' }}>

          <div><img style={{ width: '140px', borderRadius: '50px' }} src="https://www.creativefabrica.com/wp-content/uploads/2021/11/16/Nature-Plant-Tree-of-Life-Garden-Logo-Graphics-20293631-1.jpg"></img></div>
          <NavLink style={{ width: '150px', textAlign: 'center' }} to="/neworder">New Order</NavLink>
          <NavLink style={{ width: '150px', textAlign: 'center' }} to="/orders">Order History</NavLink>
          <NavLink style={{ width: '150px', textAlign: 'center' }} to='/plants'>Plants</NavLink>
          <NavLink style={{ width: '150px', textAlign: 'center' }} to='/contactus'>Contact Us</NavLink>
          <NavLink style={{ width: '150px', justifyContent: 'center', display: 'flex', }} to='/cart'><img style={{ width: '25px', height: '25px', mixBlendMode: 'multiply' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrn3ynZwtTxWA6B8nBdEX3FF8l_nzRGq-KjA&usqp=CAU"></img>{qty}</NavLink>
          <div>
            <div onClick={() => setDrop((prev) => !prev)}><img style={{ width: '25px', height: '25px', mixBlendMode: 'multiply' }} src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"></img></div>
            {drop && (<DropDown user={user} setUser={setUser} drop={drop} />)}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
