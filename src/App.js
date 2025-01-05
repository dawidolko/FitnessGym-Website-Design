import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
import BlogId from "./components/BlogContent/Article/Article";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ShopContext from "./components/ShopContext/ShopContext";

function App() {
  const location = useLocation();

  return (
    <ShopContext>
      <Navbar />
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/FitnessGym" element={<Home />} />
        <Route path="/FitnessGym/about" element={<About />} />
        <Route path="/FitnessGym/shop" element={<Shop />} />
        <Route path="/FitnessGym/faq" element={<Faq />} />
        <Route path="/FitnessGym/blog" element={<Blog />} />
        <Route path="/FitnessGym/blog/:id" element={<BlogId />} />
        <Route path="/FitnessGym/contact" element={<Contact />} />
        <Route path="/FitnessGym/cart" element={<Cart />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ShopContext>
  );
}

export default App;
