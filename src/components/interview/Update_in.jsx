import React from 'react'


const Update_in = () => {
    return (

        <div className='bg-white px-[200px] py-2 my-5  mx-[400px] place-items-center rounded-md'>
            <h1 className='text-black font-bold py-3 px-5 my-3 bg-orange-500 rounded-xl text-center'> Update interview process</h1>
            <form class="w-full  max-w-lg">

                <div class="flex flex-wrap -mx-3 mb-6 ">
                   
                 
                    <div class="w-full px-3 my-5">
                        <label class="absolute uppercase tracking-wide text-gray-700 text-xs font-bold mb-10" for="grid-password">
                            Aptitude round statues(Y/N)&nbsp;
                        </label>
                        <div className="relative uppercase tracking-wide text-gray-700 text-xs font-bold ml-[250px]">
                         <input  type="radio" name="option1" value="yes"/> yes &nbsp;
                         <input  type="radio" name="option1" value="no"/> no     
                        </div>
                        

                    </div>
                    <div class="w-full px-3 my-5">
                        <label class="absolute uppercase tracking-wide text-gray-700 text-xs font-bold mb-10" for="grid-password">
                            Tech-written statues(Y/N)&nbsp;
                        </label>
                        <div className="relative uppercase tracking-wide text-gray-700 text-xs font-bold ml-[250px]">
                         <input  type="radio" name="option1" value="yes"/> yes &nbsp;
                         <input  type="radio" name="option1" value="no"/> no     
                        </div>

                    </div>
                    <div class="w-full px-3 my-5">
                        <label class="absolute uppercase tracking-wide text-gray-700 text-xs font-bold mb-10" for="grid-password">
                            Tech-interview (Y/N)&nbsp;
                        </label>
                        <div className="relative uppercase tracking-wide text-gray-700 text-xs font-bold ml-[250px]">
                         <input  type="radio" name="option1" value="yes"/> yes &nbsp;
                         <input  type="radio" name="option1" value="no"/> no     
                        </div>

                    </div>
                    <div class="w-full px-3 my-5">
                        <label class="absolute uppercase tracking-wide text-gray-700 text-xs font-bold mb-10" for="grid-password">
                            HR-interview statues (Y/N)&nbsp;
                        </label>
                        <div className="relative uppercase tracking-wide text-gray-700 text-xs font-bold ml-[250px]">
                         <input  type="radio" name="option1" value="yes"/> yes &nbsp;
                         <input  type="radio" name="option1" value="no"/> no     
                        </div>

                    </div>

                    <div class="w-full px-3 my-5">
                        <label class="absolute uppercase tracking-wide text-gray-700 text-xs font-bold mb-10" for="grid-password">
                           Job role (Y/N)&nbsp;
                        </label>
                        <div className="relative uppercase tracking-wide text-gray-700 text-xs font-bold ml-[250px]">
                         <input  type="radio" name="option1" value="yes"/> yes &nbsp;
                         <input  type="radio" name="option1" value="no"/> no     
                        </div>

                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">

                    {/* <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0"> */}
                        
                      
                    </div>
                {/* </div> */}
                <div className="flex justify-between items-center py-3 ">
                    <button className=' bg-orange-600 text-black font-bold p-3 rounded-md' type="submit">Submit</button>
                    <button className=' bg-orange-600 text-black font-bold p-3 rounded-md' type="reset">Clear</button>
                </div>

            </form>
        </div>
    )
}

export default Update_in