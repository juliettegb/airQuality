import React from 'react';
import Expo from 'expo';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
var connect = require('react-redux').connect;

class City extends React.Component {

  constructor(props) {
      super(props);
      this.state = {co: null};
      this.state = {so2: null}
  }

  componentDidMount(){
    var obj = this;
    fetch('http://api.openweathermap.org/data/2.5/weather?APPID=74f8a59f951845ccaeea31a9b0c9ae11&lang=fr&units=metric&q=Paris')
    .then(function(response){
      //Convert to jSON
      return response.json();
    }) .then(function(data){
      console.log(data.coord.lon);
      console.log(data.coord.lat);
      var lon = Math.round(data.coord.lon);
      var lat = Math.round(data.coord.lat);

      fetch('http://api.openweathermap.org/pollution/v1/co/'+lat+','+lon+'/2017Z.json?appid=74f8a59f951845ccaeea31a9b0c9ae11')
      .then(function(response){
        return response.json()
      }) .then(function(result){
        console.log(result.data[0].value);
        //obj.setState remplace le this.setState => c'est un bind manuel qui préserve le "moi" au début de componentDidMount
        obj.setState({
          co: result.data[0].value
        })
        //envoi de result.data[O].value pour le récupérer dans le mapDispatchToProps comme param "data"
        obj.props.sendDataCO(result.data[0].value)

      });

      fetch('http://api.openweathermap.org/pollution/v1/so2/'+lat+','+lon+'/2017Z.json?appid=74f8a59f951845ccaeea31a9b0c9ae11')
      .then(function(response){
        return response.json()
      }) .then(function(result){
        console.log(result.data[0].value);
        obj.setState({
          so2: result.data[3].value
        })
      });

    });
  }

  render() {

    return (
      <View style = {{padding:25}}>
      <Card
        title='Paris Air pollution'
        image={require('./assets/eiffel-tower.jpg')}>
        <Text>
          Carbon Monoxide Data (CO): {this.state.co}
        </Text>
        <Text>
          Sulfur Dioxide Data (SO2): {this.state.so2}
        </Text>
        <Text>
          Nitrogen Dioxide Data (NO2): XXXX
        </Text>
        <Text style={{marginBottom: 10}}>
          Ozone Data (O3): XXXX
        </Text>
      </Card>
      </View>

    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendDataCO: function(data) {
        dispatch( {type: 'updateCO', valueCO: data} );
    }
  }
}

var CityRedux = connect(
    null,
    mapDispatchToProps
)(City);

module.exports = CityRedux
