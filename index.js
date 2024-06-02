import 'react-native-gesture-handler';
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegisterScreen from './RegisterScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import PetProfileScreen from './PetProfileScreen';
import CreatePetProfileScreen from './CreatePetProfileScreen';
import MedicationScreen from './MedicationScreen';
import VaccinationScreen from './VaccinationScreen';
import AppointmentScreen from './AppointmentScreen';
import FeedingScreen from './FeedingScreen';
import HealthRecordScreen from './HealthRecordScreen';
import InsuranceScreen from './InsuranceScreen';
import MicrochipScreen from './MicrochipScreen';
import EmergencyHospitalScreen from './EmergencyHospitalScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pet Information" component={PetProfileScreen} />
        <Stack.Screen name="CreatePetProfile" component={CreatePetProfileScreen} />
        <Stack.Screen name="Medication" component={MedicationScreen} />
        <Stack.Screen name="Vaccination" component={VaccinationScreen} />
        <Stack.Screen name="Appointment" component={AppointmentScreen} />
        <Stack.Screen name="Feeding" component={FeedingScreen} />
        <Stack.Screen name="HealthRecord" component={HealthRecordScreen} />
        <Stack.Screen name="Insurance" component={InsuranceScreen} />
        <Stack.Screen name="Microchip" component={MicrochipScreen} />
        <Stack.Screen name="EmergencyHospital" component={EmergencyHospitalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => App);

export default App;
