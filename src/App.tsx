import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Test from './components/Counter';

function App() {
    return (
        <div className="App">
            <h1>Carro de Compras</h1>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}><ProductList /></div>
                <div style={{ flex: 1 }}><Cart /></div>
            </div>
            <Test/>
        </div>
    );
}
export default App;