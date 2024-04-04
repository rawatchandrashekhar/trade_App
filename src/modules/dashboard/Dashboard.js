import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/Header'
import { styles } from './Style'
import Button from '../../components/Button'
import Space from '../../components/Space'

const Dashboard = (props) => {

    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.titleStyle}>Trade at your fingertips</Text>
            <Space mV={10} />
            <View style={styles.btnContainer}>
                <Button onPress={()=>props.navigation.navigate("BuyUSD")} width={"48%"} btnText={"BuyUSDFx"} />
                <Button onPress={()=>props.navigation.navigate("P2PTrade")} width={"48%"} btnText={"P2P Trade"} />
            </View>
        </View>
    )
}

export default Dashboard