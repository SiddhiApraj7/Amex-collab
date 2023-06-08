
/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

const { PrismaClient } = require('./prisma-client')
const prisma = new PrismaClient()

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

//creat get method for items
app.post('/create-user', async function (req, res) {
  const { phoneNumber,firstName ,recoveryEmail , lastName,walletPin,bankName,bankAccountHolderName,accountNumber,isBeneficiary,isPvtOrg,isServiceProvider,walletIdBeneficiary,walletIdPvtOrg,walletIdServiceProvider,beneficiaryInfo,pvtOrgInfo,serviceProviderInfo} = req.body;
  const result = await prisma.users.create({
    data: {
       phoneNumber,
       firstName ,
       lastName,
       walletPin,
       bankName,
       bankAccountHolderName,
       accountNumber,
       isBeneficiary,
       isPvtOrg,
       isServiceProvider,
       walletIdBeneficiary,
       walletIdPvtOrg,
       walletIdServiceProvider,
       beneficiaryInfo,
       pvtOrgInfo,
       serviceProviderInfo,
       recoveryEmail,
       beneficiaryInfo: {
        create: beneficiaryInfo // Create the associated beneficiary record
      } 
    },
       include: {
          beneficiaryInfo: true, // Include the created beneficiary record in the response
          AvailableVoucher: true
        }
    
  });

  res.json({ success: 'post call succeed!', result })
});

app.patch('/create-user', async (req, res) => {
  const { phoneNumber } = req.body;
  const { firstName , lastName  ,recoveryEmail,walletPin,bankName,bankAccountHolderName,accountNumber,isBeneficiary,isPvtOrg,isServiceProvider,walletIdBeneficiary,walletIdPvtOrg,walletIdServiceProvider,beneficiaryInfo,pvtOrgInfo,serviceProviderInfo  } = req.body;

  try {
    const updatedUser = await prisma.users.update({
      where: { phoneNumber },
      data: { firstName , lastName ,recoveryEmail,walletPin,bankName,bankAccountHolderName,accountNumber,isBeneficiary,isPvtOrg,isServiceProvider,walletIdBeneficiary,walletIdPvtOrg,walletIdServiceProvider,beneficiaryInfo,pvtOrgInfo,serviceProviderInfo,
      beneficiaryInfo},
      include: {
        beneficiaryInfo: true // Include the updated beneficiary record in the response
      }

    });
    

    res.json({ success: 'patch call succeed!', updatedUser })
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Failed to update user' });
  }
});


// app.get('/create-user', async function (req, res) {





app.listen(3000, function () {
  console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
