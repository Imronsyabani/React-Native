import { View, Text, FlatList, Image } from "react-native";

const dataMovie = [{
    id: "1234",
    title: "Avenger End Game",
    rating: 8.9
}]

const Header = () => {
    return (
        <View className="bg-base pl-1">
            <View className="justify-start items-start flex-row">
                <View>
                    <Image source={require("../assets/images/SM-LOGO.png")} className="h-16 w-28"/>
                </View>
            </View>
        </View>
    )
}

const ListMove = () => {
    return (
        <View className="bg-base-1">
            <View></View>
        </View>
    )
}

const Index = () => {
    return (
        <FlatList
        data={dataMovie}

        keyExtractor={move => move.id}
        ListHeaderComponent={<Header />}
        />
    )
}
export default Index;