import styled from 'styled-components'

export const Task = styled.div`
        border-radius: 3px;
        width: 70%;
        height: 50px;
        padding-left: 18px;
       
        line-height: 50px;
        box-sizing: border-box;
        margin-bottom: 24px;

        &:hover {
            box-shadow: ${(props) => "0 0 10px" + props.theme.primary};
        }
`;

export const TaskContainer = styled.div`

   
`;
