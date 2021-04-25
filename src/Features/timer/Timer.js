import React, { useState } from "react";
import { View, StyleSheet, Text } from 'react-native';


import { colors } from '../../utils/colors';
import { spacingSizes } from '../../utils/sizes';
import { Countdown } from '../../Components/Countdown';
import { RoundedButton } from '../../Components/RoundedButton'


export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused={!isStarted} />
      </View>
      <View style={{ paddingTop: spacingSizes.xxl }}>
        <Text style={styles.title}>Focusing on: </Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        ) : (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    textAlign: 'center'
  },
  task: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonWrapper: {
    flex: 0.3,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
