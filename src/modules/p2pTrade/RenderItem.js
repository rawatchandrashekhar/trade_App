import { View, Text } from 'react-native'
import React from 'react'
import Space from '../../components/Space';

const RenderItem = ({ item }) => {
    console.log(item.USDFx * 83.41);

    return (
        <View style={{ backgroundColor: "#9DB7D9", paddingVertical: 20, paddingHorizontal: 10,borderRadius:5 }}>
            <Text style={{color:"#fff",fontSize:14}}>Price</Text>
            <View style={{flexDirection:"row",alignItems:"flex-end",}}>
                <Text style={{color:"#244C87",fontSize:14}}>INR</Text>
                <Space mH={2}/>
                <Text style={{color:"#244C87",fontSize:20,fontWeight:"600"}}>{(item.USDFx * 83.41).toFixed(2)}</Text>
            </View>
            <View style={{flexDirection:"row",alignItems:"flex-end",}}>
                <Text style={{color:"#244C87",fontSize:14}}>Quantity</Text>
                <Space mH={2}/>
                <Text style={{color:"#244C87",fontSize:15,fontWeight:"600"}}>{item.USDFx}{" "}USDFx</Text>
            </View>
        </View>
    )
}

export default RenderItem