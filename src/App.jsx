import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import StoryPage from "./pages/StoryPage";
import NovelPage from "./pages/NovelPage";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* nested route self closing */}
          <Route path="/category" element={<CategoryPage/>}>
            <Route path="story" element={<StoryPage/>} />
            <Route path="novel"element={<NovelPage />} />
          </Route>

          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
