import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Modal, TextInput, TouchableOpacity } from 'react-native';

const HealthRecordScreen = () => {
  const [healthRecords, setHealthRecords] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newSymptom, setNewSymptom] = useState('');
  const [newNotes, setNewNotes] = useState('');

  const handleAddHealthRecord = () => {
    const newHealthRecord = {
      id: (healthRecords.length + 1).toString(),
      symptom: newSymptom,
      notes: newNotes,
    };
    setHealthRecords([...healthRecords, newHealthRecord]);
    setModalVisible(false);
    setNewSymptom('');
    setNewNotes('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Records</Text>
      <FlatList
        data={healthRecords}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.healthRecordItem}>
            <Text style={styles.healthRecordText}>Symptom: {item.symptom}</Text>
            <Text style={styles.healthRecordText}>Notes: {item.notes}</Text>
          </View>
        )}
      />
      <Button title="Add New Health Record" onPress={() => setModalVisible(true)} />
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Add Health Record</Text>
          <TextInput
            style={styles.input}
            placeholder="Symptom"
            value={newSymptom}
            onChangeText={setNewSymptom}
          />
          <TextInput
            style={styles.input}
            placeholder="Notes"
            value={newNotes}
            onChangeText={setNewNotes}
          />
          <Button title="Save" onPress={handleAddHealthRecord} />
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
  healthRecordItem: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  healthRecordText: {
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

export default HealthRecordScreen;
