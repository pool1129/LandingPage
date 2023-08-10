import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import Gwangmyeong from './page/gwangmyeong';

function App() {
  return (
    <div className="App">
      <Header/>

      <Gwangmyeong/>

      <Footer/>
    </div>
  );
}

export default App;
