import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import hero from "../assets/heroImage.jpg";
function Home(){

    return(
        <div name ="home" className=" h-screen w-full  bg-gradient-to-b from-black via-black to-gray-800">

        
            <div className="max-w-screen-lg mx-auto flex  flex-col items-center justify-center h-full text-white md:flex-row">
                <div className=" flex flex-col justify-center h-full  border-solid">
                    <h2 className="text-4xl sm:text-7xl  font-bold text-white"> I am Software Developer </h2>
                    <p className=" text-gray-500 py-4 max-w-md items-start">
                        I have 3 year Experience of building and Designing Software, Currently i love to work on the Web Application 
                        React, Tailwind 
                    </p>
           
                <div>
                    <Link to="portfolio" smooth duration={500} className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer ">
                        portfolio
                        <span className=" group-hover:rotate-90 duration-300"> <MdOutlineKeyboardArrowRight size={25} className=" ml-1"/></span>
                    </Link>
                </div>
            </div>


            <div className="w-2/3 md:w-full h-2/3"> 
                <img src={hero} alt="profile" className="rounded-2xl mx-auto  h-full"/>
            </div>
            </div>
        </div>
       

     
    )

}


export default  Home;