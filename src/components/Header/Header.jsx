import React from 'react'

const Header = () => {
  return (
    <header class="relative w-full border-b bg-white pb-4 ">

    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
      <div class="inline-flex items-center w-1/3">
        <span className='w-[100px] h-[100px] overflow-hidden rounded-md'>
         <img src="/images/logo.jpg" className='w-full h-full object-cover' alt={document.title} />
        </span>
        <span className="textInfo px-2 flex-col h-full w-[80%] gap-1 ">
        <span class="font-bold text-sm text-left "> {document.title} </span>
        <span class="font-semibold text-xs text-left "> Plot No.: IP 3 & 4 Vidyut Sadan, Sector-14, Panchkula, Haryana (India), Landline: 0172-2524120 </span>
        </span>    
      </div>
      {/* <div class="hidden lg:block">
        <ul class="inline-flex space-x-8">
          <li>
            <a
              href="#"
              class="text-sm font-semibold text-gray-800 hover:text-gray-900"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-sm font-semibold text-gray-800 hover:text-gray-900"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-sm font-semibold text-gray-800 hover:text-gray-900"
            >
              Contact
            </a>
          </li>
        </ul>
      </div> */}
      <div class="hidden lg:block">
        <button
          type="button"
          class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={()=>{
            alert("we are working on this, please try after few years... 🤐")
          }}
        >
          Login
        </button>
      </div>
      <div class="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6 cursor-pointer"
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
