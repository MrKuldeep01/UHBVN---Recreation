import React from 'react'

const Header = () => {
  return (
    <header className="relative w-full border-b bg-gray-300/30 pb-4 ">

    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
      <div className="inline-flex items-center w-1/2 md:w-1/3 ">
        <span className='w-[100px] h-[100px] overflow-hidden rounded-md'>
         <img src="/images/logo.jpg" className='w-full h-full object-cover' alt={document.title} />
        </span>
        <span className="textInfo px-2 flex-col h-full hidden md:w-[80%] gap-1 ">
        <span className="font-bold text-sm text-left "> {document.title} </span>
        <span className="font-semibold text-xs text-left "> Plot No.: IP 3 & 4 Vidyut Sadan, Sector-14, Panchkula, Haryana (India), Landline: 0172-2524120 </span>
        </span>    
      </div>
      {/* <div className="hidden lg:block">
        <ul className="inline-flex space-x-8">
          <li>
            <a
              href="#"
              className="text-sm font-semibold text-gray-800 hover:text-gray-900"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-semibold text-gray-800 hover:text-gray-900"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-semibold text-gray-800 hover:text-gray-900"
            >
              Contact
            </a>
          </li>
        </ul>
      </div> */}
      <div className="hidden lg:block">
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={()=>{
            alert("we are working on this, please try after few years... 🤐")
          }}
        >
          Login
        </button>
      </div>
      <div className="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 cursor-pointer"
        >
          <line x1="4" y1="12" x2="20" y2="12"></line>
          <line x1="4" y1="6" x2="20" y2="6"></line>
          <line x1="4" y1="18" x2="20" y2="18"></line>
        </svg>
      </div>
    </div>
  </header>
  )
}

export default Header
