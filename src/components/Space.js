import React from 'react'
import { View } from 'react-native'

const Space = ({ mV, mH, mT, mB }) => {
    return (
        <View style={{
            marginVertical: mV,
            marginHorizontal: mH,
            // marginTop: mT,
            // marginBottom: mB
        }} />
    )
}

export default Space

Space.defaultProps = {
    mV: 0,
    mH: 0,
    // mT: 0,
    // mB: 0
}