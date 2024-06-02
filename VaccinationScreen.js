import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Modal, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './styles'; // styles.js dosyasını içe aktar


const VaccinationScreen = () => {
  
  const [vaccinations, setVaccinations] = useState([
    // Dummy data for demonstration
    { id: '1', type: 'Rabies', date: '2023-01-01', expiration: '2024-01-01' },
    { id: '2', type: 'Distemper', date: '2023-02-01', expiration: '2024-02-01' },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newType, setNewType] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newExpiration, setNewExpiration] = useState('');

  const handleAddVaccination = () => {
    const newVaccination = {
      id: (vaccinations.length + 1).toString(),
      type: newType,
      date: newDate,
      expiration: newExpiration,
    };
    setVaccinations([...vaccinations, newVaccination]);
    setModalVisible(false);
    setNewType('');
    setNewDate('');
    setNewExpiration('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Add New Vaccination</Text>
      </TouchableOpacity>
      <FlatList
        data={vaccinations}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.vaccinationItem}>
            <Text style={styles.vaccinationText}>{item.type}</Text>
            <Text style={styles.vaccinationText}>Date: {item.date}</Text>
            <Text style={styles.vaccinationText}>Expiration: {item.expiration}</Text>
          </View>
        )}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Add Vaccination</Text>
          <TextInput
            style={styles.input}
            placeholder="Vaccination Type"
            value={newType}
            onChangeText={setNewType}
          />
          <TextInput
            style={styles.input}
            placeholder="Date"
            value={newDate}
            onChangeText={setNewDate}
          />
          <TextInput
            style={styles.input}
            placeholder="Expiration Date"
            value={newExpiration}
            onChangeText={setNewExpiration}
          />
          <TouchableOpacity 
            style={styles.button} 
            onPress={handleAddVaccination}>
          <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <FontAwesomeIcon
                icon={faCircleXmark} 
                size={30}
                color="#DBA39A"
                style={styles.petProfileIcon}/>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default VaccinationScreen;
