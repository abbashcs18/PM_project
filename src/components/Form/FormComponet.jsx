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
import NavLogout from '../navbar/NavLogout';
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

        setActiveStep(next => next + 1) 
     
        console.log("fail")
    }


    const handlePervious = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1)
    }
    const last = () => {
        setActiveStep(prevActiveStep => 0)
    }
    function Alert () {
        
            
        if(!values.pId || !values.cId || !values.cName || !values.bName || !values.tOfD || !values.domain || !values.Aptitude_round_statues || !values.HR_interview_statues || !values.Tech_interview || !values.Tech_written_statues || !values.Job_role)
        {
            alert("Please fill the requirement..."); 
        
        }
      


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
            <NavLogout />

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