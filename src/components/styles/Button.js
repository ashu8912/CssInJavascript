import styled from 'styled-components';
const Button=styled.button`
outline:none;
border:2px groove green;
cursor:pointer;
font:inherit;
background:yellow;
border-radius:4px;
&:hover{
    background:white;
}
color:${props=>props.btnColor};
`;

export default Button;