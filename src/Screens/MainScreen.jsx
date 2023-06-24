import { Button, TextInput, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const MainScreen = ({ taskList }) => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <TextInput style={styles.input} />
        <Button title='Add Task' />
      </View>

      <View style={styles.view2}>
        {taskList.map(e => {
          return (
            <View style={styles.task} key={e.id} >
              <Text>
                {e.task}
              </Text>
            </View>
            )
        })}

      </View>

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
    backgroundColor: "#1B2223"
  },
  view1: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3A4F50",
    width: "100%"
  },

  view2: {
    flex: 8,
    backgroundColor: "#0ef6cc",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 15,
    
  },

  input: {
    width: 150,
    borderBottomColor: "blue",
    borderBottomWidth: 3,
    marginBottom: 8
  },

  task: {
    width: "80%",
    backgroundColor: "silver",
    padding: 10,
  }
})