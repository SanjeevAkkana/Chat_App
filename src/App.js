import './App.css';
import { Chatbar, Menu, Navbar } from './Components';

function App() {
  return (
    <div className='m-0 bg-[#f1f6fd] p-0'>
      <div className='bg-[#ededed]'>
        <Navbar />
      </div>
      <div className='flex flex-row justify-start'>
        <div className='bg-white w-[15%] lg:w-[25%] md:w-[15%] sm:w-[10%]'>
          <Menu />
        </div>
        <div className='p-3 lg:w-[75%] w-[85%] md:w-[85%] sm:w-[90%] sm:mr-1 lg:mr-8'>
          <Chatbar/>
        </div>
      </div>
    </div>
  );
}

export default App;
