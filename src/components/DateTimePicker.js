import { current } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-date-picker'
import FN from "react-native-vector-icons/Fontisto";

const DateTimePicker = ({ onChangeValue = () => { } }) => {

    const [currentDate, setCurrentDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    useEffect(() => {
        getFormattedDateAndTime();
    }, [currentDate])

    const getFormattedDateAndTime = () => {
        const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`
        const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`
        let formattedAmPm;
        if (currentDate.getHours() >= 12) {
            formattedAmPm = 'PM'
        } else {
            formattedAmPm = 'AM'
        }
        return `${formattedDate}${"  "}${formattedTime}${formattedAmPm}`
    }

    return (
        <View>
            <TouchableOpacity onPress={() => { setOpen(true) }} style={{ borderWidth: 1, borderColor: "#fff", borderRadius: 5, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 12, paddingHorizontal: 10 }}>
                <View style={{}}>
                    <Text style={{ color: "#fff", fontSize: 15 }}>{getFormattedDateAndTime()}</Text>
                </View>
                <FN name="date" size={25} color={"#fff"} />
            </TouchableOpacity>
            <DatePicker
                modal
                minimumDate={new Date()}
                open={open}
                date={currentDate}
                onConfirm={(date) => {
                    setOpen(false)
                    setCurrentDate(date)
                    onChangeValue(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </View>
    )
}

export default DateTimePicker