import styles from './MenuList.module.css';
import MenuListItem from '../MenuListItem/MenuListItem';
import { useState } from 'react';

export default function MenuList({ menuItems, handleAddToOrder }) {
    // const [menuItems, setMenuItems] = useState(menuItems)

    return (
        <div style={{backgroundColor:'transparent', marginTop:'0px', paddingTop:'0px', width:'75%', display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
            {menuItems.map((item) =>
                <div style={{}}>
                    <MenuListItem 
                        key={item._id}
                        handleAddToOrder={handleAddToOrder}
                        menuItem={item}
                    />
                </div>
             
    // return (
    //     <main className={styles.MenuList}>
    //         <div>
    //             Hi
    //         </div>
    //     </main>
    // );
    
    
    )}
        </div>
    )
}