import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from './components/Topbar';
import './App.css';
import Home from "./Pages/home/Home";



function App() {
  return ( 
    <div>
      <Topbar />
     <div className='container'>
      <Sidebar />
      <Home />
     </div>
</div>
  );
}

export default App;
