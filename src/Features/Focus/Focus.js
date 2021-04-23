import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper'
import { RoundedButton } from '../../Components/RoundedButton'

export const Focus = () => {

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>What would you like to focus on?</Text>
        </View>
        <TextInput />
        <RoundedButton title="+" size={50} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: 'center'
  },
  inputContainer: {
    paddingBottom: 25
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24
  },
});