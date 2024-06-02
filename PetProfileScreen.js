import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBone, faCalendarAlt, faFileMedicalAlt, faHospitalAlt, faIdCard, faPills, faShieldHeart, faSyringe } from '@fortawesome/free-solid-svg-icons';
import styles from './styles'; // styles.js dosyasını içe aktar
import { useRoute } from '@react-navigation/native';

const PetProfileScreen = ({ navigation }) => {
  const route = useRoute();
  const { pet } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => {
        /* Edit logic */
        }}><Text style={styles.buttonText}>Edit Pet Information</Text>
      </TouchableOpacity>
      <View style={styles.section}>
        <TouchableOpacity style={styles.petProfileItem} onPress={() => navigation.navigate('Medication', {pet: pet})}>
        <FontAwesomeIcon
              icon={faPills} 
              size={24}
              color="#DBA39A"
              style={styles.petProfileIcon}
            />
          <Text style={styles.petProfileText}>Medication</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.petProfileItem} onPress={() => navigation.navigate('Vaccination', {pet: pet})}>
        <FontAwesomeIcon
              icon={faSyringe} 
              size={24}
              color="#DBA39A"
              style={styles.petProfileIcon}
            />
          <Text style={styles.buttonText}>Vaccination</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.petProfileItem} onPress={() => navigation.navigate('Appointment', {pet: pet})}>
        <FontAwesomeIcon
              icon={faCalendarAlt} 
              size={24}
              color="#DBA39A"
              style={styles.petProfileIcon}
            />
          <Text style={styles.buttonText}>Appointment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.petProfileItem} onPress={() => navigation.navigate('Feeding', {pet: pet})}>
        <FontAwesomeIcon
              icon={faBone} 
              size={24}
              color="#DBA39A"
              style={styles.petProfileIcon}
            />
          <Text style={styles.buttonText}>Feeding</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.petProfileItem} onPress={() => navigation.navigate('HealthRecord', {pet: pet})}>
        <FontAwesomeIcon
              icon={faFileMedicalAlt} 
              size={24}
              color="#DBA39A"
              style={styles.petProfileIcon}
            />
          <Text style={styles.buttonText}>Health Record</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.petProfileItem} onPress={() => navigation.navigate('Insurance', {pet: pet})}>
        <FontAwesomeIcon
              icon={faShieldHeart} 
              size={24}
              color="#DBA39A"
              style={styles.petProfileIcon}
            />
          <Text style={styles.buttonText}>Insurance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.petProfileItem} onPress={() => navigation.navigate('Microchip', {pet: pet})}>
        <FontAwesomeIcon
              icon={faIdCard} 
              size={24}
              color="#DBA39A"
              style={styles.petProfileIcon}
            />
          <Text style={styles.buttonText}>Microchip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.petProfileItem} onPress={() => navigation.navigate('EmergencyHospital', {pet: pet})}>
        <FontAwesomeIcon
              icon={faHospitalAlt} 
              size={24}
              color="#DBA39A"
              style={styles.petProfileIcon}
            />
          <Text style={styles.buttonText}>Emergency Hospital</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PetProfileScreen;
