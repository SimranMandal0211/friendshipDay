import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroPage from "./pages/HeroPage";
import YesPage from "./pages/YesPage";
import NoPage from "./pages/NoPage";
import WishPage from "./pages/WishPage";
import GiftPage from "./pages/GiftPage";
import MemoriesPage from "./pages/MemoriesPage";
import LetterPage from "./pages/LetterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/yes" element={<YesPage />} />
        <Route path="/no" element={<NoPage />} />
        <Route path="/wish" element={<WishPage />} />
        <Route path="/gift" element={<GiftPage />} />
        <Route path="/memories" element={<MemoriesPage />} />
        <Route path="/letter" element={<LetterPage />} />
        {/* more routes will be added as we build the remaining pages */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;