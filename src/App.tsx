import React, { useState } from 'react';
import { Product } from './components/Product';
import { products } from './data/products';

function App() {
  const [count, setCount] = useState(10);
  const increment = () =>{
    setCount(count + 1);
  }
  const dicrement = () => setCount(count - 1)
  return(
    <div>
        <h1 className='text-3xl font-bold'>{count}</h1>
        <button onClick={increment} className="pt-5 pr-5 bg-cyan-700">UP</button>
        <button onClick={dicrement} className="pt-5 pr-5 bg-purple-600">Down</button>
        <Product product={products[0]}/>
        <Product product={products[1]}/>
       
    </div>
  )
}

export default App;
