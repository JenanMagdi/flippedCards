import { useNavigate } from "react-router-dom"

const Home = () => {
  const nav = useNavigate()
  return (
    <div className='bg-[url(/assets/bg.jpg)]  bg-contain  w-screen h-screen flex justify-center items-center'>
      <div className=" w-1/3 h-1/3 bg-gray-900/30 rounded-lg p-20 flex flex-col gap-10 items-center justify-center *:px-3 *:py-2 *:w-full *:h-14 *:bg-red-900/90  *:hover:bg-red-800/90  text-white text-xl  *:rounded-lg">
        <button onClick={()=>nav('/game')}>Get Start</button>
        </div>      
    </div>
  )
}

export default Home
