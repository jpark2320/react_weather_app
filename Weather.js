import React, {Component} from 'react'
import {StyleSheet, View, Text, StatusBar} from 'react-native'
import {LinearGradient} from 'expo'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import PropTypes from 'prop-types'

const WeatherTypes = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "It's raining",
    subtitle: "For more info, look outside",
    icon: "weather-rainy"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "It's sunny",
    subtitle: "Get your move ass out right now",
    icon: "weather-sunny"
  },
  Thunderstorm: {
    colors: ["#00ECBC", "#007ADF"],
    title: "It's thunderstorming",
    subtitle: "Stay home, it's dangerous to be ourside",
    icon: "weather-lightning"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "It's cloudy",
    subtitle: "I know, that weather is so blue",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "It's snowing",
    subtitle: "Do you want to build a snow man? Ok bye..",
    icon: "weather-snowy"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "It's drizzling",
    subtitle: "It's a good day to take a nap while hearing white noise",
    icon: "weather-hail"
  },
  Haze: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "It's hazing",
    subtitle: "I don't even know what is haze",
    icon: "weather-fog"
  },
  Mist: {
    colors: ["#D7D2CC", "#304352"],
    title: "It's misting",
    subtitle: "What the heck, Mist!",
    icon: "weather-fog"
  }
};

function Weather({ type, temp }) {
  return <LinearGradient colors={["#89F7FE", "#66A6FF"]} style={styles.container}>
      <View style={styles.top}>
        <StatusBar barStyle="light-content" />
        <MaterialCommunityIcons color="white" size={130} name={WeatherTypes[type].icon} />
        <Text style={styles.temp}>{temp}°F</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.title}>{WeatherTypes[type].title}</Text>
      <Text style={styles.body}>{WeatherTypes[type].subtitle}</Text>
      </View>
    </LinearGradient>;
}

Weather.propTypes = {
  type: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired
}

export default Weather

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  bottom: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  temp: {
    color: "white",
    fontSize: 20
  },
  title: {
    color: "#fff",
    fontSize: 25,
    marginBottom: 25
  },
  body: {
    color: "#fff",
    fontSize: 15,
  }
});
