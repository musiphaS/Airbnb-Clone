import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
// so now l want to make the cards dynamic so l will import Data.js
import Data from '../src/components/Data';

function App() {

  const cards = Data.map(item => {
    return (
        <Contact
            key = {item.id}
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            title={item.title}
            description={item.description}
            price={item.price}
            openSlots={item.openSlots}
        />
    );
})

  return (
    <div className='main--container'>
      <Navbar />
      <Banner />

      <div className='cards-section'>
      {cards}
      </div>
      
    </div> 
  );
};

export default App;
