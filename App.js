import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { Focus } from './src/Features/Focus/Focus';
import { Timer } from './src/Features/timer/Timer'
import { colors } from './src/utils/colors'
import { spacingSizes } from './src/utils/sizes'

export default function App() {
  const [focusSubject, setFocusSubject] = useState('gardening');

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject}
          onTimerEnd={() => {
            setFocusSubject(null);
          }}
          clearSubject={() => setFocusSubject(null)}
        />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacingSizes.xxl,
    backgroundColor: colors.darkBlue,
  },
})
