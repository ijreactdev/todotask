import React,{useContext} from 'react';
import {Form, withFormik} from "formik";
import {MyContext} from "../App";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    StyledFields,
    StyledTaskForm,
    StyledFieldBlock,
    SaveStyledButton,
    ControlBlock,
} from './FormStyled'

const TaskForm = ({showNew, onHideTaskForm,dirty }) => {
    const {setClicked } = useContext(MyContext);
    const handleClick=()=>{
        setClicked(null);
        if(showNew)
        {
notifyCreate()
        }
        else{
            notifyUpdate()
        }

    }
    const notifyCreate = () => toast.success("Task Created!");
    const notifyUpdate = () => toast.success("Task Updated!");
    const notifyCancel = () => toast.error("Task Canceld!");

    return (
        <StyledTaskForm>
            <Form>
                <StyledFieldBlock borderBottom>
                    <StyledFields placeholder="Task name" name="title"/>

                </StyledFieldBlock>
                <StyledFieldBlock>
                    <StyledFields placeholder="Task description" name="description"/>
                </StyledFieldBlock>
                <ControlBlock>
                    <SaveStyledButton color="primary" type="button" style={{marginTop:"10px"}} onClick={()=>{onHideTaskForm();notifyCancel()}} outline>cancel</SaveStyledButton>
                    <SaveStyledButton color="primary" onClick={handleClick} style={{marginTop:"10px"}} disabled={!dirty} type="submit">
                        {showNew ? "Create" : "Update"}

                    </SaveStyledButton>
                    
                </ControlBlock>
            </Form>
        </StyledTaskForm>
    );
};

const getNewId = () => {
    return `f${(+new Date()).toString(16)}`;
};

const FormikTaskForm = withFormik({
    mapPropsToValues({active}){
        return{
            id: (active && active.id) || '',
            title: (active && active.title) || '',
            description: (active && active.description) || '',
        }
    },
    handleSubmit(values, {props}) {
        if (values.id){
            props.editTask({
                ...values,
                id: values.id
            });
        } else {
            props.addTask({
                ...values,
                id: getNewId()
            });
        }
    },
    enableReinitialize : true,
})(TaskForm);

export default FormikTaskForm;
