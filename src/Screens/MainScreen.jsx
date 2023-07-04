import {StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import TopBar from '../Components/TopBar'
import TaskList from '../Components/TaskList/index'
import Modals from '../Components/Modal'





const MainScreen = ({ taskList }) => {
  const [list, setList] = useState(taskList)
  const [input, setInput] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const [taskActive, setTaskActive] = useState({})

  const onAddTask = () => {
    console.log("se agrego una task");
    setList([
      ...list,
      {
        id: list.length + 1,
        task: input,
        complted: false
      }
    ])

  }
  const onPressTask = (task) => {
    console.log(task);
    setTaskActive(task)
    setModalVisible(!modalVisible)

  }

  // <------------------------RENDERIZADO--------------------->
  return (
    <View style={styles.container}>
      <TopBar
        input={input}
        onAddTask={onAddTask}
        setInput={setInput}
      />

      <TaskList
        list={list}
        onPressTask={onPressTask}
      />

      <Modals 
      modalVisible={modalVisible}
      taskActive={taskActive}
      setModalVisible={setModalVisible}
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
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});