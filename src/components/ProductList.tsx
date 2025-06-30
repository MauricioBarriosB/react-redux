import { useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';
const products = ['JavaScript', 'MySQL', 'Express', 'TypeScript', 'GraphQL'];

function ProductList() {
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Libros</h2>
            <ul>
            {products.map((product, index) => (
                <li key={index}>
                    {product}
                    <button onClick={() => dispatch(addItem(product))}>Agregar</button>
                </li>
            ))}
            </ul>
        </div>
    );
};
export default ProductList;