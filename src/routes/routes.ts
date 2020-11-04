import { ComponentClass, FunctionComponent } from 'react'

import HomeScreen from '@/screens/Home/HomeScreen'
import RandomScreen from '@/screens/Random/RandomScreen'
import WebViewScreen from '@/screens/WebView/WebViewScreen'
import { OptionsScreen } from '@/screens/Options/OptionsScreen'
import WelcomeScreen from '@/screens/WelcomeScreen/WelcomeScreen'

import { routeNames } from './routeNames'

type CustomRouteType = {
  [prop: string]: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: ComponentClass<any, any> | FunctionComponent<any>
    isHeaderButton: boolean
    routeName: string
    headerButtonName?: string
  }
}

export const routes: CustomRouteType = {
  WelcomeScreen: {
    component: WelcomeScreen,
    isHeaderButton: false,
    routeName: routeNames.WelcomeScreen,
  },
}

export const initialRoute = routes['HomeScreen'] || routes[Object.keys(routes)[0]]
