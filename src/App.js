import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import store from './Redux/store'
import { Provider } from 'react-redux'
import Cart from "./pages/Cart";
function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
