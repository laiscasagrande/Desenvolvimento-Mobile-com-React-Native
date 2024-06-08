import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function App() {
  const [text, setText] = useState("")
  return (
    <View style={styles.container}>
     <TextInput
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
    />
    <Text>O usuário digitou: {text}</Text>
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
});
