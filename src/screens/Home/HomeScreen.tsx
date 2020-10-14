import React, { Component, ReactElement, PropsWithChildren } from 'react'
import { ScrollView, Text } from 'react-native'
import { Animation1 } from '@/components/loadingAnimations'
import Cards from './Cards'

export default class HomeScreen extends Component<PropsWithChildren<unknown>> {
  render(): ReactElement {
    return (
      <ScrollView>
        <Cards />
      </ScrollView>
    )
  }
}
