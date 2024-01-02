import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NoPage } from "./pages/nopage/NoPage";
import { Contact } from "./pages/contact/Contact";
import { HomePage } from "./pages/homepage/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
