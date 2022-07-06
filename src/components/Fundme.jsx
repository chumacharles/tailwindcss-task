import React from 'react';
import logo from '../images/logo.png';
import fundme from '../images/fund-img.png';

const Fundme = () => {
  return (
    <div className='font-sans'>
        <div className='py-5 px-10 '>
            <div className="navbar md:flex justify-between justify-items-center">
                <div className='pb-4'>
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <button className='font-semibold bg-blue-800 text-white px-10 py-3 rounded-lg shadow-lg'>Connect</button>
                </div>
            </div>

            <main>
                <div className="py-10 lg:px-32 grid md:grid-cols-2 mt-20 flex-row items-center ">
                    <div className='mb-12'>
                        <h2 className='pb-5 font-bold text-4xl'>Decentralized Fund Me,</h2>
                        <p className='text-gray-400 mb-12'>A new way for requesting <span className='text-blue-800'>funding</span> from friends and the public.<br/>
                        To get started click the button below.
                        </p>
                        <button className='font-semibold bg-blue-800 text-white px-10 py-3 rounded-lg mb-3 shadow-lg'>Connect</button>
                        <p className='text-gray-400'>we rise by lifting others.</p>
                    </div>

                    <div className='m-auto ' >
                        <img src={fundme} alt="" className=' w-full md:w-auto' />
                    </div>
                </div>
            </main>
        </div>

        <footer>
            <div className='bg-gray-400 text-center mt-10'>
                <p className='py-5'>Built with &#x2764;&#xfe0f; by Chuma Chibueze Charles @melvin-manni</p>
            </div>
        </footer>
    </div>
  )
}

export default Fundme;