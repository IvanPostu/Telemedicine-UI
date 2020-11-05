import { BackArrow } from '@/components/BackArrow/BackArrow'
import { CustomHeader } from '@/components/CustomHeader/CustomHeader'
import { ThreePoints } from '@/components/Icons/ThreePoints/ThreePoints'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import React, { Component, ReactElement } from 'react'
import { StyleSheet, Text, View } from 'react-native'

type DoctorListScreenPropType = {
  navigation: NavigationProp<ParamListBase>
}

export class DoctorListScreen extends Component<DoctorListScreenPropType> {
  constructor(props: DoctorListScreenPropType) {
    super(props)
  }

  render(): ReactElement {
    return (
      <View style={styles.container}>
        <CustomHeader
          leftElement={<BackArrow onClick={() => this.props.navigation.goBack()} />}
          centerElement={<Text style={{ fontSize: 22, color: 'white' }}>Doctor List</Text>}
          rightElement={<ThreePoints onClick={() => {}} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
})
