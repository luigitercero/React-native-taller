import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import styles from  './Button.component.style'
export default class Button extends Component {
  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity
                    onPress={() => { this.props.onPress() }}>
          <Text style={styles.buttonText}> Press Me! </Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}


