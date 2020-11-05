import { ButtonOne } from '@/components/ButtonOne/ButtonOne'
import React, { Component, ReactElement } from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native'
import { UserIcon } from '@/components/UserIcon/UserIcon'
import { LockIcon } from '@/components/LockIcon/LockIcon'

export default class LoginScreen extends Component {
  render(): ReactElement {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Telemedicine</Text>
        <View style={styles.inputsContainer}>
          <View>
            <UserIcon />
            <TextInput
              placeholderTextColor="#fff"
              placeholder="Email Addres"
              style={styles.textInput}
            />
          </View>
          <View>
            <LockIcon />

            <TextInput
              placeholderTextColor="#fff"
              placeholder="Password"
              style={styles.textInput}
            />
          </View>
          <ButtonOne
            style={styles.buttonStyles}
            bgColor="white"
            borderColor="white"
            onClick={() => {}}
            fullWidth
          >
            Login
          </ButtonOne>
          <ButtonOne
            style={styles.buttonStyles}
            bgColor="transparent"
            borderColor="transparent"
            textColor="white"
            onClick={() => {}}
            fullWidth
          >
            SIGNUP
          </ButtonOne>
        </View>
      </View>
    )
  }
}

const TOP_MARGIN = 0.16

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(8, 218, 95)',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  logo: {
    top: Dimensions.get('screen').height * (TOP_MARGIN + 0.0),
    fontSize: 34,
    color: 'white',
    position: 'absolute',
  },
  inputsContainer: {
    padding: Dimensions.get('screen').width * 0.05,
    width: '100%',
    // backgroundColor: 'red',
    top: '37%',
    position: 'absolute',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'rgb(235, 235, 235)',
    borderRadius: 6,
    paddingHorizontal: 45,
    paddingVertical: 12,
    marginVertical: 10,
    color: 'white',
  },
  buttonStyles: {
    marginVertical: 35,
  },
})
