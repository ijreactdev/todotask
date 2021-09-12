import React, {useContext} from 'react';
import {MyContext} from "../App";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Task} from'./ListStyled'
import {TaskContainer} from'./ListStyled'


import {StyledApp, StyledButton,StyledH1} from "../AppStyled"
import { ThemeProvider } from 'styled-components';

const List = () => {
    const { list,deleteTask,theme,GlobalStyled } = useContext(MyContext);
    const notifyDelete = () => toast.success("TasK Deleted!");

    return (
        <TaskContainer>
           <StyledH1>{list.length? `Tasks Listing`:`Task Listing Is Empty`}</StyledH1>
        <StyledApp className="App">
                <ThemeProvider theme={theme}>
                    <GlobalStyled/>

            {
                list.map((item,i)=>{
                    return ((<div key={i} style={{height:"60px",marginTop:"30px" }} > 
                 <Task  key={item.id} ><p style={{color:"red",display:"inline"}} > Title:</p> {item.title } </Task> 
                    <StyledButton color="warning" onClick={()=>{deleteTask(item.id);notifyDelete()}} type="button">delete</StyledButton>
                    </div>)
)
                })
            }
           </ThemeProvider>
            </StyledApp>
        </TaskContainer>
    );
};

export default List;
