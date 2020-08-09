import React from "react";
import parse from "html-react-parser";
import "../styles/AutoCompleteText.scss";
import Search from "../components/search";
import axios from 'axios';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      "Telegram",
      "Tesla",
      "Thoshiba",
      "facebook",
      "amazon",
      "amazon console",
      "google",
      "chargebee",
      "Twillio",
      "slack",
      "freshworks",
      "zoho",
      "tcs",
      "cts",
      "Tech Mahindra",
      "tvs",
      "torrent",
      "amazon sales",
    ];
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
      localStorage.setItem("recipeData", recipeData.data);
      this.setState({ recipeData: recipeData.data });
    } catch (err) {
      this.setState({ error: "error occured while fetching data" });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  onChange(e) {
    const value = e.target.value;
    let suggestions = [];
    if (value.trim().length > 0) {
      const regex = new RegExp(`^${value.trim()}`, "i");
      suggestions = this.items.sort().filter((v) => regex.test(v));
      suggestions.map((val, index) => {
        let endIndex = value.length;
        suggestions[index] =
          `<span class='highlight'>${value}</span>` + val.slice(endIndex);
      });
    }
    this.setState(() => ({ suggestions, inputText: value }));
  }

  suggestionSelected(value) {
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
      </div>
    );
  }
}
