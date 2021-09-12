import styled from "styled-components";
import {Field} from "formik";

import {StyledButton} from '../AppStyled'

export const StyledFields = styled(Field)`
    border: none;
    resize: none;
    width: 100%;
    padding: 0 17px;
    height: 33px;
    box-sizing: border-box;
    
    &:focus {
      outline:0;
    }
`;

export const StyledFieldBlock = styled.div`
    padding-left:1px;
    border-bottom: 2px solid ${({theme}) => theme.primary};
    display: flex;
    padding-right: 19px;
    ${props => !props.borderBottom ? "border-bottom: none" : ""};
`;

export const StyledTaskForm = styled.div`
    border: 2px solid ${({theme}) => theme.primary};
    border-radius: 3px;
    padding-bottom: 19px;
    margin-bottom: 40px;
`;

export const SaveStyledButton = styled(StyledButton)`
    width:100px;
    height:34px;
    background:gray;
    margin-left: 31px;
`;

export const DeleteStyledButton = styled(StyledButton)`
    font-size: 10px;
    line-height: 12px;
    width:75px;
    height:16px;
`;

export const ControlBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    margin-top: 40px;
    padding-right: 19px;
`;


