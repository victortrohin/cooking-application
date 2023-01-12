import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import RecipePost from '../components/RecipePost'
import { auth, database } from '../firebase'
import StepComponent from '../components/StepComponent'
import IngredientsComponent from '../components/IngredientsComponent'
import { useNavigation } from '@react-navigation/native'
import FullRecipeComponent from '../components/FullRecipeComponent'

const OverviewScreen = ({route}) => {

    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    // const [name, setName] = useState('');
    
    
    const navigation = useNavigation();

    useEffect(() => {
        //Runs on every render
        readDataFromDB();
    });
    

    function readDataFromDB(){
        database.ref('recipe_posts/' + route.params.paramKey)
                .on('value', (snapshot) =>{
                    setName(snapshot.val().name);
                    setDescription(snapshot.val().description);
                    setImage(snapshot.val().imageUrl);
                    setIngredients(snapshot.val().ingredient);
                    setSteps(snapshot.val().steps);
                })
    }

    function writeEmail() {
        database.ref('recipe_posts/' + route.params.paramKey).update({
            email: auth.currentUser?.email,
        });
      }

    const handlePressConfirmButton = () => {
        writeEmail();
        navigation.replace("TabBottomNavigator");
    }
    const handleCancelButton = () => {
        deleteRecipeData();
        navigation.goBack();
    }

    function deleteRecipeData() {
        database.ref('recipe_posts/' + route.params.paramKey + '/ingredient').remove();
    }  


  return (
<ScrollView>
    <FullRecipeComponent
        id = {route.params.paramKey}
        name = {name}
        description = {description}
        imageUrl = {image}
        steps = {steps}
        ingredients = {ingredients}
    />

    <View style = {styles.buttons}>
        <TouchableOpacity
            style = {[styles.nextButton, {backgroundColor: 'gray'}]}
            onPress = {handleCancelButton}
        >
        <Text style={styles.nextText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style = {[styles.nextButton]}
            onPress = {handlePressConfirmButton}
        >
        <Text style={styles.nextText}>Confirm</Text>
        </TouchableOpacity>

    </View>

</ScrollView>


  )
}

export default OverviewScreen

const styles = StyleSheet.create({
    nextButton:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 10,
        margin: 7,
    },
    nextText:{
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        paddingLeft: 15,
        paddingRight: 5,
    },
    buttons:{
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 10,
    }
})