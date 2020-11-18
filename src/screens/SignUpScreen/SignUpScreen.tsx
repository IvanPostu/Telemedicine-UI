import { rootGreenColor } from '@/constants'
import React, { Component, ReactElement } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import { UserAddPhoto } from '@/components/UserAddPhoto'
import { CustomTextInput } from '@/components/CustomTextInput/CustomTextInput'
import { ButtonOne } from '@/components/ButtonOne/ButtonOne'
import { CustomHeader } from '@/components/CustomHeader/CustomHeader'
import { BackArrow } from '@/components/BackArrow/BackArrow'

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
        <CustomHeader
          leftElement={<BackArrow onClick={() => this.props.navigation.goBack()} />}
          centerElement={<Text style={{ fontSize: 22, color: 'white' }}>Register</Text>}
          rightElement={<View style={{ width: 30 }} />}
        />
        <View style={styles.addPhotos}>
          <UserAddPhoto />
        </View>
        <View style={styles.inputsContainer}>
          <Text style={styles.inputTitle}>Full Name</Text>
          <CustomTextInput placeholder="Your Full Name" />

          <Text style={styles.inputTitle}>Birthay</Text>
          <CustomTextInput placeholder="dd/mm/yy" />

          <Text style={styles.inputTitle}>Email</Text>
          <CustomTextInput placeholder="Your Email" />

          <Text style={styles.inputTitle}>Phone Number</Text>
          <CustomTextInput placeholder="Your Phone Number" />

          <Text style={styles.inputTitle}>Location/Adress</Text>
          <CustomTextInput placeholder="Your Location" />
          <View style={{ marginTop: 25 }} />
          <ButtonOne
            textColor="white"
            fullWidth
            bgColor={rootGreenColor}
            borderColor={rootGreenColor}
            onClick={() => console.log('Sign up next button press')}
          >
            Next
          </ButtonOne>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },

  addPhotos: {
    alignItems: 'center',
    margin: 25,
    marginTop: 45,
    marginBottom: 10,
  },
  inputsContainer: {
    padding: 20,
  },
  inputTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginVertical: 15,
    marginTop: 25,
    color: 'rgb(70, 70, 70)',
  },
})
