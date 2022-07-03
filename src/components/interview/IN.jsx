import React from 'react'
import { useState } from 'react';
import useStyle from './stylesT';

const classes = useStyle;


const IN = () => {
    const [name,setName]= useState({});

    const handledchange=(event)=>{
        event.preventDefault();
        const plid=event.target.plid;
        const clid=event.target.clid;
        setName(values=>([name]))
        
    }
    const handleSubmit=(event) => {
        event.preventDefault();
        console.log(name);
    }
    document.title = 'Interview'
    return (
        
      
      

        
   <div className={classes.Container}>

{/* 
            <div class="absolute inset-y-18  left-10 w-50 text-black-900 px-5 rounded-x bg-slate-300">



                <ul type="circle">
                <li> Candidate Registration  </li>
                <li> Update Interview process </li>
                <li> Update Academy progress  </li>
                <li> Display Candidate Registration</li>
                <li> Display Update interview process</li>
                <li> Display Update academy progress</li>

            </ul>
            </div> */}


        <h1 className={classes.heading}> ACCENTURE - CANDIDATE REGISTRATION</h1>
        <form class="container mx-auto px-11" onSubmit={handleSubmit}>

                <div class={classes.FormBox}>
                    <div class={classes.labelWithInput}>
                        <label class={classes.label}>
                            Placement Drive ID
                        </label>
                        <input class={classes.input} type="text" name="plied" value={name.plied} OnChange={(e) => setName(e.target.value)} />

                    </div>
                    <div class={classes.labelWithInput}>
                        <label class={classes.label}>
                            Candidate ID
                        </label>
                        <input class={classes.input} type="text" name="clii" value={name.clid} onChange={(e) => setName(e.target.value)} />

                    </div>
                    <div class={classes.labelWithInput}>
                        <label class={classes.label}>
                            Candidate Name
                        </label>
                        <input class={classes.input} type="text" />

                    </div>
                    <div class={classes.labelWithInput}>
                        <label class={classes.label}>
                            Batch Name
                        </label>
                        <input class={classes.input} type="text" />

                    </div>
                    <div class={classes.labelWithInput}>
                        <label class={classes.label}>
                            Domain
                        </label>
                        <div class="relative">
                            <select class={classes.input} id="grid-state">
                                <option>IT</option>
                                <option>BRA</option>

                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 left-70  flex items-center px-2   text-gray-700">
                                <svg class="fill-current h-4 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0"> */}
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    Type of Disability
                </label>
                <div class="relative">
                    <select class={classes.input}>
                        <option>Deaf</option>
                        <option>Hard of hearing</option>
                        <option>hearing impaired</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 left-70  flex items-center px-2   text-gray-700">
                        <svg class="fill-current h-4 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
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

export default IN


const forms=()=>
{
    return (


<div class="absolute h-32 w-32">
<div class="absolute inset-y-0 left-0 w-16 text-white-900 bg-white">hello wotldsfdsfkjsdf</div>
</div>

    );
}