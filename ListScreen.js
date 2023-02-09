import React, { Component } from 'react';
import {StyleSheet,FlatList, Text, View,Button, TouchableOpacity} from 'react-native';
// import { ListItem, Icon, Button } from 'react-native-elements'
import { connect } from 'react-redux';
import { deleteFood } from '../components/Action';
import {Feather} from '@expo/vector-icons'

class ListScreen extends Component{

//   const dispatch = useDispatch();
//   const deleteCurrent = (key) => dispatch(deleteFood(key))
//   const foods = useSelector(state => state.foodReducer.foodList)

    render(){
      // console.log(this.props.foods);
  return (
    <FlatList style={styles.listContainer}
      data={this.props.foods}
      keyExtractor={(item, index) => item.key.toString()}
      renderItem={
        ({item,index})=>
            <View style={styles.row}>
              <Text style={styles.title}>{item.name}</Text>
              <TouchableOpacity onPress={() =>this.props.delete(item.key)}>
                <Feather style = {styles.icon} name="trash" />
              </TouchableOpacity>
            </View>         
      }
    />
  );
}
}
const styles = StyleSheet.create({
  row:{
    flexDirection :'row',
    justifyContent :'space-between',
    borderColor : '#646363',
    borderBottomWidth:1,
    padding:25,
  },
  title : {
    fontSize : 18,
  },
  icon : {
    fontSize : 25,
  },
});

const mapStatetoProps=(state)=>{
    return{
        foods:state.foodReducer.foodList
    }
    
}
const mapDispatchtoProps=(dispatch)=>{
    return{
        delete:(key)=>dispatch(deleteFood(key))
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(ListScreen);