import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroPage from "./pages/HeroPage";
import YesPage from "./pages/YesPage";
import NoPage from "./pages/NoPage";
import WishPage from "./pages/WishPage";
import GiftPage from "./pages/GiftPage";
import MemoriesPage from "./pages/MemoriesPage";
import LetterPage from "./pages/LetterPage";
import PuzzlePage from "./pages/PuzzlePage";
import AgreementPage from "./pages/AggrementPage";
import FinalPage from "./pages/FinalPage";

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
        <Route path="/puzzle" element={<PuzzlePage />} />
        <Route path="/agreement" element={<AgreementPage />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;