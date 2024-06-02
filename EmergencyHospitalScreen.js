import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Modal, TextInput, TouchableOpacity } from 'react-native';

const EmergencyHospitalScreen = () => {
  const [hospitals, setHospitals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newName, setNewName] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');

  const handleAddHospital = () => {
    const newHospital = {
      id: (hospitals.length + 1).toString(),
      name: newName,
      address: newAddress,
      phoneNumber: newPhoneNumber,
    };
    setHospitals([...hospitals, newHospital]);
    setModalVisible(false);
    setNewName('');
    setNewAddress('');
    setNewPhoneNumber('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency Veterinary Hospitals</Text>
      <FlatList
        data={hospitals}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.hospitalItem}>
            <Text style={styles.hospitalText}>Name: {item.name}</Text>
            <Text style={styles.hospitalText}>Address: {item.address}</Text>
            <Text style={styles.hospitalText}>Phone Number: {item.phoneNumber}</Text>
          </View>
        )}
      />
      <Button title="Add New Hospital" onPress={() => setModalVisible(true)} />
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Add Hospital Information</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={newName}
            onChangeText={setNewName}
          />
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={newAddress}
            onChangeText={setNewAddress}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={newPhoneNumber}
            onChangeText={setNewPhoneNumber}
          />
          <Button title="Save" onPress={handleAddHospital} />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  hospitalItem: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  hospitalText: {
    fontSize: 18,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '100%',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default EmergencyHospitalScreen;
