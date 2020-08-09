import React from 'react';
import heartChecked from '../assets/feather-heart-color.png'
import heart from '../assets/feather-heart.png'

export const  HeartChecked=()=> {
  return (
  
      <img src={heartChecked}  height="20" width="20"/>

  );
}

export  const Heart=()=>{
    return (

                  <img src={heart}  height="20" width="20"/>
      );
} 
