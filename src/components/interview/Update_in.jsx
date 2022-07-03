import React from 'react'
import classes from './stylesT'

const Update_in = () => {
    return (

        <div className={classes.Container}>
            <h1 className={classes.heading}> Update interview process</h1>
            <form class={classes.Form}>

                <div class={classes.FormBox}>
                   
                    <div class={classes.labelWithradio}>
                        <label class={classes.labelRadio}>
                            Aptitude round statues(Y/N)&nbsp;
                        </label>
                        <div className={classes.Radio}>
                         <input  type="radio" name="option1" value="yes"/> yes &nbsp;
                         <input  type="radio" name="option1" value="no"/> no     
                        </div>
                        

                    </div>
                    <div class={classes.labelWithradio}>
                        <label class={classes.labelRadio}>
                            Tech-written statues(Y/N)&nbsp;
                        </label>
                        <div className={classes.Radio}>
                         <input  type="radio" name="option1" value="yes"/> yes &nbsp;
                         <input  type="radio" name="option1" value="no"/> no     
                        </div>

                    </div>
                    <div class={classes.labelWithradio}>
                        <label class={classes.labelRadio}>
                            Tech-interview (Y/N)&nbsp;
                        </label>
                        <div className={classes.Radio}>
                         <input  type="radio" name="option1" value="yes"/> yes &nbsp;
                         <input  type="radio" name="option1" value="no"/> no     
                        </div>

                    </div>
                    <div class={classes.labelWithradio}>
                        <label class={classes.labelRadio}>
                            HR-interview statues (Y/N)&nbsp;
                        </label>
                        <div className={classes.Radio}>
                         <input  type="radio" name="option1" value="yes"/> yes &nbsp;
                         <input  type="radio" name="option1" value="no"/> no     
                        </div>

                    </div>

                    <div class={classes.labelWithradio}>
                        <label class={classes.labelRadio}>
                           Job role (Y/N)&nbsp;
                        </label>
                        <div className={classes.Radio}>
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