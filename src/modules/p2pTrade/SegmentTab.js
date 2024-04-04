import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './Style';

const SegmentTab = () => {

    const [changeTab, setChangeTab] = useState(1);

    return (
        <View style={styles.segmentContainer}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => setChangeTab(1)} style={{ width: "49%", backgroundColor: changeTab == 1 ? "#244C87" : "#9DB7D9", paddingVertical: 15, borderRadius: 5 }}>
                <Text style={{ textAlign: "center", color: "#fff", fontSize: 16, fontWeight: "500" }}>P2P Trade</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={() => setChangeTab(2)} style={{ width: "49%", paddingVertical: 15, borderRadius: 5, backgroundColor: changeTab == 2 ? "#244C87" : "#9DB7D9" }}>
                <Text style={{ textAlign: "center", color: "#fff", fontSize: 16, fontWeight: "500" }}>Express</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SegmentTab