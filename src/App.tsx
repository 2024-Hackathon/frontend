import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from './pages/Mainpage'
import QuizPage from './pages/QuizPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </Router>
  )
}

export default App
