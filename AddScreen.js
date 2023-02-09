import React, { Component, useState } from 'react';
import {StyleSheet, View,TextInput,Button} from 'react-native'
import {connect } from 'react-redux';
import { addFood } from'../components/Action';

class AddScreen extends Component{

//   const [food, setFood] = useState('')
//   const dispatch = useDispatch();
//   const submitFood = (food) => dispatch(addFood(food))
state={
    food:null,
}
  
render(){
  return (
    <View style={styles.container}>
      <TextInput
        value={this.state.food}
        placeholder='Name'
        style={styles.foodInput}
        onChangeText={(food) =>this.setState({food})}
      />
      <View style={styles.buttonrow}>
        <View style={styles.buttongap}>
            <Button title='ADD'
            style={styles.buttongap}
            onPress={() => this.props.add(this.state.food)}/>
        </View>
        <View style={styles.buttongap}>
            <Button title='List'
            style={styles.buttongap}
            onPress={() =>this.props.navigation.navigate('ListScreen')}/>
        </View>
      
      </View>
      
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 48,
    marginBottom: 30,
    marginTop: 16,
    color: 'white'
  },
  foodInput: {
    fontSize: 24,
    borderWidth: 1,
    padding: 12,
    width: '80%',
    borderRadius: 10,
  },
  buttonrow:{
        flexDirection:'row',
        },
    buttongap:{
        marginHorizontal:10,
        marginVertical:10,
        width:'20%',
        borderRadius:20,
        overflow:'hidden',
        },
});
const mapStatetoProps=(state)=>{
    return{
        foods:state.foodReducer.foodList
    }
    
}
const mapDispatchtoProps=(dispatch)=>{
    return{
       add:(food)=>dispatch(addFood(food))
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps) (AddScreen);
