import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper'
import { RoundedButton } from '../../Components/RoundedButton'
import { fontSizes, spacingSizes } from '../../utils/sizes'
import { colors } from '../../utils/colors'

export const Focus = ({ addSubject }) => {
  const [tmpItem, setTmpItem] = useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={{ flex: 1, marginRight: spacingSizes.md }}
          onSubmitEditing={
            ({ nativeEvent }) => {
              setTmpItem(nativeEvent.text)
            }} />
        <RoundedButton title="+" size={50} onPress={() => { addSubject(tmpItem) }} />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacingSizes.xxxl,
    margin: spacingSizes.sm
  },
  titleContainer: {
    padding: spacingSizes.md,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.lg
  },
  inputContainer: {
    paddingTop: spacingSizes.md,
    flexDirection: 'row',
    alignItems: 'center'
  },
});