import React, { ReactElement, FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { routes } from '@/routes/routes'
import { Header } from '@/components/header'
import { ReduxWrapper } from '@/store/root/ReduxWrapper'

const Stack = createStackNavigator()

const App: FC = (): ReactElement => {
  return (
    <ReduxWrapper>
      <NavigationContainer>
        <Stack.Navigator>
          {Object.keys(routes).map((key) => (
            <Stack.Screen
              key={key}
              name={routes[key].routeName}
              component={routes[key].component}
              options={({ navigation }) => ({
                // eslint-disable-next-line react/display-name
                header: (props) => <Header {...props} />,
                animationEnabled: true,
                navigation,
              })}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxWrapper>
  )
}

export default App
