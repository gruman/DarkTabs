import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Modal, Pressable } from 'react-native';
import { useCustomContext } from '../state/context';
import RoundButton from '../components/RoundButton';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage from @react-native-async-storage/async-storage

export default function TopBar() {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const { user, setUser } = useCustomContext();

  const logout = async () => {
    signOut(auth);
    try {
      await AsyncStorage.removeItem("user");
    } catch (error) {
      console.error('Error logging out from AsyncStorage:', error);
    }
    setUser(null);
    setShowLogin(false);
  }

  function handleCreate() {
    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          AsyncStorage.setItem('user', JSON.stringify(userCredential.user));
          setUser(userCredential.user);
          setShowLogin(false);
        })
        .catch((error) => {
          setMessage(error.message);
        });
    } else {
      setMessage("Please fill out both fields.");
    }
  }

  function handleLogin() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        AsyncStorage.setItem('user', JSON.stringify(userCredential.user));
        setUser(userCredential.user);
        setShowLogin(false);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{user ? "Data saving to cloud" : "Login to save your data"}</Text>
      {
        user ?
          <Pressable onPress={() => logout()}>
            <Text style={styles.text}>Logout</Text>
          </Pressable>
          :
          <Pressable onPress={() => setShowLogin(true)}>
            <Text style={styles.text}>Login</Text>
          </Pressable>
      }
      <Modal visible={showLogin} animationType='slide'>
        <View style={styles.modal}>
          <Text style={styles.label}>
            Email:
          </Text>
          <TextInput
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
            autoCapitalize={false}
          />
          <Text style={styles.label}>
            Password:
          </Text>
          <TextInput
            secureTextEntry={true}
            label="Password"
            value={password}
            autoCapitalize={false}
            onChangeText={text => setPassword(text)}
            style={[styles.input, { marginBottom: 0 }]}
          />
          <Text style={styles.text}>{message}</Text>
          <RoundButton title="Login" style={styles.input} onPress={() => handleLogin()} backgroundColor="#fff" color="#222" />
          <RoundButton title="Create an account" style={styles.input} onPress={() => handleCreate()} backgroundColor={"#fff"} color="#222" />
          <RoundButton title="Cancel" style={styles.input} onPress={() => setShowLogin(false)} backgroundColor={"#fff"} color="#222" />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    padding: 5,
    paddingHorizontal: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  modal: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#222'
  },
  text: {
    fontFamily: "Lato_400Regular",
    color: '#eee'
  },
  label: {
    fontFamily: "Lato_400Regular",
    color: '#eee',
    marginBottom: 5

  },
  input: {
    width: '100%',
    color: '#eee',
    borderColor: '#999',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 15,
    lineHeight: 20,
    fontFamily: "Lato_400Regular"
  },
});
