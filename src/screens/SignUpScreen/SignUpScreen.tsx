import { rootGreenColor } from '@/constants'
import React, { Component, ReactElement } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { BackArrow } from '@/components/BackArrow/BackArrow'
import { NavigationProp, ParamListBase } from '@react-navigation/native'

const Header = (props: SignUpScreenPropType) => {
  return (
    <View style={styles.header}>
      <View>
        <BackArrow
          onClick={() => {
            props.navigation.goBack()
          }}
        />
      </View>
      <View style={{ left: '50%', position: 'absolute', transform: [{ translateX: -40 }] }}>
        <Text style={{ fontSize: 22, color: 'white' }}>Register</Text>
      </View>
    </View>
  )
}

type SignUpScreenPropType = {
  navigation: NavigationProp<ParamListBase>
}

export default class SignUpScreen extends Component<SignUpScreenPropType> {
  constructor(props: SignUpScreenPropType) {
    super(props)
  }

  render(): ReactElement {
    return (
      <ScrollView style={styles.container}>
        <Header navigation={this.props.navigation} />
        <View>
          <Text>Register qef qe</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: rootGreenColor,
    justifyContent: 'center',
  },
})
