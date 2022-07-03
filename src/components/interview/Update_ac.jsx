import React from 'react'
import classes from './stylesT'

const Update_ac = () => {
    return (
        <div className={classes.Container}>
            <h1 className={classes.heading}> Update academy progress</h1>
            <form class={classes.Form}>
                <div class={classes.FormBox}>
                    <div class={classes.labelWithInput}>
                        <label class={classes.label}>
                            Placement question paper score
                        </label>
                        <input class={classes.input} type="text" />
                        <div class="flex flex-wrap -mx-3 mb-2">
                        {/* <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0"> */}
                    </div>
                    {/* </div> */}
                <div className="flex justify-between items-center py-3 ">
                    <button className=' bg-orange-600 text-black font-bold p-3 rounded-md' type="submit">Submit</button>
                    <button className=' bg-orange-600 text-black font-bold p-3 rounded-md' type="reset">Back</button>
                </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Update_ac