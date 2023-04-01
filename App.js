import { StyleSheet } from 'react-native';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';

export default function App() {
  return (
    // <LoginScreen />
    <RegistrationScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
