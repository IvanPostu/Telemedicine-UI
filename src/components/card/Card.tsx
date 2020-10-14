import React, { ReactElement } from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'

import { CardButton } from './CardButton'

const CARD_DEFAULT_BF_COLOR = '#c9cedd'
const CARD_DEFAULT_TXT_COLOR = 'black'

type CardPropType = {
  bgColor?: string
  txtColor?: string
}

export function Card(props: CardPropType): ReactElement {
  const [img, setImg] = React.useState('')
  const bgColor = props.bgColor || CARD_DEFAULT_BF_COLOR
  const txtColor = props.txtColor || CARD_DEFAULT_TXT_COLOR

  React.useEffect(() => {
    fetch('https://picsum.photos/id/1001/320/240')
      .then((response) => response.blob())
      .then((image) => {
        const reader = new FileReader()
        reader.readAsDataURL(image)
        reader.onloadend = function () {
          const dataUrl = reader.result as string
          const base64 = dataUrl.split(',')[1]
          setImg(base64)
        }
      })
      .catch((err) => console.error(err))
      .catch((err) => console.error(err))
  }, [img])

  return (
    <View style={{ ...styles.container, ...{ backgroundColor: bgColor } }}>
      <Text style={{ ...styles.title, ...{ color: txtColor } }}>Title</Text>
      <Text style={{ ...styles.author, ...{ color: txtColor } }}>Author: aaa bbb</Text>
      <Image style={styles.image} source={{ uri: `data:image/gif;base64,${img}` }} />
      <CardButton title="Info" onClickHandler={() => {}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 5,
    paddingBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 17,
    fontStyle: 'italic',
  },
  image: {
    flex: 1,
    width: Dimensions.get('screen').width > 320 ? 320 : Dimensions.get('screen').width * 0.9,
    height: 240,
  },
})