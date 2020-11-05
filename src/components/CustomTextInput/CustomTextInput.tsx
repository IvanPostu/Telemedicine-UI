import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

type CustomTextInputPropType = {
  placeholder?: string
}

export const CustomTextInput = (props: CustomTextInputPropType) => {
  const placeholder = props.placeholder || ''

  return <TextInput placeholder={placeholder} style={styles.container} />
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'rgb(190, 190, 190)',
    borderRadius: 6,
    paddingHorizontal: 20,
  },
})
