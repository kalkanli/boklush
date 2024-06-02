import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Modal, TextInput, TouchableOpacity } from 'react-native';

const MedicationScreen = () => {
  const [medications, setMedications] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newName, setNewName] = useState('');
  const [newDosage, setNewDosage] = useState('');
  const [newFrequency, setNewFrequency] = useState('');
  const [newPrescriptionDate, setNewPrescriptionDate] = useState('');
  const [newTaken, setNewTaken] = useState(false);

  const handleAddMedication = () => {
    const newMedication = {
      id: (medications.length + 1).toString(),
      name: newName,
      dosage: newDosage,
      frequency: newFrequency,
      prescriptionDate: newPrescriptionDate,
      taken: newTaken,
    };
    setMedications([...medications, newMedication]);
    setModalVisible(false);
    setNewName('');
    setNewDosage('');
    setNewFrequency('');
    setNewPrescriptionDate('');
    setNewTaken(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medication Records</Text>
      <FlatList
        data={medications}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.medicationItem}>
            <Text style={styles.medicationText}>Name: {item.name}</Text>
            <Text style={styles.medicationText}>Dosage: {item.dosage}</Text>
            <Text style={styles.medicationText}>Frequency: {item.frequency}</Text>
            <Text style={styles.medicationText}>Prescription Date: {item.prescriptionDate}</Text>
            <Text style={styles.medicationText}>Taken: {item.taken ? 'Yes' : 'No'}</Text>
          </View>
        )}
      />
      <Button title="Add New Medication" onPress={() => setModalVisible(true)} />
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Add Medication</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={newName}
            onChangeText={setNewName}
          />
          <TextInput
            style={styles.input}
            placeholder="Dosage"
            value={newDosage}
            onChangeText={setNewDosage}
          />
          <TextInput
            style={styles.input}
            placeholder="Frequency"
            value={newFrequency}
            onChangeText={setNewFrequency}
          />
          <TextInput
            style={styles.input}
            placeholder="Prescription Date"
            value={newPrescriptionDate}
            onChangeText={setNewPrescriptionDate}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => setNewTaken(!newTaken)}
          >
            <Text style={styles.buttonText}>{newTaken ? 'Mark as Not Taken' : 'Mark as Taken'}</Text>
          </TouchableOpacity>
          <Button title="Save" onPress={handleAddMedication} />
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
  medicationItem: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  medicationText: {
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
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
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

export default MedicationScreen;
