import React, { useContext } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Favourite from "./pages/Favourite";
import Login from "./pages/Login";
import ProductList from './pages/ProductList';
import { OtherContext } from './context/OtherContext';
import { StoreProvider } from './context/StoreProvider';


function App() {
  const location = useLocation();

  return (
    
    <StoreProvider>
      {location.pathname !== '/login' && <Header />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<PrivateRoute component={Cart} />} />
        <Route path="/product-card" element={<PrivateRoute component={ProductList} />} />
        <Route path="/favourite" element={<PrivateRoute component={Favourite} />} />
      </Routes>
    </StoreProvider>
  );
}

const PrivateRoute = ({ component: Component }) => {
  const { otherState } = useContext(OtherContext);
  return otherState.isLoggedIn ? <Component /> : <Navigate to="/login" />;
};

export default App;















