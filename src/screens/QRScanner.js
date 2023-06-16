import { Image, View, Text, Button, SafeAreaView, StyleSheet, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationPreloadManager } from "@react-navigation/native"
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useState, useEffect } from "react";
import axios from 'axios';
import { Alert } from 'react-native';


const QRScanner = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [id, setId] = useState(null);
  const [error, setError] = useState('');

  const [BfirstName, setBFirstName] = useState('');
  const [BlastName, setBLastName] = useState('');

  const [CompanyName, setCompanyName] = useState('');
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  };

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    //setText(data);
    fetchVoucherInfo(data);
    setId(data);
   console.log(id);
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
  const updateVoucher = async (id) => {
  
    setIsLoading(true);
     try {
      
      const response = await axios.patch("http://192.168.29.208:3000/create-voucher", {
        voucherId : id
        
      });
      console.log(response.data);
      Alert.alert("Voucher has been redeemed!");
      setTimeout(() => {
        setError('');
        navigation.navigate('serviceProviderHomePage'); // Replace 'Login' with the name of your login screen
      }, 2000); 
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  async function fetchVoucherInfo(data) {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://192.168.29.208:3000/get-voucher-info/${data}`);
      console.log(response.data);
      const voucher = response.data;

      setCompanyName(voucher.PvtOrgBy.CompanyName);
      setAmount(voucher.voucherAmount);
      setBFirstName(voucher.BeneficiaryUser.Users.firstName);
      setBLastName(voucher.BeneficiaryUser.Users.lastName);
    } catch (error) {
      console.error(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function ConfirmRedeem(data) {

    Alert.alert(
      'Sure you want to redeem the voucher?',
      'Press OK to continue',
      [
        {
          text: 'OK',
          onPress: () => {
            // Call the function you want to execute here
            console.log('OK pressed, calling function...');
            updateVoucher(data)
            // Your function code here
          }
        }
      ]
    );

  }


  return (
    <SafeAreaView className="bg-white h-full">
      <View className="items-center mt-6 p-5 bg-white">


        <Image
          className="h-36 w-36"

          source={require('../../assets/e-rupi.png')}></Image>

        <View className="">
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 400, width: 450 }} />
        </View>

        {isLoading ? (
          // Render loader when loading is true
          <ActivityIndicator size="large" color="#0000ff" className="mt-7" />
        ) : scanned ? (
          <View className="flex-col space-y-5">
            <View className="flex-col bg-blue-200 h-26 p-2 mt-2 space-y-3 rounded-lg">
              <Text className=" font-light text-sm"> Beneficiary Name : {BfirstName} {BlastName}</Text>
              <Text className=" font-light text-sm"> Private Org: {CompanyName}</Text>
              <Text className=" font-light text-sm"> Amount: {amount}</Text>
            </View>
            <View className="flex-row gap-5">
              <View>
                <Button title={'Scan Again'} onPress={() => setScanned(false)} className="text-black" color="#81C3FD" />
              </View>
              <View>
                <Button title={'Redeem'} onPress={() => { ConfirmRedeem(id) }} className="text-black" color="#8EA2FD" />
              </View>

            </View>
          </View>
        ) : null}

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