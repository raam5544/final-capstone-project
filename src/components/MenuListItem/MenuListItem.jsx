import styles from './MenuListItem.module.css';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
    return (
        <div className='item' style = {{ display: 'flex', flexDirection: 'column', backgroundColor:'white', width: '200px', border:'solid black', height: '100%', padding: '10px', margin: '0px', justifyContent:'space-between', flexWrap:'wrap',borderRadius:'10px'}}>
            <div>
                <img style={{height:'150px', width:'150px'}} src={menuItem.img_url} alt="none"/></div>
            <div style={{textWrap:'wrap'}}>{menuItem.name}</div>
            <div style={{display:'flex', flexDirection:'column'}}>
                <span>${menuItem.price.toFixed(2)}</span>
                <button className={styles.btnsm} onClick={() => handleAddToOrder(menuItem._id)}>
                    ADD
                </button>
            </div>
        </div >
    );
}