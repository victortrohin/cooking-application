import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useState, useRef } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { uid } from 'uid';
import { database } from '../firebase';



const UploadPhotoScreen = () => {

    let uuid;

{/**Referentials to clear the TextInput box */}
    const refName = useRef();
    const refDescription = useRef();
    const refImage = useRef();

    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handlePressNext = () => {
        if((name != '') && (description != '') && (image != '')){
            logData();
            writeRecipePostData();
            deleteDataFromStates();
            navigation.navigate('AddStepsScreen',{
                paramKey: uuid,
            });
            clearTextInput();
        }else{
            callAlert();
        }
        // navigation.navigate('AddStepsScreen',{
        //     paramKey: uuid,
        // });
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
        console.log(name);
        console.log(description);
        console.log(image);
    }

    function clearTextInput(){
        refName.current.clear();
        refDescription.current.clear();
        refImage.current.clear();
    }

    function deleteDataFromStates(){
        setName(''); 
        setDescription('');
        setImage('');
    }

    function writeRecipePostData() {
        uuid = uid();
        database.ref('recipe_posts/' + uuid).set({
          name: name,
          description: description,
          imageUrl: image,
        });
      }

  return (

    <KeyboardAvoidingView
        style={styles.container}    
    >
        <View>
            <Text style = {[styles.text, {marginTop: 60,}]}>Name</Text>
            <TextInput 
                ref={refName}
                style = {styles.textInput}
                placeholder='Pui la cuptor'
                onChangeText={text => setName(text)}
                name={name}
            >

            </TextInput>
        </View>

        <View>
            <Text style = {styles.text}>Short Description</Text>
            <TextInput
                ref={refDescription}
                style = {styles.textInput}
                placeholder = 'Este o reteta foarte de delicioasa care se prepara foarte repede si este perfecta pentru masa de craciun.'
                multiline = {true}
                onChangeText={text => setDescription(text)}
                description={description}
             >

             </TextInput>
        </View>

        <View>
            <Text style = {styles.text}>Image URL</Text>
            <TextInput 
                ref={refImage}
                style = {styles.textInput}
                placeholder='https://images.com/image.png'
                onChangeText={text => setImage(text)}
                image={image}
            >

            </TextInput>
        </View>

        <View style={styles.buttonView}>
            <TouchableOpacity
                 style = {styles.nextButton}
                 onPress = {handlePressNext}
            >
                <Text style={styles.nextText}>Next</Text>
                <MaterialCommunityIcons name='arrow-right-thin' size={28} color='white'/>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default UploadPhotoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    buttonView:{
        alignSelf: 'flex-end',
        width: '30%',
        marginTop: 50,
        marginRight: 30,

    },
    nextButton:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 10,
    },
    nextText:{
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        paddingLeft: 15,
        paddingRight: 5,
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