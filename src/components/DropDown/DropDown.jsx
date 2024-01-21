import React, { useEffect, useState } from 'react'
import { logOut } from '../../utilities/users-service';

function DropDown({ user, setUser, drop }) {
    console.log({ user })
    const [vrop, setDrop] = useState(null)

    useEffect(() => {
        setDrop({ drop })
    }, [])

    function handleLogOut() {
        logOut();
        setUser(null);
    }
    return (
        <div className='dropDown'>
            <div>
                Welcome {user.name[0].toUpperCase()}{user.name.slice(1)}!
            </div>
            <div>
                {user.email}
            </div>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

export default DropDown
