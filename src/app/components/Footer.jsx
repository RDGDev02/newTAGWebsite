import React from 'react'

const Footer = () => {
    return (
        <div className=" bg-zinc-900 ">
            <div className="max-w-2xl mx-auto text-white py-10">
                <div className="text-center">
                    <h3 className="text-3xl mb-3"> Tails of the AFTERGLOW </h3>
                    <p> #TAGLife</p>
                </div>
                <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                    <p className="order-2 md:order-1 mt-8 md:mt-0">Copyright  &copy;  2023 TAG by Real Deal Guild</p>
                    <div className="order-1 md:order-2">
                        <a href="#home" className="px-2">Home</a>
                        <a href="#story" className="px-2 border-l scroll-mt-5">Story</a>
                        <a href="#holder" className="px-2 border-l">Holder</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer