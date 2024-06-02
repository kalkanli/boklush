import React, { useState } from 'react';
import storage from './storage';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './styles'; // styles.js dosyasını içe aktar
import axios, { HttpStatusCode } from 'axios';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    // Add your login logic here
    // On successful login, navigate to Home screen

    resp = await axios.post("http://localhost:4219/auth/login", {
      "username": username,
      "password": password
    });

    if (resp.status == HttpStatusCode.NotFound) {
      console.log("user not found");
    } else if (resp.status != HttpStatusCode.Ok) {
      console.log("username or password is invalid")
    } else {
      await storage.save({
        key: "token",
        data: resp.data.Payload.token,
      })

      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.accountContainer}>
      <Text style={styles.title}>Login</Text>
      <TextInput 
        placeholder="Username" 
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry 
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
