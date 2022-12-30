import { Loader } from './components/Loader';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';
import {ErrorMessage} from './components/ErrorMessage'
import Modal from './components/Modal';
import CreateProduct from './components/CreateProduct';
import { useState } from 'react';
import { IProduct } from './models';
function App() {
  const {loading, error, products, AddProduct} = useProducts();
  const [modal, setModal] = useState(true);
  const createHandler = (product : IProduct) =>{
    setModal(false)
    AddProduct(product)
  }

  return(
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader/>}
      {error && <ErrorMessage error={error}/>}
        {
          products.map(product => <Product product={product} key={product.id}/>)
        }
       {modal &&  <Modal onClose={() => setModal(false)} title='Create new product'>
         <CreateProduct onCreate={createHandler}></CreateProduct>
       </Modal>}
       <button  onClick={() => setModal(true)} className='absolute bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'>+</button>
    </div>
  )
}

export default App;
