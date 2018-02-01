import React from 'react';
import Expo from 'expo';
import { Text, View, Image, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
var connect = require('react-redux').connect;

class Home extends React.Component {

  constructor(props) {
      super(props);
  }


  render() {

    return (

        <ImageBackground style={{flex: 1}} source={require("./assets/mountains.jpg")}>
          <View style={{justifyContent: 'center', flex:1 }}>
            <Button
              raised
              //icon={{name: 'room', size: 32}}
              buttonStyle={{backgroundColor: '#3498db'}}
              textStyle={{textAlign: 'center'}}
              title={`Info City`}
              onPress={() => this.props.navigation.navigate('City')}
            />
          </View>
        </ImageBackground>

    );
  }
}

module.exports = Home
