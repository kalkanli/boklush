import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Modal, TextInput, TouchableOpacity } from 'react-native';

const InsuranceScreen = () => {
  const [insurances, setInsurances] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newProvider, setNewProvider] = useState('');
  const [newPolicyNumber, setNewPolicyNumber] = useState('');
  const [newCost, setNewCost] = useState('');

  const handleAddInsurance = () => {
    const newInsurance = {
      id: (insurances.length + 1).toString(),
      provider: newProvider,
      policyNumber: newPolicyNumber,
      cost: newCost,
    };
    setInsurances([...insurances, newInsurance]);
    setModalVisible(false);
    setNewProvider('');
    setNewPolicyNumber('');
    setNewCost('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Insurance Information</Text>
      <FlatList
        data={insurances}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.insuranceItem}>
            <Text style={styles.insuranceText}>Provider: {item.provider}</Text>
            <Text style={styles.insuranceText}>Policy Number: {item.policyNumber}</Text>
            <Text style={styles.insuranceText}>Cost: {item.cost}</Text>
          </View>
        )}
      />
      <Button title="Add New Insurance" onPress={() => setModalVisible(true)} />
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Add Insurance Information</Text>
          <TextInput
            style={styles.input}
            placeholder="Provider"
            value={newProvider}
            onChangeText={setNewProvider}
          />
          <TextInput
            style={styles.input}
            placeholder="Policy Number"
            value={newPolicyNumber}
            onChangeText={setNewPolicyNumber}
          />
          <TextInput
            style={styles.input}
            placeholder="Cost"
            value={newCost}
            onChangeText={setNewCost}
          />
          <Button title="Save" onPress={handleAddInsurance} />
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
  insuranceItem: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  insuranceText: {
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

export default InsuranceScreen;
