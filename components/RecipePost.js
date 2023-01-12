import { View, Text, TouchableOpacity, Image, StyleSheet, Alert} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


const RecipePost = ({
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
        <View>
            <TouchableOpacity>
                <View style={styles.author}>
                    <MaterialCommunityIcons name='account-circle' size={35} color='#1f80ad'/>
                    <Text style={styles.authorText}>{author}</Text>
                </View>
            </TouchableOpacity>
        </View>

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
            <View style={{flexDirection:'row'}}>
                <View style = {styles.ratingAndName}>
                    <Text style={styles.nameRecipe}>{name}</Text>
                    <View style = {styles.rating}>
                        <MaterialCommunityIcons name='star' opacity={0.5} size={22} color='#5ab071'/>
                        <Text style = {{fontSize: 14, fontWeight: '700', paddingHorizontal: 5, color: 'gray'}}>{rating} • Excellent</Text>
                    </View>
                </View>
                <View >
                    <TouchableOpacity style={styles.feedback}>
                        <MaterialCommunityIcons name='comment-edit' size={28} color = 'orange'/>
                        <Text style = {{paddingLeft: 5, }}>Feedback</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
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
    author:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 2,

    },
    authorText:{
        color: '#5c6f7a',
        paddingHorizontal: 10,
        fontSize: 18,
        fontWeight: '600',
    },
    rating:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameRecipe: {
        fontWeight: '500',
        fontSize: 16,
    },
    ratingAndName:{
        flex: 1,
        padding: 5,
        paddingLeft: 10,
    }, 
    feedback:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginRight: 15,
        margin: 5,
        borderRadius: 5,
        borderWidth: 1,

    }
})

export default RecipePost;