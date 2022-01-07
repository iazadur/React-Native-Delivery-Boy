import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, SafeAreaView, Button, TextInput } from 'react-native'
import useControl from '../Hooks/useControl'

const Item = ({ title, price, _id }) => {
    const [text, setText] = useState(null)
    const [show, setShow] = useState(false)
    useEffect(() => {
        if (text == '1234') {
            setShow(true)
        } else {
            setShow(false)
        }
    }, [text])
    const { delivriedOrder } = useControl()
    return (
        <View style={{ backgroundColor: "#f9f9f9", marginVertical: 5, padding: 15, borderRadius: 10, marginHorizontal: 10, flexDirection: "row", width: "auto" }} >
            <View style={{ marginRight: 20, width: "70%" }}>

                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: "goldenrod" }}>$ {price}</Text>
                <Text style={{ fontSize: 12, fontWeight: 'bold', }}>Use This Pin "1234" & confirm your Delivery</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <TextInput
                    style={{ height: 40, color: "#808080" }}
                    placeholder="Type OTP Number!"
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />
                {show && <Button onPress={() => delivriedOrder(_id)} title="Submit" />}
            </View>
        </View>
    );
}

export default function Confirm() {
    const { confirm } = useControl()
    const renderItem = ({ item }) => (
        <Item {...item} />
    );
    return (
        <SafeAreaView>
            <FlatList
                data={confirm}
                renderItem={renderItem}
                keyExtractor={item => item._id}
            />
        </SafeAreaView>
    )
}
