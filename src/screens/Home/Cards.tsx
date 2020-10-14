import { Card } from '@/components/card/Card'
import React, { Component, ReactElement } from 'react'
import { View, StyleSheet, Button, Dimensions } from 'react-native'

export default class Cards extends Component {
  render(): ReactElement {
    return (
      <View style={styles.container}>
        <Card bgColor="black" txtColor="white" />
        <Card bgColor="white" txtColor="black" />
        <View style={styles.buttonContainer}>
          <Button title="See more..." onPress={() => {}} />
        </View>
      </View>
    )
  }
}

const BUTTON_WIDTH = 120

const styles = StyleSheet.create({
  container: {},
  buttonContainer: {
    marginVertical: 10,
    width: BUTTON_WIDTH,
    left: Dimensions.get('screen').width * 0.5 - BUTTON_WIDTH / 2,
  },
})
