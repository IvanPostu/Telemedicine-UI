import { BackArrow } from '@/components/BackArrow/BackArrow'
import { CustomHeader } from '@/components/CustomHeader/CustomHeader'
import { DoctorCard } from '@/components/DoctorCard/DoctorCard'
import { ThreePoints } from '@/components/Icons/ThreePoints/ThreePoints'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import React, { Component, ReactElement } from 'react'
import { StyleSheet, Text, ScrollView, View, Dimensions } from 'react-native'
import p1 from '@/assets/p1.png'
import p2 from '@/assets/p2.png'
import p3 from '@/assets/p3.png'
import p4 from '@/assets/p4.png'
import p5 from '@/assets/p5.png'
import { BottomMenu } from '@/components/BotomMenu/BottomMenu'
import { GlobalStateType } from '@/store'
import { connect } from 'react-redux'

function mapStateToProps(state: GlobalStateType) {
  return {
    notifications: state.notificationsReducer.notifications,
  }
}

type DoctorListScreenPropType = {
  navigation: NavigationProp<ParamListBase>
} & ReturnType<typeof mapStateToProps>

class DoctorListScreenComponent extends Component<DoctorListScreenPropType> {
  constructor(props: DoctorListScreenPropType) {
    super(props)
  }

  render(): ReactElement {
    return (
      <View style={styles.container}>
        <View style={styles.childContainer}>
          <CustomHeader
            leftElement={<BackArrow onClick={() => this.props.navigation.goBack()} />}
            centerElement={<Text style={{ fontSize: 22, color: 'white' }}>Doctor List</Text>}
            rightElement={<ThreePoints onClick={() => console.log(1)} />}
          />
          <ScrollView showsVerticalScrollIndicator={false} style={styles.cardsContainer}>
            <DoctorCard
              address="st. Bronxlyn 212"
              doctorName="Dudung Sokmati"
              doctorType="Eye specialist"
              doctorPhoto={p1}
              likes="4.9"
            />
            <DoctorCard
              address="st. Bronxlyn 212"
              doctorName="Nunung Brandon"
              doctorType="Eye specialist"
              doctorPhoto={p2}
              likes="4.2"
            />
            <DoctorCard
              address="st. Bronxlyn 212"
              doctorName="Udin Batakooran"
              doctorType="Eye specialist"
              doctorPhoto={p3}
              likes="3.9"
            />
            <DoctorCard
              address="st. Bronxlyn 212"
              doctorName="Cucup Joentravo"
              doctorType="Eye specialist"
              doctorPhoto={p4}
              likes="3.1"
            />
            <DoctorCard
              address="st. Bronxlyn 212"
              doctorName="Diding Sulidinger"
              doctorType="Eye specialist"
              doctorPhoto={p5}
              likes="2.1"
            />
            <DoctorCard
              address="st. Bronxlyn 212"
              doctorName="Dudung Sokmati"
              doctorType="Eye specialist"
              doctorPhoto={p1}
              likes="4.9"
            />
            <DoctorCard
              address="st. Bronxlyn 212"
              doctorName="Nunung Brandon"
              doctorType="Eye specialist"
              doctorPhoto={p2}
              likes="4.2"
            />
            <DoctorCard
              address="st. Bronxlyn 212"
              doctorName="Udin Batakooran"
              doctorType="Eye specialist"
              doctorPhoto={p3}
              likes="3.9"
            />
            <DoctorCard
              address="st. Bronxlyn 212"
              doctorName="Cucup Joentravo"
              doctorType="Eye specialist"
              doctorPhoto={p4}
              likes="3.1"
            />
            <DoctorCard
              address="st. Bronxlyn 212"
              doctorName="Diding Sulidinger"
              doctorType="Eye specialist"
              doctorPhoto={p5}
              likes="2.1"
            />
          </ScrollView>
        </View>
        <BottomMenu
          navigation={this.props.navigation}
          selected={'Home'}
          notificationsIsPresent={this.props.notifications.length > 0}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(240, 240, 240)',
  },
  childContainer: {
    width: '100%',
    height: Dimensions.get('screen').height - 50,
  },
  cardsContainer: {
    height: '100%',
    marginHorizontal: 15,
  },
})

export const DoctorListScreen = connect(mapStateToProps)(DoctorListScreenComponent)
