import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import styles from './styles'; // styles.js dosyasını içe aktar
import axios from 'axios';
import storage from './storage';

const HomeScreen = ({ navigation }) => {
  const [petProfiles, setPetProfiles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      token = await storage.load({ key: "token" });
      const resp = await axios.get("http://localhost:4219/pet/get-all?limit=20&offset=0", {
        headers: {
          Authorization: token
        }
      })
      setPetProfiles(resp.data.Payload);
    }
    fetchData()
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreatePetProfile')}>
        <Text style={styles.buttonText}>New Pet Profile</Text>
      </TouchableOpacity>
      <View style={styles.section}>
        <FlatList
          data={petProfiles}
          keyExtractor={item => item.ID}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.petProfileItem}
              onPress={() => navigation.navigate('Pet Information', { pet: item })}>
              <FontAwesomeIcon
                icon={faPaw}
                size={24}
                color="#DBA39A"
                style={styles.petProfileIcon} />
              <Text style={styles.petProfileText}>{item.Name} ({item.Type})</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
