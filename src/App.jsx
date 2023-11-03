import { Routes, Route } from "react-router-dom";
import Layout from "./ui/components/layout";
import Not_Found from "./ui/pages/error-page";
import Home from "./ui/pages/home";
import "./App.css";
import Products from "./ui/pages/products";
import Commerce from "./ui/pages/commerce";
import User from "./ui/pages/user";
import Product from "./ui/pages/product-details";
import ProtectedRoute from "./ui/components/protected-route";
import { useEffect, useState } from "react";
import useAuthStore from "./store/authStore";
import VerifyAccount from "./ui/pages/verify-account";

function App() {
  const [role, setRole] = useState("none");
  const { isUserLoggedIn } = useAuthStore();

  useEffect(() => {
    setRole(isUserLoggedIn());
  }, [role]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*private*/}
        <Route
          path="/user"
          element={
            <ProtectedRoute role={role} isAllowed={"User"}>
              <User role={role} />
            </ProtectedRoute>
          }
        />

        {/* public */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/verify-account/:verificationCode" element={<VerifyAccount />} />

        <Route path="/products" element={<Products role={role} />} />
        <Route path="/product/:id" element={<Product role={role} />} />

        {/* treba rolu proslijedit i na osnovu nje renderovat stvari */}
        <Route path="/commerce" element={<Commerce role={role} />} />

        {/* catch all */}
        <Route path="/not-found" element={<Not_Found />} />
        <Route path="*" element={<Not_Found />} />
      </Route>
    </Routes>
  );
}

export default App;
