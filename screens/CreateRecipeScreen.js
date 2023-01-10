import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UploadPhotoScreen from './UploadPhotoScreen';
import AddIngredientsScreen from './AddIngredientsScreen';
import AddStepsScreen from './AddStepsScreen';
import OverviewScreen from './OverviewScreen';

const Stack = createStackNavigator();

const CreateRecipeScreen = () => {
  return (
        <Stack.Navigator>
            <Stack.Screen 
                name='UploadPhoto' 
                component={UploadPhotoScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name='AddIngredients' component={AddIngredientsScreen}/>
            <Stack.Screen name='AddStepsScreen' component={AddStepsScreen}/>
            <Stack.Screen name='OverviewScreen' component={OverviewScreen}/>
        </Stack.Navigator>
  )
}

export default CreateRecipeScreen

const styles = StyleSheet.create({})