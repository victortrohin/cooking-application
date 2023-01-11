import { StyleSheet, Text, View, Image,  } from 'react-native'
import React from 'react'
import IngredientsComponent from './IngredientsComponent'
import StepComponent from './StepComponent'

const FullRecipeComponent = ({
    id,
    name,
    description,
    ingredients,
    steps,
    imageUrl,

}) => {
    return (
        <View>

            <Text style = {styles.nameRecipe}> {name}</Text>

            <Text style = {styles.description}>
                {description}
            </Text>

            <Image
                source={{
                    uri: imageUrl,
                }}
                style={styles.image}
            />

            <IngredientsComponent
                ingredients = {ingredients}
            />    
            <StepComponent 
                steps = {steps}
            /> 
        </View>
  )
}

export default FullRecipeComponent

const styles = StyleSheet.create({
    image:{
        width: "95%",
        height: 220,
        alignSelf: 'center',
        borderRadius: 10,
        margin: 5,
    },
    nameRecipe: {
        fontWeight: '500',
        fontSize: 20,
        margin: 7,
        paddingTop: 10,
    },
    description:{
        fontWeight: '400',
        fontSize: 14,
        margin: 7,
        color: 'gray',
        paddingLeft: 8,
    }
})