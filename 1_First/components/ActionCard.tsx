import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:string) {
        Linking.openURL(websiteLink)
    }

  return (
    <View>
      <Text style={styles.headingText}>Bike Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in Js in S2
            </Text>
        </View>
        <Image 
        source={{   uri:'https://i.pinimg.com/736x/1a/73/9e/1a739eb529b5b1c174aa400b7d58e055.jpg',
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebsite('https://leetcode.com/u/Rahul_kr_6485/')}
            style = {styles.touch}
            >
                <Text style={styles.social}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openWebsite('https://github.com/Rahul33360')}
            style = {styles.touch}
            >
                <Text style={styles.social}>Follow me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        padding:8,
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10,
        color:'white',
    },
    cardImage: {
        height:'70%',
        width:'auto',
        paddingTop:10,
        marginLeft:0.4,
        marginRight:0.6,
        borderRadius:15,
    },
    card: {
        height:750,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,
    },
    touch: {
        backgroundColor: '#969596',
        padding:10,
        marginTop:10,
        marginLeft:10,
        marginBottom:10,
        borderRadius:20,
        alignSelf: 'flex-start',
    },
    elevatedCard: {
        backgroundColor:'white',

    },
    headingContainer: {
        flex:1,
        alignItems:'center',
    },
    footerContainer: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
    },

    headerText: {
        color:'#000',
        fontSize:20,
        fontWeight:'600',
    },
    bodyContainer: {
        padding:10,
    },
    social: {
        color:'#333666',
        fontWeight:'600',
        fontSize:16,
    }
})