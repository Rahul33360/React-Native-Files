import React from 'react';
import {
  View,
  Text,
  useColorScheme,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const {height, width, scale, fontScale} = useWindowDimensions();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
          <Text style ={isDarkMode ? styles.whiteText : styles.darkText}>This is Text 1</Text>
          <Text style ={isDarkMode ? styles.whiteText : styles.darkText}>FontScale : {fontScale}</Text>
          <Text style ={isDarkMode ? styles.whiteText : styles.darkText}>Height : {height}</Text>
          <Text style ={isDarkMode ? styles.whiteText : styles.darkText}>Width : {width}</Text>
          <Text style ={isDarkMode ? styles.whiteText : styles.darkText}>Scale : {scale}</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  whiteText: {
    color:'#ffffff',
    fontSize:25,
    opacity:1,
  },
  darkText: {
    color:'#000000',
    fontSize:25,
  },
})


export default App;
