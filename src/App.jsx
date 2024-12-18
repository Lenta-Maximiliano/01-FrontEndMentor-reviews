import Header from './components/Header/Header'
import StarsContainer from './components/StarsContainer/StarsContainer'
import CardsContainer from './components/CardsContainer/CardsContainer'
import Footer from './components/Footer/Footer'
import './App.css' 

function App() {

  return (
    <div className='appContainer'>
      <div className="appContent">
        <Header />
        <StarsContainer />
        <CardsContainer />
        <Footer />
      </div>
    </div>
  )
}

export default App
