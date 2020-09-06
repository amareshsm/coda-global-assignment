import React from 'react';
import searchicon from '../assets/feather-search.png'
import  {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    imgSearch:{
        width:'38px',
        height:'35px',
        borderRadius:'50%',
        display:'flex',
        margin:'0px 10px',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    }
})

const  Search=()=> {
    const classes = useStyles()
  return (
      <div className={classes.imgSearch}>
      <img src={searchicon} alt="search-icon"  height="17" width="17"/>
      </div>
  );
}

export default Search
