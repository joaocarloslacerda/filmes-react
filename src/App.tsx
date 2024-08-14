import './App.css';
import { BrowserRouter} from 'react-router-dom';
import { Header } from './componets/Header/index';
import { AppRoutes } from '../src/routes';

function App() {
  return (    
      <BrowserRouter>
        <Header />

        <div className='body'>
          <AppRoutes />
        </div>
      </BrowserRouter>
  );
}

export default App;
