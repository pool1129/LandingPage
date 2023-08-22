import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css';

import Header from './component/header';
import Footer from './component/footer';
import Gwangmyeong from './page/gwangmyeong';
import News from './page/news';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>
        <Routes>
          <Route path="/" element={<Gwangmyeong/>}/>
          <Route path="/news" element={<News/>}/>
        </Routes>
      </BrowserRouter>

      <Footer/>
    </>
  );
}

export default App;