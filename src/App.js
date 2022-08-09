import logo from './logo.svg';
import './App.css';
import AllRoutes from './components/AllRoutes/AllRoutes';
import HeaderHorizhondal from './components/header/HeaderHorizondal';
import { QueryClientProvider } from 'react-query';

function App() {
  return (
    // <div className="App">
    <>
    {/* <HeaderHorizhondal/> */}
    <QueryClientProvider>
    <AllRoutes/>

    </QueryClientProvider>
      </>
      // {/* <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header> */}
    // </div>
  );
}

export default App;
