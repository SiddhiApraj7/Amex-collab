import { View, Text, SafeAreaView, TextInput, Image, Button, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react'
import QRCode from 'react-native-qrcode-svg';
import { AppContext } from "../../AppContext";
import { useContext, useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
import { CognitoUserPool } from 'amazon-cognito-identity-js';

// voucher redemmed 

const VoucherQR = ({ route }) => {
    const { voucherId,voucherRedeemed } = route.params;
    const { phoneNumber, setPhoneNumber } = useContext(AppContext);
    const [voucher, setVoucher] = useState({});
    const [createdDate, setCreatedDate] = useState('');
    const [createdTime, setCreatedTime] = useState('');
    const [beneficiaryName, setBeneficiaryName] = useState('');
    const [serviceProviderName, setserviceProviderName] = useState('');
    const [serviceProviderTag, setserviceProviderTag] = useState('');
    const [pvtOrgName, setPvtOrgName] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getVoucherInfo();
    }, []);

    async function getVoucherInfo() {
        try {
            const response = await axios.get(`http://192.168.1.45:3000/get-voucher/${voucherId}`);
            console.log(response.data);
            setVoucher(response.data);
            const beneficiaryname= ` ${response.data.BeneficiaryUser.Users.firstName} ${response.data.BeneficiaryUser.Users.lastName}`
            setBeneficiaryName(beneficiaryname);
            const serviceProviderName = response.data.ServiceProviderUser.BusinessName;
            setserviceProviderName(serviceProviderName);
            const serviceProviderTag = response.data.ServiceProviderUser.BusinessTag;
            setserviceProviderTag(serviceProviderTag);
            const pvtOrgName = response.data.PvtOrgBy.CompanyName;
            setPvtOrgName(pvtOrgName);
            console.log(beneficiaryname);
            const timestamp = response.data.voucherCreatedAt;
            const date = new Date(timestamp);

            const year = date.getFullYear();
            const month = ("0" + (date.getMonth() + 1)).slice(-2);
            const day = ("0" + date.getDate()).slice(-2);
            const hours = ("0" + date.getHours()).slice(-2);
            const minutes = ("0" + date.getMinutes()).slice(-2);
            const seconds = ("0" + date.getSeconds()).slice(-2);

            const formattedDate = `${year}-${month}-${day}`;
            const formattedTime = `${hours}:${minutes}:${seconds}`;
            setCreatedDate(formattedDate);
            setCreatedTime(formattedTime);
        } catch (error) {
            console.error(error);
            console.log(error);
            // Handle error and navigation logic
        } finally {
            setIsLoading(false);
          }
    }

    if (isLoading) {
        return (
          <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#0000ff" />
          </SafeAreaView>
        );
      }

    return (
        <SafeAreaView className="bg-white h-full">
            <View className="flex-col h-full justify-between">
                <View className="items-center  bg-white">
                    <Image
                        className="h-36 w-96 mt-5"

                        source={require('../../assets/e-rupi.png')}></Image>
                    <View className="bg-blue-200 h-3/4 w-11/12  rounded-md">
                    <View className=" items-center">
                        <Text className="font-semibold font mt-2">Unique Voucher ID :</Text>
                        {(voucherRedeemed==false)&&(<Text> {voucherId}</Text>)}
                        <View className="mt-5">
                            {(voucherRedeemed==false)&&(<QRCode
                                value={voucherId}
                                color={'#606060'}
                                backgroundColor={'transparent'}
                                logo={require('../../assets/npci.jpg')}
                                logoSize={20}
                                size={200}
                            />)}
                        </View>
                        </View>
                        <View className="ml-8 mr-8">
                        <View className="flex-row justify-between"><Text className="font-semibold mt-2">Voucher Amount:</Text><Text className=" font mt-2">{voucher.voucherAmount}</Text></View>
                        <View className="flex-row justify-between"><Text className="font-semibold mt-2">Beneficiary Name:</Text><Text className=" font mt-2">{beneficiaryName}</Text></View>
                        <View className="flex-row justify-between"><Text className="font-semibold mt-2">Service Provider:</Text><Text className=" font mt-2">{serviceProviderName}</Text></View>
                        <View className="flex-row justify-between"><Text className="font-semibold mt-2">Service Provider BusinessTag:</Text><Text className=" font mt-2">{serviceProviderTag}</Text></View>
                        <View className="flex-row justify-between"><Text className="font-semibold mt-2">Created By:</Text><Text className=" font mt-2">{pvtOrgName}</Text></View>
                        <View className="flex-row justify-between"><Text className="font-semibold mt-2">Voucher Amount:</Text><Text className=" font mt-2">{voucher.voucherAmount}</Text></View>
                        <View className="flex-row justify-between"><Text className="font-semibold mt-2">Date of creation:</Text><Text className=" font mt-2">{createdDate}</Text></View>
                        <View className="flex-row justify-between"><Text className="font-semibold mt-2">Time of creation:</Text><Text className=" font mt-2">{createdTime}</Text></View>
                       {(voucherRedeemed==true)&& (<View className="flex-row justify-center tracking-widest"><Text className="font-semibold mt-2 text-red-500">VOUCHER REDEEMED</Text></View>)}
                        </View>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default VoucherQR