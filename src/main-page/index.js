import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './man-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';
import SearchResults from '../search-results';
import HouseFilter from './house-filter';
import HouseFromQuery from '../house/house-from-query';
import useHouses from '../hooks/use-house-hook';
import useFeaturedHouse from '../hooks/use-featured-houses';

function App () {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);

  return (
    <Router>
      <div className='container'>
        <Header subtitle={ "Providing Houses all Over the World!" } />
        <HouseFilter allHouses={allHouses}  />

      <Routes>
        <Route path='/searchresults/:country'
          element={<SearchResults allHouses={allHouses} />}
          />
          <Route path='/house/:id' element={<FeaturedHouse house={featuredHouse} />} />
        <Route path='/' element={ <HouseFromQuery allHouses={allHouses} /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
