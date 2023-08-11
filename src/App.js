import Navbar from './components/navbar/Navbar'
import Header from "./components/header/Header";
// import FoodCard from './components/foodCard/FoodCard';
import FoodCards from './components/foodCards/FoodCards';

import "./styles/style.css";
import Order from './components/order/Order';
import FoodProduct from './components/foodProduct/FoodProduct';
import Feedback from './components/feedback/Feedback';
import Download from './components/download/Download';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <FoodCards/>
      <Order/>
      <FoodProduct/>
      <Feedback/>
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;
