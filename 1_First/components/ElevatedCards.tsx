import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';

export default function ElevatedCards() {
  return (
    <View style= {{backgroundColor:'white',}}>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>To</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>More</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>😚</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        color:'white',
        fontWeight: 'bold',
        paddingHorizontal:10,
    },
    container: {
        padding:8,
    },
    card: {
        width:100,
        height:100,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        margin:8,
    },
    cardElevated: {
        backgroundColor:'#CAD5E2',
        // elevation:40,    // it adds greyish tint colour to surrounding
    },
})