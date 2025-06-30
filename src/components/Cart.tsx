import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { removeItem, clearCart } from '../features/cartSlice';

function Cart() {
    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Carro de compras</h2>
            {items.length === 0 ? (
                <p>Carro vacío</p>
            ) : (
                <>
                <ul>
                    {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => dispatch(removeItem(index))}>Eliminar</button>
                    </li>
                    ))}
                </ul>
                <button onClick={() => dispatch(clearCart())}>Limpiar</button>
                </>
            )}
        </div>
    );
};
export default Cart;