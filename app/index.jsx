import { View, Text, FlatList, Image } from "react-native";
import MyText  from "../components/myText";

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
        <View className="bg-white mt-6 p-2 w-[95%] m-auto rounded-lg">
            <View className="flex flex-row text-wrap">
                <Image 
                source={{uri: "https://m.media-amazon.com/images/M/MV5BNzUyM2YyY2MtNzNlMS00MWU5LTgxNjAtNzZlNmI2NjU2NDZlXkEyXkFqcGc@._V1_SX300.jpg"}}
                className="w-40 max-w-40 h-52 resize-y"/>
                <View className="flex flex-col text-wrap shrink justify-start">
                    <MyText className="text-2xl ms-9">{item.title}</MyText>
                    {/* <MyText>{item.description}</MyText> */}
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
        progressViewOffset={true}
        ListHeaderComponent={<Header />}
        />
    )
}
export default Index;