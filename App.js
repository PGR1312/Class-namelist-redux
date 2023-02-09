import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "react-redux";
import store from "./components/Store";

import AddScreen from "./screen/AddScreen";
import ListScreen from './screen/ListScreen';

class App extends Component{
  render(){
    return(
        <Provider store={store}>
            <Appcontainer/>
        </Provider>
         
    )
  }
}

const stack=createStackNavigator({
  'AddScreen':AddScreen,
  'ListScreen':ListScreen,
});
const Appcontainer=createAppContainer(stack);

export default App;