import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFCF3',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color: '#DBA39A',
    fontFamily: 'Cochin',
  },
  subtitle: {
    fontSize: 20,
    marginVertical: 16,
    textAlign: 'left',
    color: '#DBA39A',
    fontFamily: 'Cochin',
  },
  button: {
    backgroundColor: '#F0DBDB',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#DBA39A',
    fontSize: 18,
    fontFamily: 'Cochin',
  },
  petProfileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F5EBE0',
    borderBottomWidth: 1,
    borderBottomColor: '#F0DBDB',
    marginBottom: 20,
  },
  petProfileText: {
    fontSize: 18,
    color: '#DBA39A',
    fontFamily: 'Cochin',
  },
  petProfileIcon: {
    marginRight: 10,
  },
  input: {
    height: 40,
    borderColor: '#DBA39A', 
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    fontFamily: 'Cochin',
  },
  section: {
    marginTop: 20,
    justifyContent: 'center',
    backgroundColor: '#FEFCF3',
  },
  accountContainer: {
    flex: 1,
    backgroundColor: '#FEFCF3',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  vaccinationItem: {
    padding: 16,
    backgroundColor: '#F5EBE0',
    borderBottomWidth: 1,
    borderColor: '#F0DBDB',
    marginBottom: 20,
  },
  vaccinationText: {
    fontSize: 18,
    color: '#DBA39A',
    fontFamily: 'Cochin',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
    backgroundColor: '#FEFCF3',
    borderRadius: 10,
    padding: 30,
    shadowColor: '#F5EBE0',
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
    color: '#DBA39A',
},
closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
});

export default styles;
