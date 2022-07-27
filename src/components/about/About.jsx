import React from 'react'
import Carousel from 'better-react-carousel'
import Footer from '../Footer';
import Navbar from '../navbar/Navbar';
import emailjs from '@emailjs/browser';

import wvf1 from './wvf1.jpg';
import wvf2 from './wvf2.jpg';
import wvf3 from './wvf3.jpg';
import wvf4 from './wvf4.jpg';
import wvf5 from './wvf5.jpg'
import { useState } from 'react';

const Result =()=>{
    return(
        <p>Your message has been successfully sent. I will contact you soon</p>
    )
}

const About = () => {
    const[result, showResult]=useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_iyzufur', e.target, 'xZlyJYJV5If4qiIAF')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true)

      };

  return (
    <>
    <Navbar/>
        <div className="bg-white">
    <div class="text-orange-600 text-4xl font-extrabold text-center mt-5">
        “Placements”
    </div>
    <div class=" text-2xl mt-5">
    Placements help trainees prepare for real-time interviews. They help to  improve the chances of getting hired. At WinVinaya, multiple mock interviews  are conducted for its trainees by handpicked industry experts. These experts  are busy professionals who are hard pressed for time to sit down and prepare  fresh questions for the interviews. The questions asked are to be aligned with the skill set of the trainee as mentioned in the resume. Further, if the candidate gets a feedback on how he/she fared in the interview and in which section or  topic he/she was weak, it would be helpful in improving their skills the next  time. An application which shall arrange the mock interview and generate  questions and also collect and generate feedback and statistics would be  beneficial for the training. Such an application would be available at the  fingertip ready to use. 
    </div>
    <div class=" text-orange-600 text-4xl font-extrabold text-center mt-5">
  
    </div>
    <div class="text-2xl mt-3">
    Placement is proposed to be a web-based application. The objective of  Placement is to develop a web application useful for interviews where the candidate can walk in free of mind and apply various technical topics.  Candidates could be scheduled according to their convenience.
        </div>

    <div class="text-2xl mt-3">

        </div>




<Carousel loop class="w-screen h-screen flex justify-center items-center">
<Carousel.Item>
        <img className="block py-32" src={wvf1} />
        </Carousel.Item>
        <Carousel.Item>
        <img className="block py-32" src={wvf2} />
    </Carousel.Item>
    <Carousel.Item>
        <img className="block py-32" src={wvf3} />
    </Carousel.Item>
    <Carousel.Item>
        <img className="block py-32" src={wvf4} />
    </Carousel.Item>
    <Carousel.Item>
        <img className="block py-32" src={wvf5} />
    </Carousel.Item>
         </Carousel>










             <div class="bg-gray-500 py-10">
         <div class="text-lime-500 text-4xl font-extrabold text-center mt-5">
         Contact Us
         </div>
    
         <form  class="mt-12 text-2xl font-extrabold text-center  " onSubmit={sendEmail}>
                  
                  <div class="mt-8 px-[600px]">
                      <div>
                            <p>Full Name</p>
                          <input type="text" name="full_name"
                          class="block lg:max-w-md font-normal px-4 py-2 mt-2 text-black bg-white border-rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder-red-300 border border-red-400" placeholder="Your full name.." required/>
                      </div>
                      <div class="mt-8 ">
                    <p>Email</p>
                      <input type="email"  name="email"
                      class="block  lg:max-w-md  font-normal px-4 py-2 mt-2 text-black  bg-white border-rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder-red-300 border border-red-400" placeholder="Email" required/>
                  </div>
                  <div class="mt-8 ">
                    <p>Phone</p>
                      <input type="phone"  name="phone"
                      class="block  lg:max-w-md  font-normal px-4 py-2 mt-2 text-black  bg-white border-rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder-red-300 border border-red-400" placeholder="Phone number" required/>
                  </div>
                      <div class="mb-10 mt-10">
                    <p>Country</p>
                    <select name="country" class="text-orange-600 mt-2">
                    <option value="india">India</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                    </select>
                      </div>
                      <p>Feedback</p>
                      <div class="mt-2  ">
                        
                        <textarea name="message" class=" font-normal text-sm py-20 px-32  " placeholder="Write something.." ></textarea>
                      </div>

                      <div class="mt-8 ">
                          <button
                              class="w-44 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-red-400">
                              Submit
                          </button>
                          <div className='row'> {result ? <Result/>:null}</div>
                      </div>
                  </div>
              </form>
              </div> 
              </div>
              
         <Footer/>
    </>
    )
}
export default About