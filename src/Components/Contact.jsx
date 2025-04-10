import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

   
        const [result, setResult] = React.useState("");
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);

      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("");
            toast.success("Message sent succesfully")
            event.target.reset();
          } else {
              console.log("Error", data);
              toast.error(data.message);
          }
        };


  return (
    <div id='Contact'>
        <div className='  flex justify-center mt-30 gap-3'>
            <h1 className='text-2xl md:text-4xl font-medium'>Contact</h1>
            <h1 className='text-2xl md:text-4xl font-light underline underline-offset-2'>Us</h1>
        </div>
        <div className='flex justify-center'>
        <p className='w-80 text-center text-gray-600 text-[14px]'>
            Are we a match? if yes, Contact us by sending an email!
        </p>
        </div>
        <div className=" max-sm:hidden sm:hidden max-md:hidden md:flex contactPage text-2xl flex justify-center mt-10 mx-auto ml-5">
            <form className='' onSubmit={onSubmit}>
            <input type="hidden" name="access_key" value="2db91cf1-1eaf-4a7d-889b-14d96b66d709"/>
                <span className='md:flex md:gap-10 mx-auto '>
                <input className='border-1 border-black text-[19px] md:w-90  md:h-13 text-start pl-2 rounded ' placeholder='Enter name' name="name" type="text" required />
                
                <input type="email" className='border-1 border-black text-[19px] w-90 h-13 text-start pl-2 rounded' name="email"  required placeholder='Enter Email'  />
                <br />
                </span>
                <textarea name="message" placeholder='Enter Message' className='text-[19px] w-3xl h-50 border-1 border-black mt-10 pt-3 pl-3 rounded' required></textarea>
                <br />
                <button type='submit' className=' hover:bg-white hover:border-black hover:text-black transition-all border-3 bg-blue-500 border-blue-500 text-white cursor-pointer shadow-md rounded py-2 px-6  '>{result ? result : "Send Message"}</button>
            </form>
        </div>

        {/* Mobile */}
        <div className='md:hidden mt-10'>
            <form action="" onSubmit={onSubmit}>
            <input type="hidden" name="access_key" value="2db91cf1-1eaf-4a7d-889b-14d96b66d709"/>    
            <div className='md:text-2xl  md:hidden max-sm:flex  sm:flex justify-center gap-5 max-sm:text-[14px] sm:text-[14px]'> 
                <input name="name" type="text" placeholder='Enter name' className='border-1 border-black rounded  text-start  w-53 pl-3 h-8' required/>
                <br />
                <input type="email" placeholder='Enter email' name="email"  className='border-1 border-black rounded  text-start w-53  pl-3 h-8' required />
                
            </div>
            <span className='flex justify-center'>
            <span className='mx-auto'>
            <textarea name="message"  placeholder='Enter Message' className='border-1 border-black rounded mt-4 w-117 pl-3 h-30' required></textarea>
            <br />
            <button type='submit' className=' hover:bg-white hover:border-black hover:text-black transition-all border-3 bg-blue-500 border-blue-500 text-white cursor-pointer shadow-md rounded py-1 px-4  '>{result ? result : "Send Message"}</button>
            </span>
            </span>
            </form>
        </div>
    
    </div>
  )
}

export default Contact


// import React from 'react';

// const Contact = () => {
//     const [result, setResult] = React.useState("");

//     const onSubmit = async (event) => {
//         event.preventDefault();
//         setResult("Sending...");

//         const formData = new FormData(event.target);

//         const response = await fetch("https://api.web3forms.com/submit", {
//             method: "POST",
//             body: formData
//         });

//         const data = await response.json();

//         if (data.success) {
//             setResult("Form Submitted Successfully!");
//             event.target.reset();
//         } else {
//             console.log("Error", data);
//             setResult(data.message);
//         }
//     };

//     return (
//         <div id='Contact'>
//             <div className='flex justify-center mt-30 gap-3'>
//                 <h1 className='text-2xl md:text-4xl font-medium'>Contact</h1>
//                 <h1 className='text-2xl md:text-4xl font-light underline underline-offset-2'>Us</h1>
//             </div>
//             <div className='flex justify-center'>
//                 <p className='w-80 text-center text-gray-600 text-[14px]'>
//                     Are we a match? If yes, contact us by sending an email!
//                 </p>
//             </div>

//             {/* Desktop Form */}
//             <div className="max-sm:hidden sm:hidden max-md:hidden md:flex contactPage text-2xl flex justify-center mt-10 mx-auto ml-5">
//                 <form onSubmit={onSubmit}>
//                     <input type="hidden" name="access_key" value="2db91cf1-1eaf-4a7d-889b-14d96b66d709" />
                    
//                     <div className='md:flex md:gap-10 mx-auto'>
//                         <input name="name" type="text" className='border border-black text-[19px] md:w-90 md:h-13 pl-2 rounded' placeholder='Enter name' required />
//                         <input name="email" type="email" className='border border-black text-[19px] w-90 h-13 pl-2 rounded' placeholder='Enter Email' required />
//                     </div>

//                     <textarea name="message" className='text-[19px] w-3xl h-50 border border-black mt-10 pt-3 pl-3 rounded' placeholder='Enter Message' required></textarea>
                    
//                     <button type='submit' className='hover:bg-white hover:border-black hover:text-black transition-all border-3 bg-blue-500 border-blue-500 text-white cursor-pointer shadow-md rounded py-2 px-6 mt-4'>
//                         Send Message
//                     </button>
//                 </form>
//             </div>

//             {/* Mobile Form */}
//             <div className='md:hidden mt-10'>
//                 <form onSubmit={onSubmit}>
//                     <input type="hidden" name="access_key" value="2db91cf1-1eaf-4a7d-889b-14d96b66d709" />

//                     <div className='max-sm:flex sm:flex justify-center gap-5 max-sm:text-[14px] sm:text-[14px]'>
//                         <input name="name" type="text" placeholder='Enter name' className='border border-black rounded w-53 pl-3 h-8' required />
//                         <input name="email" type="email" placeholder='Enter email' className='border border-black rounded w-53 pl-3 h-8' required />
//                     </div>

//                     <div className='flex justify-center'>
//                         <textarea name="message" placeholder='Enter Message' className='border border-black rounded mt-4 w-117 pl-3 h-30' required></textarea>
//                     </div>

//                     <div className='flex justify-center'>
//                         <button type='submit' className='hover:bg-white hover:border-black hover:text-black transition-all border-3 bg-blue-500 border-blue-500 text-white cursor-pointer shadow-md rounded py-1 px-4 mt-4'>
//                             Send Message
//                         </button>
//                     </div>
//                 </form>
//             </div>

//             {/* Submission Result */}
//             {result && <p className="text-center mt-4 text-blue-500">{result}</p>}
//         </div>
//     );
// };

// export default Contact;
