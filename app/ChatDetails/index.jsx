import { View, Text, TextInput, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native"
import React, { useState } from "react";
import send from '../assets/images/send.png'
import AI from '../assets/images/AI.png'
import xijun from '../assets/images/xijun.png'


export default ChatDetails = () => {

    const [value, onChangeText] = useState('问你所想...');

    const chatText = (text) => {
        onChangeText(text)
    }

    const data1 = [
        { type: 1, key: 'item1', mess: '遇事不决, 哈哈哈哈哈哈' },
        { type: 2, key: 'item2', mess: '便问春风，哈哈哈哈哈哈哈哈哈哈好吧' },
        { type: 2, key: 'item3', mess: '春风不语，哈哈哈哈' },
        { type: 1, key: 'item4', mess: '谨随己心，哈哈哈哈' },
    ]

    const [messList, setMessList] = useState(data1)



    return (
        <View style={styles.bodybox}>

            <FlatList
                data={messList}
                style={{height:80}}
                renderItem={({ item, index, separators }) => (
                    <TouchableOpacity
                        onPress={() => {

                        }}

                    >
                        {
                            item.type == 1 ? <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 20 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View>
                                        <Image source={AI} style={styles.inputImg} />
                                    </View>

                                    <View style={{ backgroundColor: '#eeeef8', padding: 10, borderRadius: 20, borderBottomLeftRadius: 0 }}>
                                        <Text style={{ lineHeight: 20, maxWidth: 240, color: '#000000' }}>
                                            {item.mess}
                                        </Text>
                                    </View>
                                </View>

                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ color: '#a4a4a4' }}>
                                        15:43
                                    </Text>
                                </View>

                            </View> : <View style={{ flexDirection: 'row', justifyContent: "flex-end", alignItems: 'center', marginBottom: 20 }}>

                                <View style={{ marginRight: 10 }}>
                                    <Text style={{ color: '#a4a4a4' }}>
                                        15:43
                                    </Text>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                                    <View style={{ backgroundColor: '#eeeef8', padding: 10, borderRadius: 20, borderBottomRightRadius: 0 }}>
                                        <Text style={{ lineHeight: 20, maxWidth: 240, color: '#000000' }}>
                                            {item.mess}
                                        </Text>
                                    </View>

                                    <View>
                                        <Image source={xijun} style={styles.inputImg} />
                                    </View>
                                </View>



                            </View>


                        }
                    </TouchableOpacity>
                )}

            />



            <View style={styles.container}>
                <TextInput
                    style={styles.inputbox}
                    // style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={chatText}
                    value={value}
                />

                <Image source={send} style={styles.inputImg} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bodybox: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 20,

        position: 'relative'
    },
    container: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputbox: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: '#f7f7f7',
        width: '90%',
    },
    inputImg: {
        width: 40,
        height: 40,
        borderRadius: 20
    }
})  