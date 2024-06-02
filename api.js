import axios from "axios";
import storage from "./storage";

export async function createMedication(medication) {
    medication.frequency = 7001
    medication.PrescriptionDate = medication.PrescriptionDate.toISOString()
    let resp = await axios.post("http://localhost:4219/medication/create", medication, {
        headers: { 'Authorization': await storage.load({ key: "token" }) }
    })
};

export const medicationFrequencies = [
    { key: "1", label: 'Once a day', id: 7001 },
    { key: "2", label: 'Twice a day', id: 7002 },
    { key: "3", label: 'Three times a day', id: 7003 },
]

export async function createVaccination(vaccination) {

}

export const vaccinationTypes = [
    { key: "1", label: 'Rabies', id: 3001 },
    { key: "2", label: 'FVRCP', id: 3002 },
    { key: "3", label: 'FeLV', id: 3003 },
    { key: "4", label: 'Distemper', id: 3004 },
]