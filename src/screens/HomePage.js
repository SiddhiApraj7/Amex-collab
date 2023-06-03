import { Image, View, Text, Button, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {NavigationPreloadManager} from "@react-navigation/native"


const HomePage = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView className="bg-white h-full">
            <View className="items-center mt-48 p-5 bg-white">

            
            <Image
            className="h-36 w-36 "
            
            source = {require('../../assets/e-rupi.png')}></Image>
            
            <Text className="font-bold text-xl p-3 mb-5">Welcome to E-Rupi Wallet</Text>
            <View className="flex-row gap-10">
                <View><Button onPress={() => {
                    navigation.navigate("login");
                }}className="text-black" title = "Login" color = "#82E0AA"></Button></View>
                <View><Button onPress={() => {
                    navigation.navigate("fingerprint");
                }}className="text-black" color = "#82E0AA" title="Register"></Button></View>
            
            </View>
            
        </View>
        </SafeAreaView>
        
    )
}
export default HomePage;