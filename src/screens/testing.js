import { View, Text } from 'react-native'
import React from 'react'
import CryptoJS from "react-native-crypto-js";
 

const testing = () => {
    // Encrypt
let ciphertext = CryptoJS.AES.encrypt('+918812814136',"xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu").toString();
console.log(ciphertext);
 
// Decrypt
let bytes  = CryptoJS.AES.decrypt(ciphertext, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
let originalText = bytes.toString(CryptoJS.enc.Utf8);
console.log(originalText);
    
  return (
    
<View></View>
  )
}

export default testing