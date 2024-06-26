import Arrade from "../assets/portfolio/arrayDestruct.jpg";
import installnode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import Reactsmooth from "../assets/portfolio/reactSmooth.jpg";
import ReactWeather from '../assets/portfolio/reactWeather.jpg';

function Portfolio(){



        const portfolio = [

            {   
                id:1,
                src: Arrade,

            },
            {   
                id:2,
                src: installnode,

            },
            {   
                id:3,
                src: navbar,

            },
            {   
                id:4,
                src: reactParallax,

            },
            {   
                id:5,
                src: Reactsmooth,

            },
            {   
                id:6,
                src: ReactWeather,

            },


            
        ]




    return (

        <div name = "portfolio" className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
                <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                        <p className='py-6'>Checkout some of my work</p>
                    </div>

     

                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolio.map((port) => (
 <div key={port.id} className='shadow-md shadow-gray-600 rounded-lg' >
 <img src={port.src} alt="" className='rounded-md duration-200 hover:scale-105'/>
 <div className='flex items-center justify-center'>
     <button className='w-1/2 px-6 py-3 m-4 hover:scale-105'> Demo </button>
   
 </div>
</div>
            
))}
                       
                    </div>
                </div>
        </div>  
    )
    ;

}

export default Portfolio