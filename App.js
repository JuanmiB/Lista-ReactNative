import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './src/Screens/MainScreen';
  
const taskList = [
  {
    id: 1,
    task: "Tender cama",
    completed: false
  },
  {
    id: 2,
    task: "Limpiar mueble",
    completed: false
  },
  {
    id: 3,
    task: "Doblar ropa",
    completed: false
  },
  {
    id: 4,
    task: "Bañarme",
    completed: false
  },
  {
    id: 5,
    task: "Estudiar Backend",
    completed: false
  }
]



export default function App() {
  return (
      <MainScreen taskList={taskList} />
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
