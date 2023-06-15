import { Image, View, Text, Button, SafeAreaView, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {NavigationPreloadManager} from "@react-navigation/native"
import {BarCodeScanner} from 'expo-barcode-scanner';
import {useState, useEffect} from "react";
const QRScanner = () => {
    const navigation = useNavigation();
    const [hasPermission, setHasPermission] = useState(false);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Not yet scanned')

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
    console.log('Type: ' + type + '\nData: ' + data)
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View className="">
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

    return (
        <SafeAreaView className="bg-white h-full">
            <View className="items-center mt-6 p-5 bg-white">

            
            <Image
            className="h-36 w-36"
            
            source = {require('../../assets/e-rupi.png')}></Image>
            
            <View className="">
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={{ height: 450, width: 450 }} />
            </View>
            <Text style={styles.maintext}>{text}</Text>

            {scanned && 
            <View className="flex-row gap-5">
                <View>
                <Button title={'Scan Again'} onPress={() => setScanned(false)} color='orange' />
                </View>
              <View>
              <Button title={'Redeem'} onPress={() => setScanned(true)} color='lightblue' />
              </View>
              
              </View>}
            
        </View>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
//   barcodebox: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 300,
//     width: 300,
//     overflow: 'hidden',
//     borderRadius: 30,
//     backgroundColor: 'tomato'
//   }
});

export default QRScanner;