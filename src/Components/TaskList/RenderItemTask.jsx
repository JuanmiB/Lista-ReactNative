import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const RenderItemTask = ({ item, onPressTask }) => {
    return (
        <Pressable onPress={() => onPressTask(item)}>
            <View style={
                item.completed ?
                    styles.taskCompleted :
                    styles.task
            } key={item.id} >
                <Text style={styles.taskText}> {item.task}</Text>
            </View>
        </Pressable>
    )
}

export default RenderItemTask

const styles = StyleSheet.create({
    task: {
        width: 200,
        padding: 10,
        backgroundColor: "#5f7adb",
        borderRadius: 6,
        borderColor: "#000",
        borderBottomWidth: 3,
        borderRightWidth: 3, 
        marginTop: 30,
    },
    taskCompleted: {
        width: 200,
        padding: 10,
        backgroundColor: "#72eb3a",
        borderRadius: 6,
        borderColor: "#000",
        borderBottomWidth: 3,
        borderRightWidth: 3,
        marginBottom: 15,
    },
    taskText: {
        fontSize: 20,
    },
})