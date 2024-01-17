import React from "react";
import { Link } from "react-router-dom";
// import * as userService from '../utilities/users-service'
import { logOut } from '../utilities/users-service'
import UserLogOut from "./UserLogOut/UserLogOut";

function Navbar({ user, setUser }) {

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
    <>
      <nav style={{ justifyContent: "space-evenly", display: "flex", alignItems: 'center' }}>

        <Link to="/orders">Order History</Link>
        <Link to="/orders/new">New Order</Link>
        <Link to='/plants'>Plants</Link>
        <Link to='/cart'>Cart</Link>
        <div>
          <UserLogOut user={user} setUser={setUser} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
