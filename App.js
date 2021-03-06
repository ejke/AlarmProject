import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'http://www.freewebs.com/opengatesfarmbedandbreakfast/alarmclock6am.png'
    };
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 18}}>Welcome to AlarmApp!</Text>
        <Text>This wakes you up in a new way.</Text>
        <Image source={pic} style={{width: 150, height: 180}}/>
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
