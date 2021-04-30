import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { Focus } from './src/Features/Focus/Focus';
import { FocusHistory } from './src/Features/Focus/FocusHistory';
import { Timer } from './src/Features/timer/Timer';
import { colors } from './src/utils/colors';
import { spacingSizes } from './src/utils/sizes';


const STATUSES = {
  COMPLETE: 1,
  CANCELLED: 2,
}

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  const addFocusHistorySubjectWithState = (subject, status) => {
    setFocusHistory([...focusHistory, { subject, status }])
  };

  const onClear = () => {
    setFocusHistory([]);
  }

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            addFocusHistorySubjectWithState(focusSubject, STATUSES.COMPLETE);
            setFocusSubject(null);
          }}
          clearSubject={() => {
            addFocusHistorySubjectWithState(focusSubject, STATUSES.CANCELLED);
            setFocusSubject(null);
          }}
        />
      ) : (
        <>
          <Focus addSubject={setFocusSubject} />
          <FocusHistory focusHistory={focusHistory} onClear={onClear} />
        </>
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
