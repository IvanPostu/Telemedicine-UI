import React, { ReactElement } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BottomMenu = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
  },
})
