import { NavigationProp, ParamListBase } from '@react-navigation/native'
import React, { FC, ReactElement } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { routeNames } from '@/routes/routeNames'
import { rootGreenColor } from '@/constants'

type LogoScreenPropType = {
  navigation: NavigationProp<ParamListBase>
}

export const LogoScreen: FC<LogoScreenPropType> = (props: LogoScreenPropType): ReactElement => {
  React.useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate(routeNames.WelcomeScreen)
    }, 1500)
  }, [])

  const onClickHandler = React.useCallback(() => {
    props.navigation.navigate(routeNames.WelcomeScreen)
  }, [])

  return (
    <View style={styles.container} onTouchEnd={onClickHandler}>
      <Text style={styles.logo}>Telemedicine</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: rootGreenColor,
  },
  logo: {
    fontSize: 34,
    color: 'white',
  },
})
