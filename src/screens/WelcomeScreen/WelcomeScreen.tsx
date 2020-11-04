import { ButtonOne } from '@/components/ButtonOne/ButtonOne'
import React, { Component, ReactElement } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

export default class WelcomeScreen extends Component {
  render(): ReactElement {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, t. Ut enim ad veni am, quis
          nostrud exercitation ullamco
        </Text>
        <View style={styles.signUp}>
          <ButtonOne bgColor="white" borderColor="white" onClick={() => {}}>
            Sign Up
          </ButtonOne>
        </View>
        <View style={styles.login}>
          <ButtonOne bgColor="transparent" textColor="white" borderColor="white" onClick={() => {}}>
            Login
          </ButtonOne>
        </View>
        <View style={styles.urgent}>
          <ButtonOne
            bgColor="transparent"
            textColor="white"
            borderColor="transparent"
            onClick={() => {}}
          >
            URGENT
          </ButtonOne>
        </View>
      </View>
    )
  }
}

const TOP_MARGIN = 0.18

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(8, 218, 95)',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 35,
    top: Dimensions.get('screen').height * (TOP_MARGIN + 0.0),
  },
  text: {
    marginHorizontal: 75,
    fontSize: 16,
    color: 'white',
    top: Dimensions.get('screen').height * (TOP_MARGIN + 0.06),
    width: Dimensions.get('screen').width * 0.8,
    lineHeight: 27,
    textAlign: 'center',
  },
  signUp: {
    top: Dimensions.get('screen').height * (TOP_MARGIN + 0.2),
  },
  login: {
    top: Dimensions.get('screen').height * (TOP_MARGIN + 0.26),
  },
  urgent: {
    top: Dimensions.get('screen').height * (TOP_MARGIN + 0.35),
  },
})
