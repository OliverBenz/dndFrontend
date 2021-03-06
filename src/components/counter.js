'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';


// Counter Component
// Min and Max Values are not required
export class Counter extends Component{

  _callbackAdd = () => {
    if(!(this.props.max === 0 && this.props.min === 0)){
      if(this.props.value < this.props.max) this.props.callback(this.props.value + 1);
    }
    else{
      this.props.callback(this.props.value + 1);
    }

  }
  _callbackSub = () => {
    if(!(this.props.max === 0 && this.props.min === 0)){
      if(this.props.value > this.props.min) this.props.callback(this.props.value - 1);
    }
    else{
      this.props.callback(this.props.value - 1)
    }

    // if(this.props.min != undefined) if(this.props.value > this.props.min) this.props.callback(this.props.value - 1);
  }

  render() {
    return (
      <View style={{alignSelf: 'baseline'}}>
        <TextInput style={styles.text} onChange={(e) => this.props.onTitleChange(e.nativeEvent.text)} value={this.props.title} />
        <View style={styles.container}>
          <Text style={{fontSize: 18, paddingLeft: 15, paddingRight: 15}}>
            { this.props.value }
          </Text>

          <View style={{flexDirection: 'column'}}>
            <TouchableOpacity onPress={() => this._callbackAdd() } style={styles.button}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={ () => this._callbackSub() } style={styles.button}>
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export class CounterWM extends Counter{
  render(){
    return(
      <View style={{alignSelf: 'baseline'}}>
        <TextInput style={styles.text} onChange={(e) => this.props.onTitleChange(e.nativeEvent.text)} value={this.props.title} />
        <View style={styles.container}>
          <Text style={{fontSize: 18, paddingLeft: 15, paddingRight: 15}}>
            { this.props.value } / { this.props.max }
          </Text>

          <View style={{flexDirection: 'column'}}>
            <TouchableOpacity onPress={() => this._callbackAdd() } style={styles.button}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={ () => this._callbackSub() } style={styles.button}>
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'baseline'
  },
  text: {
    fontSize: 18,
    textAlign: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
    
    width: 40,
    height: 40,
  },
});