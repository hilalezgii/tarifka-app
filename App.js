import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Categories from './src/pages/Categories';
import Meals from './src/pages/Meals';
import Detail from './src/pages/Detail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
           screenOptions={{
            headerTitleStyle: {
              color: '#FEC04F',
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
      >
        <Stack.Screen name="Categories" component={Categories}/>
        <Stack.Screen name="Meals" component={Meals} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

