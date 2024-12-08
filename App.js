import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import ScoreBoard from './components/ScoreBoard';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Futsal Score Tracker</Text>
      <ScoreBoard teamA="Tim A" teamB="Tim B" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default App;
