
import css from '../assets/css.png';
import github from '../assets/github.png';
import html from '../assets/html.png';
import js from '../assets/javascript.png';
import next from '../assets/nextjs.png';
import node from '../assets/node.png';
import tailwind from '../assets/tailwind.png';
function Expe(){



    const techs = [
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:js,
            title:'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id:3,
            src:next,
            title:'Next.js',
            style:'shadow-gray-500'
        },
        {
            id:4,
            src:node,
            title:'Node.js',
            style:'shadow-green-500'
        },
        {
            id:5,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:6,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-blue-500'
        },
        {

            id:7,
            src:github,
            title:'GitHub',
            style:'shadow-gray-500'

        },
        

        
        
        
        

    ]

    return (
        <div name="experience" className=" bg-gradient-to-b from-gray-800 to-black w-full h-screen">
            <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className=" text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Experience
                    </p>
                    <p className="py-6"> These are the Technologies I've Worked with</p>
                </div>


                <div className=" ">
                  
                {/* "shadow-md hover:scale-105 duration-500 py-2 rounded-lg" */}
                {techs.map(((skill)=>(
                    <div key={skill.id} className={`w-full grid grid-col-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-8 ${skill.style}`}>
                        <img src = {skill.src} alt="" className="w-20 mx-auto" />
                        <p className="mt-4"> {skill.title} </p>
                    </div>

                )))}
                  
                    
                </div>
            </div>
        </div>
    )
   


}

export default Expe;