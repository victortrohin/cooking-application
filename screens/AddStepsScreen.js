import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useNavigationContainerRef } from '@react-navigation/native';



const AddStepsScreen = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View>
            <Text>Add steps</Text>
            <TouchableOpacity
                 style = {styles.nextButton}
                 onPress = {() => navigation.navigate('OverviewScreen')}
            >
                <Text style={styles.nextText}>Next</Text>
                <MaterialCommunityIcons name='arrow-right-thin' size={28} color='white'/>
            </TouchableOpacity>
            <TouchableOpacity
                 style = {styles.nextButton}
                 onPress = {() => navigation.goBack()}
            >
                <MaterialCommunityIcons name='arrow-left-thin' size={28} color='white'/>
                <Text style={styles.nextText}>Cancel</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default AddStepsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    }
})