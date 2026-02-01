import mainImage from "../assets/1.jpg";
import secondImage from "../assets/2.jpg";
import thirdImage from "../assets/3.jpg";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa6";

const ProductDetail = () => {
    return (
        <>
            <div className="p-4 h-full">
                {/* breadcrumbs */}
                <div className="text-md text-gray-700">Football / Shoes / <span className="font-semibold underline">Nike</span></div>

                {/* main section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 p-2 gap-4">
                    {/* images */}
                    <div className="flex flex-col gap-1 ">
                        <img src={mainImage} className="w-full h-110 object-contain rounded-lg shadow-lg" alt="" />
                        <div className="grid grid-cols-2 gap-1">
                            <img src={secondImage} className="w-full h-40 object-contain rounded-lg shadow-lg" alt="" />
                            <img src={thirdImage} className="w-full h-40 object-contain rounded-lg shadow-lg" alt="" />
                        </div>
                    </div>
                    {/* products info */}
                    <div className="flex flex-col gap-6">
                        {/* product header */}
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-bold">Nike/Adidas Predator F50</h1>
                            <p className="text-xl font-semibold">Rs 4500</p>
                        </div>

                        {/* reviews */}
                        <div>
                            <div className="flex">
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStarHalfAlt className="text-yellow-500" />
                                <span className="ml-2 text-gray-600">(150 Reviews)</span>
                            </div>
                        </div>
                        {/* colors */}
                        <div className="flex flex-col gap-3">
                            <p className="font-semibold">Choose Color</p>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-yellow-600 rounded-full"></div>
                                <div className="w-10 h-10 bg-red-700 rounded-full"></div>
                                <div className="w-10 h-10 bg-blue-700 rounded-full"></div>
                                <div className="w-10 h-10 bg-green-700 rounded-full"></div>
                                <div className="w-10 h-10 bg-black rounded-full"></div>
                            </div>
                        </div>
                        {/* size */}
                        <div className="flex flex-col gap-3">
                            <p className="font-semibold">Choose Size</p>
                            <div className="flex gap-4">
                                <button className="w-10 h-10 text-center bg-gray-100 border-2 border-gray-200 rounded-md cursor-pointer hover:bg-gray-200 ">
                                    SM
                                </button>
                                <button className="w-10 h-10 text-center bg-gray-100 border-2 border-gray-200 rounded-md cursor-pointer hover:bg-gray-200">
                                    L
                                </button>
                                <button className="w-10 h-10 text-center bg-gray-100 border-2 border-gray-200 rounded-md cursor-pointer hover:bg-gray-200">
                                    XL
                                </button>
                                <button
                                    className="w-10 h-10  flex items-center justify-center bg-gray-100  border-2 border-gray-200 rounded-md  cursor-pointer transition-colors duration-200 ease-in-out hover:bg-gray-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"                                >
                                    XXL
                                </button>{" "}
                            </div>
                        </div>
                        {/* add to cart button */}
                        <div>
                            <button className="w-full p-2 text-white text-lg bg-blue-400 rounded-lg hover:bg-blue-600 cursor-pointer focus:outline-none focus: ring-2 focus:ring-blue-600">Add To Cart</button>
                        </div>

                        {/* product descriptin */}
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl font-bold">Product Description</h2>
                            <div className="flex flex-col gap-1">
                                <p className="text-md leading-relaxed">Step up your game with <span className="font-semibold">Nike football shoes</span>.
                                    <br />
                                    <span className="italic">Designed for speed, agility, and control, they feature:</span></p>
                                <ul className="list-disc list-inside leading-relaxed font-light">
                                    <li>Durable yet lightweight materials for all-day comfort</li>
                                    <li>Responsive cushioning to protect your feet</li>
                                    <li>Advanced traction for maximum grip on any surface</li>
                                    <li>Perfect for sprinting, dribbling, and precise shots</li>
                                </ul>
                            </div>
                        </div>

                        {/* features */}
                        <div className="w-full flex flex-col lg:flex-row gap-3">
                            <div className="flex flex-col bg-gray-300 p-2 justify-center items-center rounded-lg shadow-lg">
                                <FaShippingFast className="text-6xl text-blue-500" />
                                <h2 className="font-medium">Fast Delivery</h2>
                                <p>Get your orders quickly.</p>
                            </div>
                            <div className="flex flex-col bg-gray-300 p-2 justify-center border-2 border-gray-300 items-center rounded-lg  shadow-inner">
                                <FaRupeeSign className="text-6xl text-blue-500" />
                                <h2 className="font-medium">Best Price</h2>
                                <p>Get your orders quickly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
