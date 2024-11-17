import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
const dataMovie = [{
    id: "1234",
    title: "Avenger End Game",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit . Totam suscipit tenetur mollitia alias dignissimos dolorem expedita pariatur  dicta reiciendis excepturi dolor voluptates enim voluptas ullam accusantium numquam fuga, molestias eligendi natus. Eos temporibus fuga nostrum magnam a quo alias tenetur? Tempore, laudantium nam dolores et repudiandae ex in tenetur quibusdam.",
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

const ListMovie = ({item}) => {
    return (
        <View className="bg-white justify-start flex-row mt-6 p-1">
            <View>
                <Image 
                source={{uri: "https://m.media-amazon.com/images/M/MV5BNzUyM2YyY2MtNzNlMS00MWU5LTgxNjAtNzZlNmI2NjU2NDZlXkEyXkFqcGc@._V1_SX300.jpg"}}
                className="w-40 h-52 resize-y"
                />
            </View>
            <View className="flex-col justify-start items-start">
                <View>
                    <Text>{item.title}</Text>
                </View>
                <View>
                    <Text 
                    adjustsFontSizeToFit={true}
                    numberOfLines={50}
                    accessible={true}>{item.description}</Text>
                </View>
            </View>
        </View>
    )
}
const Index = () => {
    return (
        <FlatList
        data={dataMovie}
        className="bg-base-1"
        renderItem={({item}) => <ListMovie item={item}/>}
        keyExtractor={move => move.id}
        ListHeaderComponent={<Header />}
        />
    )
}
export default Index;