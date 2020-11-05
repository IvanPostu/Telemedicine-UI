import { ComponentClass, FunctionComponent } from 'react'

import WelcomeScreen from '@/screens/WelcomeScreen/WelcomeScreen'
import { LogoScreen } from '@/screens/LogoScreen/LogoScreen'

import { routeNames } from './routeNames'
import SignUpScreen from '@/screens/SignUpScreen/SignUpScreen'
import LoginScreen from '@/screens/LoginScreen/LoginScreen'

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
  LogoScreen: {
    component: LogoScreen,
    isHeaderButton: false,
    routeName: routeNames.LogoScreen,
  },
  WelcomeScreen: {
    component: WelcomeScreen,
    isHeaderButton: false,
    routeName: routeNames.WelcomeScreen,
  },
  SignUpScreen: {
    component: SignUpScreen,
    isHeaderButton: false,
    routeName: routeNames.SignUpScreen,
  },
  LoginScreen: {
    component: LoginScreen,
    isHeaderButton: false,
    routeName: routeNames.LoginScreen,
  },
}

export const initialRoute = routes['HomeScreen'] || routes[Object.keys(routes)[0]]
