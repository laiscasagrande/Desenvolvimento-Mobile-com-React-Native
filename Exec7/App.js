import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Texto 01</Text>
      <Text>Texto 02</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: flex,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
