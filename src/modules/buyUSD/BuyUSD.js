import React, { useState } from 'react'
import { View, Text, ToastAndroid } from 'react-native'
import Header from '../../components/Header'
import { styles } from './Style'
import Input from '../../components/Input'
import Space from '../../components/Space'
import Button from '../../components/Button'
import DateTimePicker from '../../components/DateTimePicker'
import { useDispatch } from 'react-redux'
import { createOrder } from '../../storage/redux/slices/tradeSlice/TradeSlice'

const BuyUSD = (props) => {

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        USD: "",
        USDFx: ""
    })
    const [date, setDate] = useState("");

    const handleCreateOrder = () => {
        if (input.USD.length === "" || input.USDFx.length === "" || date === "") {
            ToastAndroid.show('Please fill all required fields!', ToastAndroid.SHORT);
        } else {
            const data = {
                USD: input.USD,
                USDFx: input.USDFx,
                orderDate: `${date}`
            }
            dispatch(createOrder(data))
            props.navigation.navigate("P2PTrade")
        }
    }

    const handleUSD = (txt) => {
        if (txt.length > 0) {
            setInput({ ...input, USD: txt, USDFx: txt * 0.85 })
        } else {
            setInput({
                USD: "",
                USDFx: ""
            })
        }
    }

    const handleUSDFx = (txt) => {
        if (txt.length > 0) {
            setInput({ ...input, USD: Math.floor(parseInt(txt)), USDFx: txt })
        } else {
            setInput({
                USD: "",
                USDFx: ""
            })
        }
    }

    const handleDatePicker = (val) => {
        setDate(val);
    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.subContainer}>
                <Text style={styles.textColor}>BUY USDFx</Text>
                <Space mV={10} />
                <Input value={`${input.USD}`} onChangeText={(txt) => handleUSD(txt)} placeholder={"Enter USD"} inputTitle={"I want to pay"} inputIcon={"$"} inputIconText={"USD"} />
                <Space mV={10} />
                <Input value={`${input.USDFx}`} onChangeText={(txt) => handleUSDFx(txt)} placeholder={"Enter USDFx"} inputTitle={"I will receive"} inputIcon={"^"} inputIconText={"USDFx"} />
                <Space mV={10} />
                <DateTimePicker onChangeValue={(val) => handleDatePicker(val)} />
                <Space mV={10} />
                <Button btnText={"Create order"} onPress={() => handleCreateOrder()} />
            </View>
        </View>
    )
}

export default BuyUSD