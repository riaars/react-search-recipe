import React, {Component} from 'react';
import Recipe from './components/Recipe';
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class App extends Component {
  state = {
    recipes: [],
    url:
      'https://www.food2fork.com/api/search?key=dfefb26e6baf70f86eb1c032f7c57c53',
  };

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({
        recipe: jsonData.recipes,
      });
    } catch (err) {
      console.log(err);
    }
  }
  componentDidMount() {
    this.getRecipes();
  }
  render() {
    console.log(this.state.recipes);
    return (
      <React.Fragment>
        <h1>Hello From App</h1>
        <RecipeList />
        <RecipeDetails />
      </React.Fragment>
    );
  }
}

export default App;
