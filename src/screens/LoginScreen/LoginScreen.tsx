import { ButtonOne } from '@/components/ButtonOne/ButtonOne'
import React, { Component, ReactElement } from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput, Alert } from 'react-native'
import { UserIcon } from '@/components/UserIcon/UserIcon'
import { LockIcon } from '@/components/LockIcon/LockIcon'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import { routeNames } from '@/routes/routeNames'

type LoginScreenPropType = {
  navigation: NavigationProp<ParamListBase>
}

type LoginScreenStateType = {
  email: string
  password: string
}

const DEFAULT_EMAIL_HARDCODE = 'user'
const DEFAULT_PASSWORD_HARDCODE = 'user'

export default class LoginScreen extends Component<LoginScreenPropType, LoginScreenStateType> {
  constructor(props: LoginScreenPropType) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(): void {
    const { email, password } = this.state
    if (email === DEFAULT_EMAIL_HARDCODE && password === DEFAULT_PASSWORD_HARDCODE) {
      this.props.navigation.navigate(routeNames.DoctorListScreen)
    } else {
      Alert.alert(
        'Login with error',
        `Try to write email: '${DEFAULT_EMAIL_HARDCODE}' and password '${DEFAULT_PASSWORD_HARDCODE}'.`,
      )
    }
  }

  render(): ReactElement {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Telemedicine</Text>
        <View style={styles.inputsContainer}>
          <View>
            <UserIcon />
            <TextInput
              onChangeText={(text: string) => this.setState({ email: text })}
              placeholderTextColor="#fff"
              placeholder="Email Addres"
              style={styles.textInput}
            />
          </View>
          <View>
            <LockIcon />

            <TextInput
              secureTextEntry
              onChangeText={(text: string) => this.setState({ password: text })}
              placeholderTextColor="#fff"
              placeholder="Password"
              style={styles.textInput}
            />
          </View>
          <ButtonOne
            style={styles.buttonStyles}
            bgColor="white"
            borderColor="white"
            onClick={this.onSubmit}
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
