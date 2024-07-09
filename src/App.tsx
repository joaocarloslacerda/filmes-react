import './App.css';
import { Home } from './Page/Home';
import { MovieDetails } from './Page/MovieDetails';

import { Header } from './componets/Header/index'

function App() {
  return (
    <>
      <Header />  

      <div className='body'>
        <MovieDetails />

        {/* <Home /> */}
      </div>
       
    </>
  );
}

export default App;
