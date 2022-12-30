import {Route, Routes} from 'react-router-dom'
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
function App() {
  return(
    <Routes>
      <Route path="/about" element={<AboutPage></AboutPage>}/>
      <Route path="/" element={<ProductsPage/>}></Route>
    </Routes>
  )
}

export default App;
