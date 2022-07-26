import React from 'react'
import { Stepper, Step, StepLabel, Typegraphy, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import { IoThumbsUpOutline } from "react-icons/io5";
import IN from '../interview/IN'
import Update_ac from '../interview/Update_ac'
import Update_in from '../interview/Update_in'
import { formik, useFormik } from 'formik'
import interviewSchema from '../schemas/schamas';
import Axios from "axios";
import Navbar from '../navbar/Navbar';
import Popup from './Popup'

const useStyles = makeStyles({
    root: {
        width: "50%",
        margin: "6rem auto",
        border: "1px solid #999 round",
        "& .MuiStepIcon-root.Mui-active": {
            color: "red"
        },
        "& .MuiStepIcon-root.Mui-completed": {
            color: "pink"
        },
        borderRadius: "25px",
        color: "white",
        backgroundColor: "white",
        padding: "20px"
    },
    complete: {

        padding: "50px",

        textAlign: "center",
        fontFamily: ""


    },


})


function FormComponent() {
    //react hooks

    const [listOfUsers, setListOfUsers] = useState([]);

    const createUser = () => {
        Axios.post("http://localhost:5001/createUsers", {
            pId: values.pId,
            cId: values.cId,
            cName: values.cName,
            bName: values.bName,
            domain: values.domain,
            tOfD: values.tOfD,
            Aptitude_round_statues: values.Aptitude_round_statues,
            Tech_written_statues: values.Tech_written_statues,
            Tech_interview: values.Tech_interview,
            HR_interview_statues: values.HR_interview_statues,
            Job_role: values.Job_role,
            score: values.score

        }).then((response) => {
            setListOfUsers([...listOfUsers, this.pId, this.cId, this.cName, this.bName, this.domain, this.tOfD, this.Aptitude_round_statues,
            this.Tech_written_statues,
            this.Tech_interview,
            this.HR_interview_statues,
            this.Job_role,
            this.score
            ]);
        });
    };

    const { values, errors, touched, handleChange, handleBlur , handleSubmit } = useFormik({
        initialValues: {
            pId: "",
            cId: "",
            cName: "",
            bName: "",
            domain: "",
            tOfD: "",
            Aptitude_round_statues: "",
            Tech_written_statues: "",
            Tech_interview: "",
            HR_interview_statues: "",
            Job_role: "",
            score: "",
        },
        validationSchema: interviewSchema,
        onSubmit: () => {
            createUser();
        },


    })
    console.log(values);
    const [activeStep, setActiveStep] = useState(0);

    function getSteps() {
        return ["CANDIDATE REGISTRATION", "UPDATE INTERVIEW PROCESS", "UPDATE ACADEMY PROCESS"]
    }

    function handleNext() {

        if(values==="")
        {
            alert("Please fill the requirement...");
        
        }else setActiveStep(next => next + 1)
        console.log("fail")
    }


    const handlePervious = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1)
    }
    const last = () => {
        setActiveStep(prevActiveStep => 0)
    }
    const Alert = () => {
        return (
            <div>
                <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
                    Toggle modal
                </button>

                <div id="popup-modal" tabindex="-1" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
                    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                            <div class="p-6 text-center">
                                <svg aria-hidden="true" class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                                <button data-modal-toggle="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                    Yes, I'm sure
                                </button>
                                <button data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        )


    }

    const steps = getSteps()
    const classes = useStyles()

    function getStepsContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <IN values={values} errors={errors} touched={touched} handleChange={handleChange} handleBlur={handleBlur}  handleSubmit={handleSubmit} />;
            case 1:
                return <Update_in values={values} errors={errors} touched={touched} handleChange={handleChange} handleBlur={handleBlur} handleSubmit={handleSubmit}/>;
            case 2:
                return <Update_ac values={values} errors={errors} touched={touched} handleChange={handleChange} handleBlur={handleBlur} handleSubmit={handleSubmit}/>;
            default:
                return "Complete";

        }
    }


    return (
        <div>
            <Navbar />

            <div className={classes.root}>
                <form onSubmit={handleSubmit}>

                <Stepper activeStep={activeStep} alternativeLabel >
                    {steps.map(label => (
                        <Step key={label}>
                            <StepLabel class='font-bold'>

                                {label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <>

                    {activeStep === steps.length ? <div class="py-[40px]">
                        <button className="bg-red-600 text-black font-bold p-3 rounded-md ml-[200px] hover:bg-red-900 focus:outline-none" onClick={last}>
                            Edit</button>
                        <button type="button"    className="bg-green-600 text-black font-bold p-3 rounded-md ml-[100px] hover:bg-green-900" onClick={Alert}>Confirm</button></div> : (
                        <div className="flex-auto">
                            {getStepsContent(activeStep)}

                            <Button class=" bg-orange-600 text-black font-bold p-3 rounded-md ml-[85px]" onClick={handlePervious}>
                                {activeStep === steps.length ? "" : "BACK"}
                            </Button>

                            <Button class=" bg-orange-600 text-black font-bold p-3 rounded-md ml-[400px]" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? <Button class="bg-orange-600 text-black"> Submit </Button> : "NEXT"}
                            </Button>

                        </div>
                    )}
                </>
                </form>
            </div>
            
        </div>

    )
}



export default FormComponent