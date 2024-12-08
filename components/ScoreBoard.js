import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const ScoreBoard = ({ teamA, teamB }) => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const updateScore = (team, value) => {
    if (team === 'A') {
      const newScore = Math.max(0, scoreA + value);
      setScoreA(newScore);
      if (newScore === 10) Alert.alert('Pemenang', `${teamA} menang!`);
    } else {
      const newScore = Math.max(0, scoreB + value);
      setScoreB(newScore);
      if (newScore === 10) Alert.alert('Pemenang', `${teamB} menang!`);
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>{teamA}</Text>
        <Text style={styles.score}>{scoreA}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => updateScore('A', 1)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => updateScore('A', -1)}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>{teamB}</Text>
        <Text style={styles.score}>{scoreB}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => updateScore('B', 1)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => updateScore('B', -1)}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 4,
  },
  teamContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  score: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  resetButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ScoreBoard;
