import React, {useContext} from 'react';
import {MyContext} from "../App";
import {TaskContainer} from'./ListStyled';
import {StyledApp, StyledButton} from "../AppStyled"
import { ThemeProvider } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CreateTasks = () => {
    const {theme,GlobalStyled ,onShowNewTaskForm} = useContext(MyContext);

    return (
        <TaskContainer>
        <StyledApp className="App">
                <ThemeProvider theme={theme}>
                    <GlobalStyled/>
                    <StyledButton color="primary" onClick={onShowNewTaskForm} style={{marginTop:"120px",marginRight:"220px"}}>Create Task</StyledButton>

           </ThemeProvider>
            </StyledApp>
        </TaskContainer>
    );
};

export default CreateTasks;
