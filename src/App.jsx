import TextBox from './Components/TextBox'
import ReAnimate from './Components/ReAnimateBtn'

function App() {
  const restart = ()=>{
   window.location.reload();
  }

  return (
    <div className='w-screen h-screen bg-slate-800 text-white flex items-center justify-center flex-col'>
      <div className='flex'>
          <TextBox />
      </div>

      <ReAnimate reAnimate={restart}/>
      
    </div>
  )
}

export default App
