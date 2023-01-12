import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState, render } from 'react'
import RecipePost from '../components/RecipePost'
import { auth, database } from '../firebase'
import { uid } from 'uid'
import MyPostComponent from '../components/MyPostComponent'

const RecomandationScreen = () => {

    const [data, setData] = useState();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        database.ref('recipe_posts')
        .once('value', (snapshot) =>{
            snapshot.forEach((childSnapshot) => {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();

                if(childData.email === auth.currentUser?.email){
                    console.log(childData.email);
                    setPosts(arr => [...arr, childData]);
                }
              });
        })
    }, [])

  return (
        <ScrollView style={styles.container}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>

                {
                    posts.map((post) => (
                        <MyPostComponent
                            key={uid()}
                            id = {123}
                            name = {post.name}
                            author = {post.email}
                            shorDescription = {post.description}
                            imgUrl = {post.imageUrl}
                            ingredients = {post.ingredient}
                            steps = {post.steps}
                            rating = {4.5}
                        />
                    ))
                }
            </View>
        </ScrollView>
  )
}

export default RecomandationScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 10,
    },
})