import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://s3-alpha-sig.figma.com/img/760b/ee0e/a2de999717c6ab0df8b2b6471a8ccd6f?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R5sczH1weP3VlJ25CRM2XsFSihZKQO3CGGzd~tlFsmNDtKTjB5OkjbiCxnJ9ILRH9urIni1Fsv5xzgzimZYlpJKN3YW18uccZeASn~LpBIlv-zqkpmy8QoJ0s8apTljshpuIZ1~Lr2OT5U-Cll4G85uVZTz3KHDis0sOObFHAvlV2aXqOFrqompH2iBu1wHYWlYPSizswljr7fL037mrPNAgMYyoiK-omckFRWE3FQDIFQ3jowo2lgy9~asMEBUEIO9HHjAm7gc4bFc4BHteEPb8SfMsrSuIvAxVsDkpnQXmWN449gij~ZmYFjSkHf0sT5zmXtSPhfEbdhdSQ5Qwpg__" }} resizeMode='contain' style={styles.imgStyle} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: "100%",
        // backgroundColor: "red"
    },
    imgStyle: {
        width: 80,
        height: 80,
    }
})