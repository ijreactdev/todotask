import styled from 'styled-components'

export const StyledButton = styled.button`    
    background: ${(props) => props.outline ? "none" : props.theme[props.color]};
    border: ${(props) => props.outline ? "2px solid" + props.theme[props.color]  : "none"};
    font-size: 16px;
    width:150px;
    height:50px;
    margin-left: auto;
    display:flex;
    align-items:center;
    justify-content:center;
    color: ${(props) => props.outline ? props.theme[props.color] : props.theme.white};
    border-radius: 3px;
    text-transform: uppercase;
    
    position: relative;
    top:-77px;
    overflow-x: auto;
        -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    &:focus {
        outline:0;
        background-color: ${(props) => props.theme[props.color]};
        color: ${(props) => props.theme.white};
    }
    &:hover {
        box-shadow: ${(props) => "0 0 10px" + props.theme[props.color]};
    }
    &:disabled {
        opacity: 60%;
    }
    &:hover:disabled{
        box-shadow: none;
    }
    
    & > span{
        text-transform: none;
        visibility: hidden;
        width: 180px;
        background-color: black;
        color: #fff;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
        font-size: 13px;
        
        position: absolute;
        z-index: 1;
        bottom: 115%;
        left: 50%;
        margin-left: -90px;
    }
    
    &:hover:disabled > span{
        visibility: visible;
    }
    
`;

export const StyledApp = styled.div`
    width: 600px;
    height:60px;
    padding-top: 77px;
    margin: 0 auto;
`;

export const StyledH1 = styled.h1`
text-align:center;
color:black;
    margin: -100px auto 110px auto;
`;

export const StyledUl = styled.ul`
display: flex;
text-decoration: none
align-items:center;
justify-content: space-around;
color:red;
margin-left:30px;

`;

