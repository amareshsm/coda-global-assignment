import React from "react";
import parse from "html-react-parser";
import "../styles/AutoCompleteText.scss";
import Search from "../components/search";
import axios from 'axios';
import '../styles/cards.scss'

export default class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: [],
      inputText: "",
      recipeData: undefined,
      isLoading: true,
      error: "",
  
    };
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    try {
      const recipeData = await axios.get(
        `http://starlord.hackerearth.com/recipe`
      );
      localStorage.setItem("recipeData",JSON.stringify(recipeData.data));
      this.setState({ recipeData: recipeData.data });
    } catch (err) {
      this.setState({ error: "error occured while fetching data" });
    } finally {
      this.setState({ isLoading: false });

    }
  };
  onChange(e) {
    const {recipeData} = this.state;
    const value = e.target.value;
    let suggestions = [];
    // let index=[];
    // let searchArray=[];

    if (value.trim().length > 0) {
      const regex = new RegExp(`^${value.trim()}`, "i");

      suggestions = this.state.recipeData.filter((v) => regex.test(v.name));

      let indexArray=[];
      recipeData.forEach((ele, i) => {
          if (regex.test(ele.name)) {
            indexArray[i] = i;
          }
          this.setState({ resultIndex: indexArray });
        });
        // recipeData.map((val,index)=>{
        //     if(indexArray.indexOf(index) !== -1){
        //         searchArray.push(val)
        //     }
        // })
      suggestions.map((val, index) => {
        let endIndex = value.length;
        suggestions[index] =
          `<span class='highlight'>${value}</span>` + val.name.slice(endIndex);
      });
    }
    this.setState(() => ({ suggestions, inputText: value }));
  }

  suggestionSelected(value) {
      const {recipeData} = this.state
    let val = value
      .replace(`<span class='highlight'>`, "")
      .replace(`</span>`, "");
    this.setState(() => ({
      inputText: val,
      suggestions: [],
    }));
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {" "}
        {suggestions.map((item) => (
          <li key={item} onClick={() => this.suggestionSelected(item)}>
            {parse(item)}
          </li>
        ))}
      </ul>
    );
  }

  renderFoodRecipes(){
      const {recipeData,isLoading} = this.state;
      console.log(recipeData);

       if(isLoading){
           return (<h2 className="loading">Loading</h2>)
       }else{
      if(recipeData.length < 1){
          return (<h1>No food items</h1>)
      }
      return (
        <section className="posts-cards-wrapper">
            {recipeData.map((item,id)=>(
      <div className="posts-card-grid-space">
      <div className="posts-card" >
          <div className="img-section" style={{'--bgImg': `url(${item.image})`}}>
          </div>
        <div className="bottom-content">
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <div className="posts-date">{item.category}</div>
          <div className="posts-make-time">24 mins</div>
          <div className="posts-tags">
            <div className="posts-tag">{item.price}</div>
            {item.label ? <div className="posts-tag">{item.label}</div> :""}
          </div>
        </div>
        <div className="hover-element">
            <a className="viewmore-btn" href={`recipes/${id}`}>View more</a>
        </div>
      </div>
    </div>
            ))}
  
      </section>

      )
            }
  }

  render() {
    return (
      <div className="AutoCompleteText">
        <div className="search-bar">
          <Search />
          <input
            onChange={(e) => this.onChange(e)}
            type="text"
            value={this.state.inputText}
            placeholder="search your favourite recipe..."
          />
        </div>
        {this.renderSuggestions()}
       {this.renderFoodRecipes()}
      </div>
    );
  }
}
