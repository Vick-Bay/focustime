import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../utils/colors';
import { spacingSizes, fontSizes } from '../utils/sizes';

const minutesToMillis = min => min * 1000 * 60;

const formatTime = time => time < 10 ? `0${time}` : time;

export const Countdown = ({
  minutes = 1,
  isPaused,
  onProgress
}) => {
  const [millis, setMillis] = useState(minutesToMillis(minutes))
  const interval = React.useRef(null);

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        return time;
      }
      const timeLeft = time - 1000;
      onProgress(timeLeft / minutesToMillis(minutes))
      return timeLeft;
    })
  }

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000)

    return () => clearInterval(interval.current)
  }, [isPaused])


  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <Text style={styles.text}>{formatTime(minute)}:{formatTime(seconds)}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: "bold",
    color: colors.white,
    padding: spacingSizes.lg,
    backgroundColor: "rgba(94, 132, 226, 0.3)",
  },
})