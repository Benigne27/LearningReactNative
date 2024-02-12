import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from './style';

export default function App() {
    let isLoading=false

    const whenUserClick=()=>{
      isLoading=true
      console.log(isLoading)
    }

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Hello World!</Text>

      <StatusBar style="auto" />
      
      <TouchableOpacity style={styles.Button} onPress={whenUserClick()}>
        <Text style={{color: 'green'}}>Click here</Text>
      </TouchableOpacity>

      {isLoading?(
        <ActivityIndicator  />
      ):(
        <Text>Open up App.js to start working on your app!</Text>
      )}
    </View>
  );
}


