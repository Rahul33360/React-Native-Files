import {ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View style={styles.main}>
      <Text style={styles.headingText}>Trending Places</Text>
      <ScrollView style={[styles.card, styles.cardElevated]}>
        <Image
        style={styles.cardImage}
        source = {{
            uri:'https://i.pinimg.com/736x/ec/32/30/ec32303d762b543ab7a15511d1d924df.jpg'
        }}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Meme Cat</Text>
            <Text style={styles.cardDiscription}> This is cats discription.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </Text>
        </View>
        <Image 
        style = {styles.cardImage}
        source={{
          uri: 'https://i.pinimg.com/736x/1d/86/c9/1d86c9590f31ea716b0511f3b53f74fb.jpg'
        }} />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Doctor Cat</Text>
            <Text style={styles.cardDiscription}> This is cats discription.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </Text>
        </View>
      </ScrollView>
    </View>
  )}

const styles = StyleSheet.create({
    main: {
      marginTop: '10%',
    },
    headingText: {
        color:'white',
        padding:8,
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10,
    },
    cardElevated: {
      backgroundColor: '#FFFFFF',
      elevation:3,
      shadowOffset: {
        width:1,
        height:1,
      },
    },
    card: {
      flex:1,
      width:350,
      height:380,
      borderRadius:8,
      marginHorizontal:'10%',
      marginVertical:12,
    },

    cardImage: {
        height:250,
        marginBottom:8,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
    },
    cardTitle: {
        color:'brown',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6,
    },
    cardLabel: {
        color:'white',
        fontSize:15,
    },
    cardBody: {
      flex:1,
      flexGrow:1,
      paddingHorizontal:12,
    },
    cardDiscription: {
      paddingBottom:17,
      marginBottom:2,
      fontWeight:'400',
      textAlign: "left",
      textShadowRadius:40,
    }
})