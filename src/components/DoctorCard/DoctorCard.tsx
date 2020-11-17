import React, { FC, ReactElement } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import img1 from '@/assets/chiochia1.png'
import startImg from '@/assets/star.png'
import location from '@/assets/location.png'

type DoctorCardPropType = unknown

export const DoctorCard: FC<DoctorCardPropType> = (): ReactElement => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.container}>
        <Image style={styles.img} source={img1} />
        <View style={styles.content}>
          <View style={styles.line1}>
            <Text style={styles.medicName}>Dudung Sokmati</Text>
            <Image style={{ width: 20, height: 20, marginLeft: 15 }} source={startImg} />
            <Text style={{ marginLeft: 5, color: 'grey' }}>4.7</Text>
          </View>
          <View style={styles.line2}>
            <Text style={{ fontStyle: 'italic', color: 'rgb(8, 218, 95)', fontSize: 15 }}>
              Eye Specialist
            </Text>
          </View>
          <View style={styles.line3}>
            <Image style={{ width: 20, height: 25 }} source={location} />
            <Text style={{ marginLeft: 5, color: 'grey' }}>St. Bronxlyn 212</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const IMAGE_SIZE = 70

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    borderRadius: 3,
    display: 'flex',
    flexDirection: 'row',
  },
  img: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  content: {
    width: 200,
    height: 70,
    margin: 20,
    // backgroundColor: 'red',
  },
  line1: {
    // backgroundColor: 'yellow',
    width: '100%',
    height: 25,
    alignItems: 'center',
    flexDirection: 'row',
  },
  medicName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  line2: {
    width: '100%',
    height: 25,
    alignItems: 'center',
    flexDirection: 'row',
  },
  line3: {
    // backgroundColor: 'yellow',
    width: '100%',
    height: 25,
    alignItems: 'center',
    flexDirection: 'row',
  },
})
