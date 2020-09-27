import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Button, Alert} from 'react-native'

class ReactCourse extends Component {

  welcome = () => { Alert.alert('Welcome to React Native!') }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Image source={require('./assets/react-native-logo.png')} style={styles.logo}/>          
        </View>

        <View style={[styles.body, styles.bold]}>
          <Text></Text>
          <Button title="Welcome" onPress={this.welcome}/>
        </View>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },

  header: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center'
  },

  body: {
    flex: 1,
    alignItems: 'center'
  },

  bold: {
    fontWeight: 'bold'
  },

  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  }
})

export default ReactCourse