import React, { useState } from 'react'
import classes from './stylesT'
import interviewSchema from '../schemas/schamas'
import { formik, useFormik } from 'formik'
import Axios from 'axios'


const Update_in = ({ values, errors, touched, handleChange, handleBlur }) => {

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
                            <input type="radio" name="Aptitude_round_statues" value="Yes" onChange={handleChange}
                                onBlur={handleBlur} /> Yes &nbsp;
                            <input type="radio" name="Aptitude_round_statues" value="No" onChange={handleChange}
                                onBlur={handleBlur} /> No
                        </div>

                    </div>

                    {errors.Aptitude_round_statues && touched.Aptitude_round_statues && <p className={classes.VaildE}>{errors.Aptitude_round_statues}</p>}


                    <div class={classes.labelWithradio}>
                        <label class={classes.labelRadio}>
                            Tech-written statues(Y/N)&nbsp;
                        </label>
                        <div className={classes.Radio}>
                            <input type="radio" name="Tech_written_statues" value="Yes" onChange={handleChange}
                                onBlur={handleBlur} /> Yes &nbsp;
                            <input type="radio" name="Tech_written_statues" value="No" onChange={handleChange}
                                onBlur={handleBlur} /> No
                        </div>

                    </div>
                    {errors.Tech_written_statues && touched.Tech_written_statues && <p className={classes.VaildE}>{errors.Tech_written_statues}</p>}

                    <div class={classes.labelWithradio}>
                        <label class={classes.labelRadio}>
                            Tech-interview (Y/N)&nbsp;
                        </label>
                        <div className={classes.Radio}>
                            <input type="radio" name="Tech_interview" value="Yes" onChange={handleChange}
                                onBlur={handleBlur} /> Yes &nbsp;
                            <input type="radio" name="Tech_interview" value="No" onChange={handleChange}
                                onBlur={handleBlur} /> No
                        </div>

                    </div>
                    {errors.Tech_interview && touched.Tech_interview && <p className={classes.VaildE}>{errors.Tech_interview}</p>}

                    <div class={classes.labelWithradio}>
                        <label class={classes.labelRadio}>
                            HR-interview statues (Y/N)&nbsp;
                        </label>
                        <div className={classes.Radio}>
                            <input type="radio" name="HR_interview_statues" value="Yes" onChange={handleChange}
                                onBlur={handleBlur} /> Yes &nbsp;
                            <input type="radio" name="HR_interview_statues" value="No" onChange={handleChange}
                                onBlur={handleBlur} /> No
                        </div>

                    </div>
                    {errors.HR_interview_statues && touched.HR_interview_statues && <p className={classes.VaildE}>{errors.HR_interview_statues}</p>}

                    <div class={classes.labelWithradio}>
                        <label class={classes.labelRadio}>
                            Job role (Y/N)&nbsp;
                        </label>
                        <div className={classes.Radio}>
                            <input type="radio" name="Job_role" value="Yes" onChange={handleChange}
                                onBlur={handleBlur} /> Yes &nbsp;
                            <input type="radio" name="Job_role" value="No" onChange={handleChange}
                                onBlur={handleBlur} /> No
                        </div>

                    </div>
                    {errors.Job_role && touched.Job_role && <p className={classes.VaildE}>{errors.Job_role}</p>}
                    

                </div>
                <div class="flex flex-wrap -mx-3 mb-2">

                    {/* <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0"> */}

                </div>
                {/* </div> */}
                <div className="flex justify-between items-center py-3 ">
                    <button className=' bg-orange-600 text-black font-bold p-3 rounded-md' type="reset">Clear</button>
                </div>

            </form>
        </div>
    )
}

export default Update_in