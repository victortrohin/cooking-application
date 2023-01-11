import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const IngredientsComponent = ({
    ingredients,
}) => {
  return (
    <View style={styles.container}>
      <Text style = {styles.text}>{ingredients}</Text>
    </View>
  )
}

export default IngredientsComponent

const styles = StyleSheet.create({
    container:{
        padding: 10,
        margin: 7,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'orange',

    },
    text: {
        textAlign: 'left',
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'italic',
    }
})