import './App.css';
import {Routes , Route} from 'react-router-dom'
// import Hotel from './Components/Pages/Hotels/Hotel';
import Home from './Components/Home/Home';
import Hotels from './Components/Pages/Hotels';
import HotelDetails from './Components/Pages/HotelDetails';
import Login from './Components/Pages/Login';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './Components/Pages/SignUp';
import FvHotels from './Components/Pages/FvHotels';
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home />}  />
            <Route path='/hotels' element={<Hotels />}   />
            <Route path='/hotels/:id' element={<HotelDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/favouriteHotels' element={<FvHotels />} />
        </Routes>        


    </div>
  );
}

export default App;
