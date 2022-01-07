import React from 'react'
import { View, Text, FlatList, SafeAreaView, Button } from 'react-native'
import useControl from '../Hooks/useControl'


const Item = ({ title, desc, _id, price }) => {
  const { confirmOrder } = useControl()
  return (
    <View style={{ backgroundColor: "skyblue", marginVertical: 5, padding: 15, borderRadius: 10, marginHorizontal: 10, flexDirection: "row", width: "auto" }} >
      <View style={{ marginRight: 20, width: "70%" }}>

        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
        <Text>{desc.slice(0, 25)}..</Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: "#fff" }}>$ {price}</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button onPress={() => confirmOrder(_id)} title="Confirm" />
      </View>
    </View>
  )
}

export default function Orders() {
  const { orders } = useControl()
  const renderItem = ({ item }) => (
    <Item {...item} />
  );
  return (
    <SafeAreaView>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={item => item._id}

      />

      {/* <ListItem bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>Choose 🤯</ListItem.Title>
                </ListItem.Content>
                <ListItem.ButtonGroup
                    buttons={['Flower', 'Coco']}
                    selectedIndex={selectedButtonIndex}
                    onPress={(index) => setSelectedButtonIndex(index)}
                />
            </ListItem> */}
    </SafeAreaView>
  )
}
