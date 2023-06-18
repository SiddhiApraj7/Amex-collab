import { Image, View, Text, Button, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {NavigationPreloadManager} from "@react-navigation/native"
import { AppContext } from "../../AppContext";
import { useContext } from "react";


const HomePage = () => {
    const navigation = useNavigation();
    const { phoneNumber, setPhoneNumber } = useContext(AppContext);

    return (
        <SafeAreaView className="bg-white h-full">
            <View className="items-center mt-48 p-5 bg-white">

            
            <Image
            className="h-16 w-3/4 mt-10 mb-4"
            
            source = {require('../../assets/e-rupi.png')}></Image>
            
            <Text className="font-medium tracking-widest text-xl p-3">Welcome to E-Rupi Wallet</Text>
            <View className="border-b-2 border-neutral-100">
            <Text className=" font-extralight tracking-widest text-xs">IN COLLABORATION WITH AMEX</Text>
            </View>
            <View className="flex-row gap-10 mt-2">
                <View><Button onPress={() => {
                    setPhoneNumber("");
                    navigation.navigate("login");
                }}className="text-black" title = "Login" color = "#82E0AA"></Button></View>
                <View><Button onPress={() => {
                    setPhoneNumber("");
                    navigation.navigate("fingerprint");
                }}className="text-black" color = "#82E0AA" title="Register"></Button></View>
            
            </View>
            
        </View>
        </SafeAreaView>
        
    )
}
export default HomePage;