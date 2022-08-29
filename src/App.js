import './App.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Filters from './components/Filters.js';
import Slideshow from './components/Slideshow.js';
import Results from './components/Results.js';
// import Recommd from './components/Recommd.js';

function App() {
  const [filters, setFilters] = React.useState({
    rob: "",
    area: "all",
    when: "",
    type: ""
  });

  const [update, setUpdate] = React.useState(false);
  return (
    <ChakraProvider>
      <div className="App">
        <div className="Navbar-section">
          <Slideshow />
        </div>
        <div className='Filter-section'>
          <Filters filters={filters} setFilters={setFilters} setUpdate={setUpdate} />
          <div className='hrl'>
            <hr />
          </div>
        </div>


        <div className="Result-section">
          <div>
            <p className='Results-title'>Popular Properties In Bangalore</p>
          </div>
          <Results update={update} filters={filters} />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
