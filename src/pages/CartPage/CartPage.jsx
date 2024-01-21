import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import styles from './CartPage.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function CartPage({ user, setUser, setQty }) {
    const [menuItems, setMenuItems] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const [cart, setCart] = useState(null);
    const categoriesRef = useRef([]);
    const navigate = useNavigate();

    useEffect(function () {
        async function getItems() {
            const items = await itemsAPI.getAll();
            categoriesRef.current = items.reduce((cats, item) => {
                const cat = item.category.name;
                return cats.includes(cat) ? cats : [...cats, cat];
            }, []);
            setMenuItems(items);
            setActiveCat(categoriesRef.current[0]);
        }
        getItems();
        async function getCart() {
            const cart = await ordersAPI.getCart();
            setCart(cart);
        }
        getCart();
    }, []);
    // Providing an empty 'dependency array'
    // results in the effect running after
    // the FIRST render only

    /*-- Event Handlers --*/
    async function handleAddToOrder(itemId) {
        const updatedCart = await ordersAPI.addItemToCart(itemId);
        setCart(updatedCart);
    }

    async function handleChangeQty(itemId, newQty) {
        const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
        setCart(updatedCart);
    }

    async function handleCheckout() {
        await ordersAPI.checkout();
        setQty(0)
        navigate('/orders');
    }

    return (
        <main className={styles.CartPage}>
            <div>
                <OrderDetail
                    order={cart}
                    handleChangeQty={handleChangeQty}
                    handleCheckout={handleCheckout}
                />
            </div>
            <Link to='/neworder'>
                <button style={{padding:'10px', marginTop:'25px', color:'black', fontSize:'10pt'}}>Continue Shopping</button>
            </Link>
        </main>
    );
}