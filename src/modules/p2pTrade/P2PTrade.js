import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Header from '../../components/Header'
import { styles } from './Style'
import { useSelector } from 'react-redux'
import RenderItem from './RenderItem'
import SegmentTab from './SegmentTab'
import Space from '../../components/Space'

const P2PTrade = () => {

    const tradeData = useSelector(state => state.trade.createOrderData);

    console.log(tradeData);

    return (
        <View style={styles.container}>
            <Header />
            <SegmentTab />
            <Space mV={10} />
            {tradeData.length === 0 ?
                <Text style={styles.noDataText}>No Data Available</Text>
                :
                <FlatList
                    data={tradeData}
                    keyExtractor={(_, index) => index}
                    renderItem={({ item }) => <RenderItem item={item} />}
                />}
        </View>
    )
}

export default P2PTrade