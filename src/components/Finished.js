import React from 'react'
import { View, Text, FlatList, SafeAreaView, Button } from 'react-native'
import useControl from '../Hooks/useControl'

const Item = ({ title, price }) => {
    return (
        <View style={{ backgroundColor: "lightskyblue", marginVertical: 5, padding: 15, borderRadius: 10, marginHorizontal: 10, flexDirection: "row", width: "auto" }} >
            <View style={{ marginRight: 20, width: "60%" }}>

                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: "#fff" }}>$ {price}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Button title="delivered" />
            </View>
        </View>
    );
}

export default function Finished() {
    const { finished } = useControl()
    const renderItem = ({ item }) => (
        <Item {...item} />
    );
    return (
        <SafeAreaView>
            <FlatList
                data={finished}
                renderItem={renderItem}
                keyExtractor={item => item._id}
            />
        </SafeAreaView>
    )
}
