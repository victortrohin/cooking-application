import { View, Text, TouchableOpacity, Image, StyleSheet, Alert} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


const MyPostComponent = ({
    id,
    name,
    author,
    shorDescription,
    imgUrl,
    ingredients,
    steps,
    rating,
}) => {

    const navigation = useNavigation();

    const handleImageClick = () => {
        navigation.navigate('ViewDetails',{
            id: {id},
            name: {name},
            shorDescription: {shorDescription},
            imageUrl: {imgUrl},
            ingredients: {ingredients},
            steps: {steps},
        });
    }

  return (

    <View  style = {[styles.container, styles.shadow]}>
        <Text style={styles.nameRecipe}>{name}</Text>

        <View>
            <TouchableOpacity
                onPress={handleImageClick}
            >
                <Image
                    source={{
                        uri: imgUrl,
                    }}
                    style={styles.image}
                />
            </TouchableOpacity>    
            
            </View>
        <Text style={styles.description}>{shorDescription}</Text>           
    </View>

  )
}

const styles = StyleSheet.create({
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
    container:{
        width: '95%',
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 10,
    },
    image:{
        width: "95%",
        height: 220,
        alignSelf: 'center',
        borderRadius: 10,
        margin: 5,
    },
    nameRecipe: {
        fontWeight: '500',
        fontSize: 16,
        marginLeft: 10,
        padding: 5,
    },
    description: {
        fontSize: 14, 
        fontWeight: '700', 
        paddingHorizontal: 5, 
        color: 'gray'
    }
})

export default MyPostComponent;