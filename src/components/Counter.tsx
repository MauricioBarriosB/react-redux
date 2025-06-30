import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { increment, decrement, setCount } from '../features/counterSlice'; // ** Acciones

function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div style={{'paddingTop':'50px'}}>
            <h3>Contador global: {count}</h3>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(setCount(0))}>0</button>
            <div>
                <input
                    type="number"
                    value={count}
                    onChange={(e) => dispatch(setCount(Number(e.target.value)))}
                />
            </div>
        </div>
    );
}
export default Counter;