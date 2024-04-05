import { BsFillPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Social(){

        const links = [
            {
                id:1,
                child: (
                    <>
                     LinkedIn <FaLinkedin size={30} /></>
                ),
                href :"https://www.linkedin.com/in/dev-patel-59a131193/",
                style:'rounded-tr-md',
            },
            {
                id:2,
                child: (
                    <>
                     GitHub <FaGithub size={30} /></>
                ),
                href :"https://github.com/dev-08",
             
            },
            {
                id:3,
                child: (
                    <>
                     Mail <HiOutlineMail size={30} /></>
                ),
                href :"mailto:devsp08@gmail.com",
         
            },
            {
                id:4,
                child: (
                    <>
                     Resume <BsFillPersonFill size={30} /></>
                ),
                href :"/DEV__PATEL.pdf",
                style:'rounded-br-md',
                download:true,
         
            },
           
        
        ]


        return(
            <div className="hidden lg:flex flex-col top-[35%] left-0 fixed"> 
            <ul>
                 
                        <>
                       {links.map((link)=>(

<li key={link.id} className={"flex justify-between item-center w-40 h-14 px-4 hover:rounded-md hover:ml-[-10px] ml-[-100px] duration-200 bg-gray-500"}>
                 
                         <a href={link.href} download={link.download}  className="flex my-auto justify-between item-center w-full text-white"
                      
                      
                         >
                            {link.child}
                         </a>
                         </li>
                       ))}
                        </>

                  
            
            </ul>

           
                
            </div>
        )


}


export default Social;