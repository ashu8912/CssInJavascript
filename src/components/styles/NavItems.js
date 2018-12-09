import React from 'react';
import styled,{keyframes} from 'styled-components';

const scaleAnimate=keyframes`
from{
    transform:scale(1);
}
to{
    transform:scale(2);
}
`

const NavigationItems=styled.ul`
list-style:none;
margin:0;
padding:0;
display:flex;
li{
padding:10px;
&:hover{
    animation:${scaleAnimate} 2s ease;
}
a{
    text-decoration:none;
    color:red;
}
}
`
export default (props)=>{
return (<NavigationItems>
{props.navItems.map((NavigationItem,index)=><li key={index}><a href={`/${NavigationItem}`}>{NavigationItem}</a></li>)
   }   </NavigationItems>)
}