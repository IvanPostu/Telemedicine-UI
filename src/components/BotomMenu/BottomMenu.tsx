import React, { ReactElement } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { BottomMenuItem } from './BottomMenuItem'

export const BottomMenu = (): ReactElement => {
  return (
    <View style={styles.container}>
      <BottomMenuItem iconColor="green" type="Home" height={23} width={21} />
      <BottomMenuItem iconColor="grey" withRedPoint type="Notification" height={24} width={18} />

      {/* CENTER */}
      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.centerButton}>
          <Text style={{ color: 'white', fontSize: 38 }}>+</Text>
        </View>
      </TouchableOpacity>

      <BottomMenuItem iconColor="grey" type="Schedule" height={23} width={24} />
      <BottomMenuItem iconColor="grey" type="Profile" height={23} width={21} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  centerButton: {
    width: 60,
    height: 60,
    backgroundColor: 'rgb(7, 218, 95)',
    marginBottom: 25,
    borderRadius: 50,
    alignItems: 'center',
  },
})
