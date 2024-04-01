import React from 'react';

export const CardCap = ({ numero, titulo, portada, resumen }) => {
    return (
        <div className="row">
            <div className="card w-full md:w-1/2 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="wrapper relative">
                    <div className="date absolute top-0 left-0 bg-green-500 text-white p-2">
                        <span className="day font-bold text-2xl">{numero}</span>
                    </div>
                    <div className="data relative">
                        <div className="content p-4">
                            <h1 className="title text-xl font-bold mb-2"><a href="#" className="text-blue-500">{ titulo }</a></h1>
                            <p className="text-gray-700">{ resumen }</p>
                            <label htmlFor="show-menu" className="menu-button absolute top-0 right-0">
                                <span className="block w-5 h-5 bg-black"></span>
                                <span className="block w-5 h-5 bg-black"></span>
                                <span className="block w-5 h-5 bg-black"></span>
                            </label>
                        </div>
                        <input type="checkbox" id="show-menu" className="hidden" />
                        <ul className="menu-content text-center absolute top-0 left-0 w-full z-10 transition-transform duration-300 transform -translate-y-full md:-translate-y-0">
                            <li className="w-1/3 inline-block bg-green-500 h-12 relative">
                                <a href="#" className="fa fa-bookmark-o absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"></a>
                            </li>
                            <li className="w-1/3 inline-block bg-green-500 h-12 relative">
                                <a href="#" className="fa fa-heart-o absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"><span>47</span></a>
                            </li>
                            <li className="w-1/3 inline-block bg-green-500 h-12 relative">
                                <a href="#" className="fa fa-comment-o absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"><span>8</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
