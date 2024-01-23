import styles from './LineItem.module.css';

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
    return (
        <div className={styles.LineItem} style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between' }}>
            <div><img style={{ width: '50px', height: '50px' }} src={lineItem.item.img_url}></img>
            </div>
            <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-around', marginTop:'15px' }}>
                <span className="align-ctr" style={{width:'100px'}}>{lineItem.item.name}</span>
                <span className="align-ctr">${lineItem.item.price.toFixed(2)}</span>
            </div>
            <div className={styles.qty} style={{display:'flex', flexDirection:'row', padding:'0px', margin:'0px'}}>
                
                {!isPaid &&
                    <button
                        className="btn-xs"
                        onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
                    >-</button>
                }
                <span style={{padding:'0px', gap:'0px'}}>{lineItem.qty}</span>
                {!isPaid &&
                    <button
                        className="btn-xs"
                        onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
                    >+</button>
                }
                <button style={{backgroundColor:'orange'}} onClick={()=>handleChangeQty(lineItem.item._id,0)}>Remove</button>
            </div>
            <div className={styles.extPrice}>${lineItem.extPrice.toFixed(2)}</div>
        </div>
    );
}