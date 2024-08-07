import './App.css'
import Navbar from './components/ui/HomePage/Navbar'
import image from './assets/Images/img.jpg';
function App() {

  return (
    <div  className='flex flex-col w-screen min-h-screen bg-[#0a0a0a]'>
      <Navbar/>
      <section className='relative flex-grow bg-custom-bg bg-cover bg-center'>
        <div className='absolute inset-0'>
          <h1 className='text-[#F8FAFC] text-center font-bold text-7xl mt-16 pt-5'>Elevate Your Business</h1>
        </div>
      </section>
    </div>
  )
}

export default App
