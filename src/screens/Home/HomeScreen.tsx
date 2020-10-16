import React, { Component, PropsWithChildren, ReactElement } from 'react'
import { ScrollView } from 'react-native'
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
