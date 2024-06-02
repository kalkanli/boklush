import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Modal, TextInput, TouchableOpacity } from 'react-native';

const AppointmentScreen = () => {
  const [appointments, setAppointments] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newDate, setNewDate] = useState('');
  const [newVetName, setNewVetName] = useState('');
  const [newReason, setNewReason] = useState('');
  const [newCost, setNewCost] = useState('');

  const handleAddAppointment = () => {
    const newAppointment = {
      id: (appointments.length + 1).toString(),
      date: newDate,
      vetName: newVetName,
      reason: newReason,
      cost: newCost,
    };
    setAppointments([...appointments, newAppointment]);
    setModalVisible(false);
    setNewDate('');
    setNewVetName('');
    setNewReason('');
    setNewCost('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appointment Records</Text>
      <FlatList
        data={appointments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.appointmentItem}>
            <Text style={styles.appointmentText}>Date: {item.date}</Text>
            <Text style={styles.appointmentText}>Vet Name: {item.vetName}</Text>
            <Text style={styles.appointmentText}>Reason: {item.reason}</Text>
            <Text style={styles.appointmentText}>Cost: {item.cost}</Text>
          </View>
        )}
      />
      <Button title="Add New Appointment" onPress={() => setModalVisible(true)} />
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Add Appointment</Text>
          <TextInput
            style={styles.input}
            placeholder="Date"
            value={newDate}
            onChangeText={setNewDate}
          />
          <TextInput
            style={styles.input}
            placeholder="Vet Name"
            value={newVetName}
            onChangeText={setNewVetName}
          />
          <TextInput
            style={styles.input}
            placeholder="Reason"
            value={newReason}
            onChangeText={setNewReason}
          />
          <TextInput
            style={styles.input}
            placeholder="Cost"
            value={newCost}
            onChangeText={setNewCost}
          />
          <Button title="Save" onPress={handleAddAppointment} />
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
  appointmentItem: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  appointmentText: {
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

export default AppointmentScreen;
