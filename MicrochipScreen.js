import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Modal, TextInput, TouchableOpacity } from 'react-native';

const MicrochipScreen = () => {
  const [microchips, setMicrochips] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newProvider, setNewProvider] = useState('');
  const [newIdentifier, setNewIdentifier] = useState('');
  const [newDate, setNewDate] = useState('');

  const handleAddMicrochip = () => {
    const newMicrochip = {
      id: (microchips.length + 1).toString(),
      provider: newProvider,
      identifier: newIdentifier,
      date: newDate,
    };
    setMicrochips([...microchips, newMicrochip]);
    setModalVisible(false);
    setNewProvider('');
    setNewIdentifier('');
    setNewDate('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Microchip Information</Text>
      <FlatList
        data={microchips}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.microchipItem}>
            <Text style={styles.microchipText}>Provider: {item.provider}</Text>
            <Text style={styles.microchipText}>Identifier: {item.identifier}</Text>
            <Text style={styles.microchipText}>Date: {item.date}</Text>
          </View>
        )}
      />
      <Button title="Add New Microchip" onPress={() => setModalVisible(true)} />
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Add Microchip Information</Text>
          <TextInput
            style={styles.input}
            placeholder="Provider"
            value={newProvider}
            onChangeText={setNewProvider}
          />
          <TextInput
            style={styles.input}
            placeholder="Identifier"
            value={newIdentifier}
            onChangeText={setNewIdentifier}
          />
          <TextInput
            style={styles.input}
            placeholder="Date"
            value={newDate}
            onChangeText={setNewDate}
          />
          <Button title="Save" onPress={handleAddMicrochip} />
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
  microchipItem: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  microchipText: {
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

export default MicrochipScreen;
