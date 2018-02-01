import React from 'react';
import Expo from 'expo';
import { Text, View } from 'react-native';
var connect = require('react-redux').connect;

class Datas extends React.Component {

  constructor() {
      super();
  }


  render() {

    return (

      <View style={{justifyContent: 'center', flex:1 }}>
      <Text>
        {this.props.valueCO}
      </Text>
      </View>

    );
  }
}

function mapStateToProps(state){
  return {valueCO: state.co}
}

var DatasRedux = connect(
  mapStateToProps,
  null
)(Datas);

module.exports = DatasRedux
