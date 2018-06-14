import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from './Weather'

const API_KEY = "25224ba200cc39ce9c9dce535464aa04";

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    temp: null,
    type: null
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(p => {
      this._getWeather(p.coords.latitude, p.coords.longitude)
    }),
    error => {
      this.setState({
        error: error
      })
    }
  }
  _getWeather = (lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        temp: json.main.temp,
        type: json.weather[0].main,
        isLoaded: true
      })
    })
  }
  render() {
    const { isLoaded, error, temp, type } = this.state
    return <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {isLoaded ? <Weather temp={(9 / 5) * (temp - 273) + 32} type={type} /> : <View style={styles.loading}>
            <Text style={styles.loadingText}>JPak's React Weather App</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>}
      </View>;
      
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  loading: {
    flex: 1,
    backgroundColor: "#2A363B",
    justifyContent: "center",
    alignItems: "center"
  },
  loadingText: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 100,
    paddingHorizontal: 30
  },
  errorText: {
    color: '#F67280'
  }
});
