import React, {Component} from 'react';
import Recipe from './components/Recipe';
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class App extends Component {
  state = {
    recipes: recipes,
    url:
      'https://www.food2fork.com/api/search?key=dfefb26e6baf70f86eb1c032f7c57c53',
  };

  // async componentDidMount() {
  //   try {
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();
  //     this.setState({
  //       recipes: jsonData.recipes,
  //     });
  //     console.log(jsonData);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  render() {
    // console.log(this.state.recipes);
    return (
      <React.Fragment>
        {/* <RecipeList recipes={this.state.recipes} /> */}
        <RecipeDetails id={this.state.details_id} />
      </React.Fragment>
    );
  }
}

export default App;
