import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import QuizPage from "./pages/Quiz/QuizPage";
import ResultPage from "./pages/Result/ResultPage";
import Navbar from "./components/Navbar";

function App() {
  // configuração das rodas da URL
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/resultado" element={<ResultPage />} />
    </Routes>
    </>
    
  );
}

export default App;
