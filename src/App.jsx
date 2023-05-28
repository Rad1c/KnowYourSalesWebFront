import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./ui/components/layout";
import Error from "./ui/pages/error-page";
import Home from "./ui/pages/home";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*private*/}

        {/* public */}
        <Route path="/home" element={<Home />} />

        {/* catch all */}
        <Route path="/not-found" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
