import React from 'react'
import Carousel from 'better-react-carousel'
import Footer from '../Footer';

import wvf1 from './wvf1.jpg';
import wvf2 from './wvf2.jpg';
import wvf3 from './wvf3.jpg';
import wvf4 from './wvf4.jpg';
import wvf5 from './wvf5.jpg'

const About = () => {
  return (
    <>
        <div className="bg-white">
    <div class="text-orange-600 text-4xl font-extrabold text-center mt-5">
        “Placements”
    </div>
    <div class=" text-2xl mt-5">
    Symbiosis Skills and Professional University is Kerala’s first Skills University, based at Trivandrum which imparts industry required skills along with a strong foundation of knowledge to our students. The centres of excellence and learning factories on the campus provide practical training to students to simulate the real-life experience. Our industry partners have actively supported us in designing curriculum, expert guest sessions, sector-specific mentoring, onsite-visits, and interesting Internship projects. This ensures that our students are transformed into job-ready professionals.
    </div>
    <div class=" text-2xl mt-3">
    The Yearly internships for our students are an integral part of their curriculum and a USP of our University. Students appreciate this unique model as they arrive back to campus, post each year of internships, with valuable learning experiences of Corporate Work Culture, and more sense of responsibility. Our placement team gives a lot of emphasis on grooming, presentation, communication, mock interviews, and overall personality development, to ensure that our students stand out differently.    </div>
    <div class="text-2xl mt-3">
    The internship and placement team is continuously engaged with all our corporate partners to provide complementary learning modules.
        </div>

    <div class="text-2xl mt-3">
    Our team’s response to Covid 19- We truly believe that students should not miss out on the chance of internships even during the lockdown. We have rolled out an innovative concept of ई – Internships where students are undergoing internship mini projects at home under the continuous guidance and mentorship of our Faculty and experts from the industry.
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


            <div class="bg-green-500 py-10">
         <div class="text-orange-600 text-4xl font-extrabold text-center mt-5">
         Contact Us
         </div>
    
         <form class="mt-12 text-3xl font-extrabold text-center ">
                  <div class="px-[600px]">
                    <p>First Name</p>
                      <input type="text" 
                      class="block  lg:max-w-md  font-normal px-4 py-2 mt-2 text-black  bg-white border-rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder-red-300 border border-red-400" placeholder="Your name.." />
                  </div>
                  <div class="mt-8 px-[600px]">
                      <div>
                            <p>Last Name</p>
                          <input type="text"
                          class="block lg:max-w-md font-normal px-4 py-2 mt-2 text-black bg-white border-rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder-red-300 border border-red-400" placeholder="Your last name.." />
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
                        
                        <textarea class=" font-normal text-sm py-20 px-32  " placeholder="Write something.." ></textarea>
                      </div>

                      <div class="mt-8 ">
                          <button
                              class="w-44 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-red-400">
                              Submit
                          </button>
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