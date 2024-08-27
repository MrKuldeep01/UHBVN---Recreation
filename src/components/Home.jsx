import React from 'react'

const Home = () => {
  return (
    <div className='max-w-screen overflow-hidden min-h-screen relative '>
      <div className="background absolute -z-30 h-full w-full flex items-center justify-center gap-40 p-4  bg-blue-700/70">
        <span className="leftChild hidden xl:block rounded-full w-[650px] h-[650px] relative bg-gray-300/50 -z-20"></span>
        <span className="rightChild w-[400px] h-[250px] rounded-md bg-yellow-200/50 -z-20 relative"></span>
      </div>

    <div className="top w-full flex items-center justify-end gap-4 py-20 px-28 ">
    <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={()=>{
            alert("we are working on this, please try after few years... 🤐")
          }}
        >
          Login
        </button>
    <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={()=>{
            alert("we are working on this, please try after few years... 🤐")
          }}
        >
          sign Up
        </button>
    </div>

    <div className="bottom w-full pt-10 px-40">
        <span className="bottomChild1 text-8xl text-black font-semibold"> ABOUT </span>
        <span className="bottomChild12 text-8xl text-white font-semibold"> THIS <br/> AMAZING WEBSITE </span> <br />
        <span className="bottomChild2 text-xs font-semibold w-full py-6"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea vitae, at blanditiis sapiente consequuntur incidunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere excepturi, expedita voluptatem enim quod modi molestiae mollitia dignissimos ipsa rem quia nostrum.</span>

    </div>

    </div>
  )
}

export default Home
