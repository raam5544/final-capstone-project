import styles from './OrderDetail.module.css';
import LineItem from '../LineItem/LineItem';
import { useState } from 'react';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {

    if (!order) return null;
    const lineItems = order.lineItems.map(item =>
        <LineItem
            lineItem={item}
            isPaid={order.isPaid}
            handleChangeQty={handleChangeQty}
            key={item._id}
        />
    );
    return (
        <div className={styles.OrderDetail} style={{marginTop:'0px'}}>
            <div className={styles.sectionHeading} style={{display:'flex',flexDirection:'column',marginTop:'0px', alignItems:'flex-start'}}>
                {order.isPaid ?
                    <span className="smaller">ORDER Id: <span className="smaller">{order.orderId}</span></span>
                    :
                    <span className="smaller">NEW ORDER</span>
                }
                <span className="smaller">{new Date(order.updatedAt).toLocaleDateString()}</span>
            </div>
            <div className={`${styles.lineItemContainer} flex-ctr-ctr flex-col scroll-y`} style={{display:'flex'}}>
                {lineItems.length ?
                    <>
                        {lineItems}
                        <section className={styles.total} style={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
                            {order.isPaid ?
                                <span style={{color:'black', marginRight:'200px'}} className={styles.right}>&nbsp;&nbsp;</span>
                                :
                                <button style={{marginRight:'130px', padding:'10px', color:'black', marginTop:'20px'}}
                                    className="btn-sm"
                                    onClick={handleCheckout}
                                    disabled={!lineItems.length}
                                >CHECKOUT</button>
                            }
                            <span className={styles.totalQty} style={{marginRight:'400px', color:'black'}}>{order.totalQty}</span>

                            <span style={{color:'black'}} className={styles.right}>${order.orderTotal.toFixed(2)}</span>
                        </section>
                    </>
                    :
                    <div style={{marginLeft:'50px'}}>No current orders</div>
                }
            </div>
        </div>
    );
}