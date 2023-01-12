import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import FullRecipeComponent from '../components/FullRecipeComponent'

const ViewRecipeDetailsScreen = ({route}) => {
  return (
    <ScrollView>
        <FullRecipeComponent
            id={route.params.id.id}
            name={route.params.name.name}
            ingredients={route.params.ingredients.ingredients}
            description={route.params.shorDescription.shorDescription}
            steps={route.params.steps.steps}
            imageUrl={route.params?.imageUrl.imgUrl}
        />
    </ScrollView>
  )
}

export default ViewRecipeDetailsScreen

const styles = StyleSheet.create({})