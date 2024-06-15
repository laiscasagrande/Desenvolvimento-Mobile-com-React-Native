import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [button, setButton] = useState(false)
  return (
    <View style={styles.container}>
      <Button
        title='Clique para mudar de cor'
        onPress={() => setButton(true)}
      />
      {button ?
        <Text style={styles.color1}>
          oiii
        </Text> :
        <Text style={styles.color2}>
          oiii
        </Text>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  color1: {
    color: "#FF1493"
  },
  color2: {
    color: "#008080"
  }
});
