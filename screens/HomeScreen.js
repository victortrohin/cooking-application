import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RecipePost from '../components/RecipePost'
import { auth } from '../firebase'

const HomeScreen = () => {
  return (
        <ScrollView style={styles.container}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <RecipePost
                id = {123}
                name = "Pui crocant delicios"
                author = {auth.currentUser?.email}
                shorDescription = "Aceasta este o reteta foarte gustoasa. Provine din Italia. Se asociaza cu vin alb."
                imgUrl = 'https://img.freepik.com/free-photo/crispy-fried-chicken-wooden-cutting-board_1150-20220.jpg?w=2000'
                ingredients = {['carne de gaina', 'ulei', 'sare', 'piper']}
                steps = {['Step 1', 'Step 2', 'Step 3']}
                rating = {4.5}
            />
            <RecipePost
                id = {123}
                name = "Sushi"
                author = {auth.currentUser?.email}
                shorDescription = "Aceasta este o reteta foarte gustoasa. Provine din Italia. Se asociaza cu vin alb."
                imgUrl = 'https://www.mashed.com/img/gallery/smoked-salmon-sushi-recipe/l-intro-1647888806.jpg'
                ingredients = {['carne de gaina', 'ulei', 'sare', 'piper']}
                steps = {['Step 1', 'Step 2', 'Step 3']}
                rating = {4.5}
            />
            <RecipePost
                id = {123}
                name = "Super Burger"
                author = {auth.currentUser?.email}
                shorDescription = "Aceasta este o reteta foarte gustoasa. Provine din Italia. Se asociaza cu vin alb."
                imgUrl = 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg'
                ingredients = {['carne de gaina', 'ulei', 'sare', 'piper']}
                steps = {['Step 1', 'Step 2', 'Step 3']}
                rating = {4.5}
            />
            </View>
        </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 10,
    },
})