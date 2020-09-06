import React from "react";
import Img from '../assets/Img1.jpg'
import '../styles/recipes.scss'
import Playbtn from '../assets/ionic-ios-play-circle.png'
import { HeartChecked } from "./heart";

export default class Recipes extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
       dataItems:[],
       id:undefined
      };
    }

    componentWillMount() {   
      const data= localStorage.getItem('recipeData');
      const a=JSON.parse(data)        
      const id =this.props.match.params.id;
      console.log(a[id].image)
     this.setState({dataItems:JSON.parse(data),id:id})
      }
  
      
    render(){
        const {dataItems,id} = this.state;   
  
  return (     
    <>    
    <div className="recipe-container">
      <div className="column1">
        <div className="item1">
            <img  className="img-recipe"  src={dataItems[id].image} height="170" width="85%"/>
            <img src={Playbtn} className="playbtn" height="30" width="30"/>
        </div>
        <div className="item2">
          <h3>Ingredients</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        <div className="item3">
          <h3>How to prepare :</h3>
          <h4>Ingredients</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.<br/><br/> Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.<br/><br/>velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
      <div className="column2">
        <div className="item1">
            <p className="small-h">RECIPE</p>
            <h2>{dataItems[id].name}</h2>
            <p className="small-h">DESCRIPTION</p>
  <p>{dataItems[id].description}</p>
        </div>
        <div className="item2">
               <div className="circle-values">
             <div className="circle">8<br/>Ingredients</div>
              <div className="circle">220 <br/>Bucks</div>
              <div className="circle">25 <br/>mins</div>
              </div>
              <div className="favourite-options">
                  <span>FAVOURITE THIS RECIPE</span><span><HeartChecked/></span>
               <hr/>
              </div>
        </div>
        <div className="item3">
            <p className="small-h comment">ADD COMMENTS</p>
            <textarea   className="textarea" placeholder="Type something here..."></textarea>
            <button>Add Comment</button>
        </div>
      </div>
    </div> 
    </>
  );
};

}
