import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Space from './Space'

const Input = ({ inputTitle, inputIcon, inputIconText, value, onChangeText, placeholder, isImageIcon }) => {
    return (
        <View style={{}}>
            <Text style={{ color: "#fff", fontSize: 14 }}>{inputTitle}</Text>
            <Space mV={1} />
            <View style={styles.container}>
                <View style={{ width: "70%" }}>
                    <TextInput
                        placeholder={placeholder}
                        placeholderTextColor={"#fff"}
                        style={{ color: "#fff" }}
                        value={value}
                        onChangeText={onChangeText}
                        keyboardType='number-pad'
                    />
                </View>
                <View style={{ backgroundColor: "#D0E0F3", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5, width: "25%" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={{ backgroundColor: "#244C87", borderRadius: 10, width: 20, height: 20 }}>
                            <Text style={{ color: "#fff", textAlign: "center" }}>{inputIcon}</Text>
                        </View>
                        <Space mH={3} />
                        <Text style={{ fontSize: 14, color: "#244C87", textAlign: "auto" }}>{inputIconText}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Input

Input.defaultProps = {
    inputTitle: "Add title",
    inputIcon: "$",
    inputIconText: "USD",
    value: "",
    onChangeText: () => { },
    placeholder: "Add Placeholder",
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 5
    }
})