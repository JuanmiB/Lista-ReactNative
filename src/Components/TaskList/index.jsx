import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import RenderItemTask from './RenderItemTask'
const TaskList = ({list, onPressTask}) => {
    return (
        <View style={styles.view2}>
            <FlatList
                data={list}
                keyExtractor={item => item.id}
                renderItem={({ item }) => RenderItemTask({ item, onPressTask })}
            />
        </View>
    )
}

export default TaskList

const styles = StyleSheet.create({
    view2: {
        height: "88%",
        backgroundColor: "#1b1d24",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 15,
    }
})