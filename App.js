import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Button, Alert, ImageBackground, TextInput, ScrollView} from 'react-native'

class ReactCourse extends Component {

  welcome = () => { Alert.alert('Welcome to React Native!') }

  render() {
    return (
      <ImageBackground source={require('./assets/background.jpg')} style={styles.container}>
 
          <View style={styles.header}>
            <Image source={require('./assets/react-native-logo.png')} style={styles.logo}/>
            <Button title="Welcome" onPress={this.welcome} color="#61DBFB"/>
                <TextInput placeholder="Username" placeholderTextColor="white" maxLength={8}
                  style={{borderWidth: 1, borderColor: 'white', padding: 5, marginTop: 10}} />        
          </View>

          <View style={{flex:1, alignItems: 'center'}}>
            <ScrollView>
              <Text> Hello Scroll View </Text>
              <Text> Hello Scroll View </Text>
              <Text> Hello Scroll View </Text>
            </ScrollView>
          </View>

      </ImageBackground>
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
    marginTop: 30,
    alignItems: 'center'
  },

  body: {
    flex: 0.5,
    alignItems: 'center',
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