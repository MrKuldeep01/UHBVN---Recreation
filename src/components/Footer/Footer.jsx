import React from 'react'

const Footer = () => {
  return (
    <div className="mx-auto mt-12 max-w-7xl bg-gray-50">
    <footer className="px-4 py-10">
      <div className="flex flex-col md:flex-row md:items-center">
        <span className='w-[100px] h-[100px] rounded-md overflow-hidden'>
        <img src="/images/logo.jpg" alt={document.title} className='w-full h-full object-cover' />
        </span>
        <div className="mt-4 grow md:ml-12 md:mt-0">
          <p className="text-base font-semibold text-gray-700">
            © 2024 UHBVN - Recreation [ Mr. Kumar, Mr. Saini]
          </p>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <div className="mb-8 lg:mb-0">
          <p className="mb-6 text-lg font-semibold text-gray-700">Company</p>
          <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
            <li>About us</li>
          </ul>
        </div>
        <div className="mb-8 lg:mb-0">
          <p className="mb-6 text-lg font-semibold text-gray-700">Our Stores</p>
          <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">         
            <li>Indiana</li>
          </ul>
        </div>
        <div className="mb-8 lg:mb-0">
          <p className="mb-6 text-lg font-semibold text-gray-700">Services</p>
          <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">            
            <li>Documentation</li>
          </ul>
        </div>
        <div className="mb-8 lg:mb-0">
          <p className="mb-6 text-lg font-semibold text-gray-700">Legal</p>
          <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="mb-8 lg:mb-0">
          <p className="mb-6 text-lg font-semibold text-gray-700">Social Links</p>
          <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">            
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Footer
