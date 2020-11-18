import { rootGreenColor } from '@/constants'
import React, { ReactElement } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { DoctorCardA } from '@/components/DoctorCardA/DoctorCardA'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import { routeNames } from '@/routes/routeNames'

type DoctorInfoPropType = {
  doctorName: string
  doctorType: string
  doctorNote: string
  doctorId: string
  navigation: NavigationProp<ParamListBase>
}

export const DoctorInfo = (props: DoctorInfoPropType): ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doctor</Text>
      <DoctorCardA
        onClick={() =>
          props.navigation.navigate(routeNames.DoctorDetailsScreen, {
            doctorId: props.doctorId,
          })
        }
        doctorName={props.doctorName}
        doctorNote={props.doctorNote}
        doctorType={props.doctorType}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: '700',
    marginTop: 30,
    fontSize: 18,
    color: rootGreenColor,
  },
})
