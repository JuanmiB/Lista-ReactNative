import {  StyleSheet, View, Text, Pressable, Modal } from 'react-native'
import React from 'react'

const Modals = ({
    modalVisible,
    setModalVisible,
    taskActive
}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}> {taskActive.task} </Text>
                    <View style={styles.buttonContainer}>

                        <Pressable
                            style={[styles.button, styles.buttonDone]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>
                                Done</Text>
                        </Pressable>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>
                                Salir</Text>
                        </Pressable>

                        <Pressable
                            style={[styles.button, styles.buttonNotYet]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>
                                Not yet</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </Modal>
    )
}
export default Modals

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset:
        {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    buttonDone: {
        backgroundColor: "green"
    },
    buttonNotYet: {
        backgroundColor: "red"
    }
})