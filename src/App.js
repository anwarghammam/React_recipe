import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Liste_recettes from './components/Liste_recettes';
import Details_recette from './components/Details_recette';

import {recipes} from './tempList' ;

class App extends Component {
  state ={
    recipe :recipes ,
    url:"https://www.food2fork.com/api/search?key=dc96013276b3ac5bd5bc14701514b79b",
    details_id:35384,
    page_index:0,
  
  
  } ;



  /*how to bring data from an api */
 async getRecettes(){
    try {
    const data = await fetch(this.state.url);
    const jsondata = await data.json();
    this.setState({
      recipe:jsondata.recipes
    })}
    catch(error) {
      console.log(error);
    }
  }
  componentDidMount(){
    this.getRecettes();
  } 
  displaypage= (index) =>
  {
    switch(index){
      default:
      case 1:
      return(<Liste_recettes recipes={this.state.recipe} handleDetails={this.handleDetails} />)
      case 0 :
      return (<Details_recette id={this.state.details_id} handleIndex={this.handleIndex} />)
    }
  }
  handleIndex = index => {
    this.setState({
      page_index:index
    });
  };
  handleDetails = (index,id) => {
    this.setState({
      page_index:index ,
      details_id:id 
    });
  };


  render() {
    console.log(this.state.recipe);
    return (
      <div>
     {this.displaypage(this.state.page_index)} ;
  </div>
    );
  }
}

export default App;
