import React, {createContext, useState} from 'react';
import List from "./components/List";
import CreateTasks from "./components/CreateTasks";
import TasksListing from "./components/TasksListing";
import TaskForm from "./components/TaskForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {StyledButton, StyledApp,StyledUl, StyledH1} from './AppStyled'

import { createGlobalStyle, ThemeProvider} from "styled-components";

import {BrowserRouter,Switch,Link,Route,useLocation,useRouteMatch} from "react-router-dom" 

const GlobalStyled = createGlobalStyle`
    body{
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
`;

const theme = {
    primary: '#D1004B',
    white: '#FFFFFF',
    warning: '#E28417',
};

export const MyContext = createContext(null);

const initialState = {
    list: [
        {
            id: 1,
            title: "Task 1",
            description: "task 1 description"
        },
        {
            id: 2,
            title: "Task 2",
            description: "task 2 description"
        },
        {
            id: 3,
            title: "Task 3",
            description: "task 3 description"
        },

    ],
    active: null,
    showNew: false,
};


function App() {
    const [state, setState] = useState(initialState);
    const [clicked, setClicked] = useState(0);


    const getById = (taskId) => state.list.find(i => i.id === taskId);


    const deleteTask = (taskId) => {
        const newList = state.list.filter(i => i.id !== taskId);
        setState({...state, list: newList, active: null});
    };

    const editTask = (task) => {
        const newList = state.list.map(t => {
            if (t.id === task.id) {
                return task;
            }
            return t;
        });
        setState({...state, list: newList, active: null, showNew: false});
    };
    const addTask = (task) => {
        let newList = state.list;
        newList.push(task);
        setState({...state, list: newList, active: null, showNew: false});
    };

    const onShowNewTaskForm = () => {
        setState({ ...state, showNew:true, active: null} );
    };

    const onShowEditTaskForm = (id) => {
        setState({ ...state, showNew:false, active: getById(id)} );
    };

    const onHideTaskForm = () => {
        setState({ ...state, showNew:false, active: null} );
    };

    const context = {
        list: state.list,
        deleteTask,
        onShowEditTaskForm,
        onShowNewTaskForm,
        GlobalStyled,
        ThemeProvider,
        theme,
        clicked,
        setClicked,

    };

    return (
        <MyContext.Provider value={context}>
            <BrowserRouter>
            <StyledUl>
            <Link to="/">Tasks</Link>
            <Link to="/listing">Tasks Listing</Link>
            <Link to="/tasksdetails">Tasks Details</Link>
            </StyledUl>

            <StyledApp className="App">
                <ThemeProvider theme={theme}>
                    <GlobalStyled/>
                    {(state.showNew || state.active)  &&
                        <TaskForm addTask={addTask} editTask={editTask} deleteTask={deleteTask} 
                        showNew={state.showNew} active={state.active} onHideTaskForm={onHideTaskForm}/>   
                    }
                </ThemeProvider>
                <ToastContainer 
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
            </StyledApp>

<Switch>
<Route exact path="/" component={CreateTasks}/> 
<Route exact path="/tasksdetails" component={TasksListing}/> 
<Route exact path="/listing" component={List}/> 
</Switch>
</BrowserRouter>
</MyContext.Provider>
    );
}

export default App;
