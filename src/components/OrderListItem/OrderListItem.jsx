import styles from './OrderListItem.module.css';

export default function OrderListItem({ order, isSelected, handleSelectOrder }) {
    return (
        <div className={`${styles.OrderListItem} ${isSelected ? styles.selected : ''}`} onClick={() => handleSelectOrder(order)}>
            <div>
                <div className="smaller">Order Id: <span className="smaller">{order.orderId}</span></div>
                <div className="smaller">{new Date(order.updatedAt).toLocaleDateString()}</div>
            </div>
            <div className={styles.alignRt}>
                <div>${order.orderTotal.toFixed(2)}</div>
                <div className="smaller">{order.totalQty} Item{order.totalQty > 1 ? 's' : ''}</div>
            </div>
        </div>
    );
}