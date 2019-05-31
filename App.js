import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bananas from './Bananas'
import Button from './Button.component'
export default class App extends React.Component {
  state = { isShowingText: true };
  
  constructor(props) {
    super(props)
    this.state = {status: 'initial'}
    this.changeState = this.changeState.bind(this)
  }
  onTap = () => {
    alert("hola");
      this.setState({
        status: "final"
      });

  }
  changeState() {
    this.setState({
      status: 'logged'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! {this.state.status}</Text>
        <Bananas/>
        <Button onPress={() =>this.onTap()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
