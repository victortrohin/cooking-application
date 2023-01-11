import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StepComponent = ({
    steps,
}) => {
  return (
    <View style = {styles.container}>
      <Text style={styles.text}>{steps}</Text>
    </View>
  )
}

export default StepComponent

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