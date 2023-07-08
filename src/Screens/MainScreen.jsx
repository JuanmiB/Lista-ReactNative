import { StyleSheet, View }
  from 'react-native'
import React, { useState } from 'react'
import TopBar from '../Components/TopBar'
import TaskList from '../Components/TaskList/index'
import Modals from '../Components/Modal'

const MainScreen = () => {
  const [list, setList] = useState([])
    const [input, setInput] = useState("")
    const [modalVisible, setModalVisible] = useState(false);
    const [taskActive, setTaskActive] = useState({})

// <--------------------------------FUNCION AÑARDIR TAREA------------------------------------->
    const onAddTask = () => {
        console.log("Se agregó una task");
        setList([
            ...list,
            {
                id: list.length + 1,
                task: input,
                completed: false
            }
        ])
    }
//<---------------------------------MOSTRAR MODAL-------------------------------------------->
    const onPressTask = (task) => {
        console.log(task)
        setTaskActive(task)
        setModalVisible(!modalVisible)
    }

    const onPressStatus = (status) => {
      const remainTask = list.filter(taskList => taskList.id !== taskActive.id)
      const orderedList = [
          ...remainTask,
          {
              ...taskActive,
              completed: status
          }
      ].sort(function (a, b) {
          if (a.id > b.id) {
            return 1;
          }
          if (a.id < b.id) {
            return -1;
          }
          return 0;
        })
      console.log(taskActive)
      setList(orderedList)
      setModalVisible(!modalVisible)
  }
  console.log(list);


  // <------------------------RENDERIZADO--------------------->
  return (
    <View style={styles.container}>

      <TaskList
        list={list}
        onPressTask={onPressTask}
      />

      <Modals
        modalVisible={modalVisible}
        taskActive={taskActive}
        setModalVisible={setModalVisible}
        onPressStatus={onPressStatus}
      />

      <TopBar
        input={input}
        onAddTask={onAddTask}
        setInput={setInput}
      />
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#E8EAED'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  }
});