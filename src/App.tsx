import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './store';
import { increment, decrement, setCount } from './features/counterSlice';

function App() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Global Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(setCount(0))}>Reset</button>

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

export default App;