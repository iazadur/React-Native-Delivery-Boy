import React from 'react'
import { View, Text } from 'react-native'
import data from '../faqData/faqData.json'

export default function Orders() {

    return (
        <View style={{ display: "flex" }}>
            {data.map((single, id) => <Text key={id}>
                {single.title}
            </Text>)}
        </View>
    )
}
