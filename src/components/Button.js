import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Button = ({ onPress, btnText, width }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{ ...styles.container, width: width }}>
            <Text style={styles.textStyle}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default Button

Button.defaultProps = {
    onPress: () => { alert("use onPress prop for listen the events") },
    btnText: "Add button text using btnText prop",
    width: "100%"
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#9DB7D9",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    textStyle: {
        color: "#244C87",
        fontSize: 15,
        textAlign: "center",
        fontWeight: "500"
    }
})