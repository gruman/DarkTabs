import { useState, useEffect } from 'react';
import { Text, View, FlatList, TextInput, Pressable } from 'react-native';
import styles from '../constants/styles';
import Button from '../components/Button';
import RoundButton from '../components/RoundButton';
import Colors from '../constants/colors'
import { useCustomContext } from '../state/context';
export default function Home() {

  const { user } = useCustomContext()
 
  return (
    <View style={styles.container}>
     <Text style={styles.header}>Settings</Text>
    </View>

  )

}