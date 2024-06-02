import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Modal, TextInput, TouchableOpacity } from 'react-native';

const FeedingScreen = () => {
  const [feedings, setFeedings] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newType, setNewType] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [newTime, setNewTime] = useState('');

  const handleAddFeeding = () => {
    const newFeeding = {
      id: (feedings.length + 1).toString(),
      type: newType,
      amount: newAmount,
      time: newTime,
    };
    setFeedings([...feedings, newFeeding]);
    setModalVisible(false);
    setNewType('');
    setNewAmount('');
    setNewTime('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feeding Records</Text>
      <FlatList
        data={feedings}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.feedingItem}>
            <Text style={styles.feedingText}>Type: {item.type}</Text>
            <Text style={styles.feedingText}>Amount: {item.amount}</Text>
            <Text style={styles.feedingText}>Time: {item.time}</Text>
          </View>
        )}
      />
      <Button title="Add New Feeding" onPress={() => setModalVisible(true)} />
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Add Feeding</Text>
          <TextInput
            style={styles.input}
            placeholder="Type"
            value={newType}
            onChangeText={setNewType}
          />
          <TextInput
            style={styles.input}
            placeholder="Amount"
            value={newAmount}
            onChangeText={setNewAmount}
          />
          <TextInput
            style={styles.input}
            placeholder="Time"
            value={newTime}
            onChangeText={setNewTime}
          />
          <Button title="Save" onPress={handleAddFeeding} />
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
  feedingItem: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  feedingText: {
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

export default FeedingScreen;
