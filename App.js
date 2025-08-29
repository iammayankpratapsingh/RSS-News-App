import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsList from './screens/NewsList';
import NewsDetail from './screens/NewsDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="NewsList" component={NewsList} options={{ title: 'Times of India News' }} />
        <Stack.Screen name="NewsDetail" component={NewsDetail} options={{ title: 'Article' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}