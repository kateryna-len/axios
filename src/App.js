import './App.css';
import FirstRequest from './components/FirstRequest';
import GlobalInstance from './components/GlobalInstance';
import Headers from './components/Header';
import PostRequest from './components/PostRequest';
import './axios/global';
import CustomInstance from './components/CustomInstance';
import Interceptors from './components/Interseptors';

function App() {
  return (
    <div>
      <Interceptors />
    </div>
  );
}

export default App;
