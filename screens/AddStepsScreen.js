import { StyleSheet, Text, View, TouchableOpacity,TextInput, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useNavigationContainerRef } from '@react-navigation/native';
import { database } from '../firebase';

const AddIngredients = ({route}) => {

    const navigation = useNavigation();

    const refSteps = useRef();
    
    const [stepText, setStepText] = useState("");

    const placeholderText = "Step 1 \nDescribe what should be done in step 1\n"
    + "Step 2 \nDescribe what should be done in step 2\n" 
    + "Step 3 \nDescribe what should be done in step 3\n"
    + "Step 4 \nDescribe what should be done in step 4\n";

    const handlePressNext = () => {
        if((stepText != '')){
            logData();
            writeRecipePostData();
            deleteDataFromStates();
            navigation.navigate('AddIngredients',{
                paramKey: route.params.paramKey,
            });
            clearTextInput();
        }else{
            callAlert();
        }
    }

    const callAlert = () => {
        Alert.alert(
            "Error",
            "One of the fields is empty.",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    }

    function logData(){
        console.log('In UploadPhotoScreen: ');
        console.log(stepText);
    }

    function clearTextInput(){
        refSteps.current.clear();
    }

    function deleteDataFromStates(){
        setStepText('');
    }

    function writeRecipePostData() {
        database.ref('recipe_posts/' + route.params.paramKey).update({
            steps: stepText,
        });
      }

  return (
    <View style={styles.container}>
        
        <View>
            <Text style = {[styles.text, {marginTop: 60,}]}>Add Steps</Text>
            <TextInput 
                ref={refSteps}
                multiline
                style = {styles.textInput}
                placeholder={placeholderText}
                onChangeText={text => setStepText(text)}
            >
            </TextInput>
        </View>

        <View style = {styles.buttonsContainer}>
        <TouchableOpacity
                 style = {styles.nextButton}
                 onPress = {() => navigation.goBack()}
            >
                <MaterialCommunityIcons name='arrow-left-thin' size={28} color='white'/>
                <Text style={styles.nextText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
                 style = {styles.nextButton}
                 onPress = {handlePressNext}
            >
                <Text style={styles.nextText}>Next</Text>
                <MaterialCommunityIcons name='arrow-right-thin' size={28} color='white'/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default AddIngredients

const styles = StyleSheet.create({
    plusButton:{
        padding: 3,
        alignSelf: 'center',
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    nextButton:{
        width: 120,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 10,
        marginHorizontal: 20,
    },
    nextText:{
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        paddingLeft: 15,
        paddingRight: 5,
    },
    buttonsContainer:{
        flexDirection: 'row',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 100,
    },    
    text: {
        margin: 10,
        padding: 3,
        fontWeight: '700',
    },
    textInput:{
        marginHorizontal: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'orange',
    }
})