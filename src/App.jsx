import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./ui/components/layout";
import Error from "./ui/pages/error-page";
import Home from "./ui/pages/home";
import "./App.css";
import Products from "./ui/pages/products";
import NonRequireAuth from "./ui/components/non-require";
import Commerce from "./ui/pages/commerce";
import User from "./ui/pages/user";
import Product from "./ui/pages/product-details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*private*/}
        <Route path="/commerce" element={<Commerce />} />
        <Route path="/user" element={<User />} />

        {/* public */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<Product />} />

        {/* catch all */}
        <Route path="/not-found" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
