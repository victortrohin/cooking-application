import { Alert, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import { uid } from 'uid';
import { database } from '../firebase';


const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                navigation.replace("TabBottomNavigator");
            }
        })

        return unsubscribe;
    }, [])

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                writeUserData(email);
                console.log(user.email);
            })
            .catch(error => console.log(error.message));
    }

    function writeUserData(email) {
        const uuid = uid();
        database.ref('users/' + uuid).set({
          email: email,
        });
      }


    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with : ', user.email);
            })
            .catch(error => console.log(error.message));
    }

  return (
        <KeyboardAvoidingView
            style={styles.container}
        >
            <Image 
                source={require('../assets/logo.png')}
                style={styles.image}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Username'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                >

                </TextInput>

                <TextInput
                    placeholder='Password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                    style={styles.input}

                >

                </TextInput>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    secureTextEntry
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    image:{
        width: 150,
        height: 150,
        marginBottom: 50,
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer:{
        width: '80%'

    },
    input:{
        backgroundColor: 'white',
        marginTop: 5,
        padding: 10,
        borderRadius: 5,
    },
    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button:{
        backgroundColor: 'orange',
        width: '100%',
        padding:15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText:{
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutline:{
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: 'orange',
        borderWidth: 2,
    },
    buttonOutlineText:{
        color: 'orange',
        fontWeight: '700',
        fontSize: 16,
    }
})