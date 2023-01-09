import { SafeAreaView, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import CreateRecipeScreen from './screens/CreateRecipeScreen';
import RecomandationScreen from './screens/RecomandationScreen';
import ProfileScreen from './screens/ProfileScreen';




const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


function TabBottomNavigator(){
  return(
    <Tab.Navigator
      initialRouteName='Home'
      
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ()=>(
            <MaterialCommunityIcons name="home" size={26} color='orange'/>
          ),
        }}  
      />
      <Tab.Screen 
        name="CreateRecipe" 
        component={CreateRecipeScreen} 
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ()=>(
            <MaterialCommunityIcons name="sticker-plus" size={26} color='orange'/>
          ),
        }}
      />
      <Tab.Screen 
        name="Recomandation" 
        component={RecomandationScreen} 
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ()=>(
            <MaterialCommunityIcons name="access-point" size={26} color='orange'/>
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ()=>(
            <MaterialCommunityIcons name="account" size={26} color='orange'/>
          ),
        }}
      />
    </Tab.Navigator>
  );

}

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, marginTop:20,}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen}/>
          <Stack.Screen 
            name="TabBottomNavigator" 
            component={TabBottomNavigator}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
  },
});
