import React, {useContext} from 'react';
import {MyContext} from "../App";

import {Task} from'./ListStyled'
import {TaskContainer} from'./ListStyled'
import {StyledApp} from '../AppStyled'
import { ThemeProvider} from "styled-components";
import {StyledButton,StyledH1} from "../AppStyled"

const TasksListing = () => {
    const { list,theme,GlobalStyled,onShowEditTaskForm,clicked,setClicked } = useContext(MyContext);
    const handleCallback=(id)=>{
        onShowEditTaskForm(id)
        setClicked(id)
        console.log(`id`, id,clicked)
    }
    return (
        <TaskContainer>
                        <StyledH1>{list.length? `Tasks Details`:`Task Details Is Empty`}</StyledH1>

        <StyledApp className="App">
                <ThemeProvider theme={theme}>
                    <GlobalStyled/>

            {
                list.map((item,i)=>{
                    return <div key={i}> 
                    <div style={{display:`${clicked===item.id?`none`:`block`}`,height:"60px",marginTop:"30px" }}>
                  <Task  key={item.id} > <p style={{color:"red",display:"inline"}} > Title:</p> {item.title } <p style={{color:"red",display:"inline"}}> Desciption: </p>{item.description } </Task> 
                <StyledButton color="warning" onClick={() => {handleCallback(item.id)  }  } type="button">Update</StyledButton>
                </div> 
                </div>

                })
            }
            </ThemeProvider>
             </StyledApp>
        </TaskContainer>
       

    );
};

export default TasksListing;
