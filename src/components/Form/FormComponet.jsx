import React from 'react'
import { Stepper, Step, StepLabel, Typegraphy, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import { IoThumbsUpOutline } from "react-icons/io5";
import IN from '../interview/IN'
import Update_ac from '../interview/Update_ac'
import Update_in from '../interview/Update_in'

const useStyles = makeStyles({
    root: {
        width: "50%",
        margin: "6rem auto",
        border: "1px solid #999 round",
        "& .MuiStepIcon-root.Mui-active": {
            color: "red"
        },
        "& .MuiStepIcon-root.Mui-completed": {
            color: "red"
        },
        borderRadius:"25px",
        color: "white",
        backgroundColor: "white",
        padding: "20px"
    },
    complete:{
        fontWeight:"bold",
        color:"red",
        padding:"50px",
        fontSize:"50px",
        textAlign:"center",
        fontFamily:""
        

    },
    
    
})

function FormComponent() {
    //react hooks

    const [activeStep, setActiveStep] = useState(0);

    function getSteps() {
        return ["CANDIDATE REGISTRATION", "UPDATE INTERVIEW PROCESS", "UPDATE ACADEMY PROCESS"]
    }

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
    }

    const handlePervious = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1)
    }

    const steps = getSteps()
    const classes = useStyles()

    function getStepsContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <IN />;
            case 1:
                return <Update_in />;
            case 2:
                return <Update_ac />;
            default: return "Complete";

        }
    }


    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel >
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel className='font-bold'>
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
            <>
                {activeStep === steps.length ?<div className={classes.complete}> <h1><IoThumbsUpOutline className="absolute bottom-[410px] left-[980px] h-auto w-auto"/>COMPLETED!!!</h1> </div>: (
                    <div className="flex-auto">
                        {getStepsContent(activeStep)}
                        <Button class=" bg-orange-600 text-black font-bold p-3 rounded-md" onClick={handleNext}>
                            {activeStep === steps.length ? "Finish" : "NEXT"}
                        </Button>

                        <Button class=" bg-orange-600 text-black font-bold p-3 rounded-md ml-[550px]" onClick={handlePervious}>
                            {activeStep === steps.length ? "Finish" : "BACK"}
                        </Button>
                    </div>
                )}
            </>

        </div>

    )
}

export default FormComponent