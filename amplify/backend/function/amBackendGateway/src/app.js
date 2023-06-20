
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
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(awsServerlessExpressMiddleware.eventContext())


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

//creat get method for items
app.post('/create-user', async function (req, res) {
  const { phoneNumber, firstName, recoveryEmail, lastName, walletPin, salt, bankName, bankAccountHolderName, accountNumber, isBeneficiary, isPvtOrg, isServiceProvider, walletIdBeneficiary, walletIdPvtOrg, walletIdServiceProvider, beneficiaryInfo, pvtOrgInfo, serviceProviderInfo } = req.body;
  const result = await prisma.users.create({
    data: {
      phoneNumber,
      firstName,
      lastName,
      walletPin,
      salt,
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

    },
    include: {
      beneficiaryInfo: true, // Include the created beneficiary record in the response
    }

  });

  res.json({ success: 'post call succeed!', result })
});

app.patch('/create-user', async (req, res) => {
  const { phoneNumber } = req.body;
  const { firstName, lastName, recoveryEmail, walletPin, salt, bankName, bankAccountHolderName, accountNumber, isBeneficiary, isPvtOrg, isServiceProvider, walletIdBeneficiary, walletIdPvtOrg, walletIdServiceProvider, beneficiaryInfo, pvtOrgInfo, serviceProviderInfo } = req.body;

  try {
    const updatedUser = await prisma.users.update({
      where: { phoneNumber },
      data: {
        firstName, lastName, recoveryEmail, walletPin, salt, bankName, bankAccountHolderName, accountNumber, isBeneficiary, isPvtOrg, isServiceProvider, walletIdBeneficiary, walletIdPvtOrg, walletIdServiceProvider, beneficiaryInfo, pvtOrgInfo, serviceProviderInfo,
        beneficiaryInfo
      },
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


app.post('/get-role', async function (req, res) {
  const { phoneNumber } = req.body;

  try {
    const user = await prisma.users.findFirst({
      where: {
        phoneNumber
      },
      select: {
        isBeneficiary: true,
        isServiceProvider: true,
        isPvtOrg: true,

      }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ isBeneficiary: user.isBeneficiary, isServiceProvider: user.isServiceProvider, isPvtOrg: user.isPvtOrg });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve isBeneficiary field' });
  }
});


app.post('/create-beneficiary', async function (req, res) {
  const phoneNumber = req.body.phoneNumber; // Extract phone number from the request body

  try {
    // Find the user based on the phone number
    const user = await prisma.users.findUnique({
      where: {
        phoneNumber: phoneNumber
      }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const beneficiary = await prisma.beneficiary.create({
      data: {
        Users: {
          connect: {
            id: user.id
          }
        }
      }
    });

    // Update the beneficiaryInfo field in the Users model
    const updatedUser = await prisma.users.update({
      where: {
        id: user.id
      },
      data: {
        isBeneficiary: true,
        beneficiaryInfo: {
          connect: {
            beneficiaryId: beneficiary.beneficiaryId
          }
        }
      },
      include: {
        beneficiaryInfo: true // Include the updated beneficiary record in the response
      }
    });

    res.status(200).json(beneficiary);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create beneficiary' });
  }
});



app.delete('/delete-all-data', async (req, res) => {
  try {
    await prisma.voucher.deleteMany();
    await prisma.beneficiary.deleteMany();
    await prisma.pvtOrg.deleteMany();
    await prisma.serviceProvider.deleteMany();
    await prisma.users.deleteMany();
    res.json({ success: 'All data deleted successfully' });
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).json({ error: 'Failed to delete data' });
  }
});


app.post('/create-pvtOrg', async function (req, res) {
  const { phoneNumber, CompanyName, positionInCompany } = req.body; // Extract phone number from the request body

  try {
    // Find the user based on the phone number
    const user = await prisma.users.findUnique({
      where: {
        phoneNumber: phoneNumber
      }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const pvtOrg = await prisma.pvtOrg.create({
      data: {
        CompanyName,
        positionInCompany,
        Users: {
          connect: {
            id: user.id
          }
        }
      }
    });

    // Update the pvtOrgInfo field in the Users model
    const updatedUser = await prisma.users.update({
      where: {
        id: user.id
      },
      data: {
        isPvtOrg: true,
        pvtOrgInfo: {
          connect: {
            privateOrgId: pvtOrg.privateOrgId
          }
        }
      }
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create private organization' });
  }
});



app.post('/create-serviceProvider', async function (req, res) {
  const { phoneNumber, BusinessName, PositionInBusiness, BusinessTag } = req.body; // Extract phone number from the request body

  try {
    // Find the user based on the phone number
    const user = await prisma.users.findUnique({
      where: {
        phoneNumber: phoneNumber
      }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const serviceProvider = await prisma.serviceProvider.create({
      data: {
        BusinessName,
        PositionInBusiness,
        BusinessTag,
        Users: {
          connect: {
            id: user.id
          }
        }
      }
    });

    // Update the serviceProviderInfo field in the Users model
    const updatedUser = await prisma.users.update({
      where: {
        id: user.id
      },
      data: {
        isServiceProvider: true,
        serviceProviderInfo: {
          connect: {
            serviceProviderId: serviceProvider.serviceProviderId
          }
        },

      }
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create service provider' });
  }
});

app.patch('/create-serviceProvider', async (req, res) => {
  try {
    const { phoneNumber, BusinessName, PositionInBusiness, BusinessTag } = req.body;

    const serviceProvider = await prisma.serviceProvider.findFirst({
      where: {
        Users: {
          phoneNumber,
        },
      },
    });

    if (!serviceProvider) {
      return res.status(404).json({ error: 'Service provider not found' });
    }

    const updatedServiceProvider = await prisma.serviceProvider.update({
      where: {
        serviceProviderId: serviceProvider.serviceProviderId,
      },
      data: {
        BusinessName,
        PositionInBusiness,
        BusinessTag,
      },
    });

    res.status(200).json({ success: 'Patch call succeeded!', updatedServiceProvider });
  } catch (error) {
    console.error('Error updating service provider:', error);
    res.status(500).json({ error: 'Failed to update service provider' });
  }
});


app.patch('/create-pvtOrg', async (req, res) => {
  try {
    const { phoneNumber, CompanyName, positionInCompany } = req.body;

    const pvtOrg = await prisma.pvtOrg.findFirst({
      where: {
        Users: {
          phoneNumber,
        },
      },
    });

    if (!pvtOrg) {
      return res.status(404).json({ error: 'Private Organisation not found' });
    }

    const updatedPvtOrg = await prisma.pvtOrg.update({
      where: {
        privateOrgId: pvtOrg.privateOrgId,
      },
      data: {
        CompanyName,
        positionInCompany
      },
    });

    res.status(200).json({ success: 'Patch call succeeded!', updatedPvtOrg });
  } catch (error) {
    console.error('Error updating pvtOrg:', error);
    res.status(500).json({ error: 'Failed to update pvtOrg' });
  }
});


app.post('/create-voucher', async function (req, res) {
  const { 
    voucherAmount, 
    PhoneNumberSP, 
    PhoneNumberB, 
    PhoneNumberPvtOrg, 
    voucherRedeemed
  } = req.body;
  console.log('req.body', req.body);

  try {
    const serviceProvider = await prisma.serviceProvider.findFirst({
      where: {
        Users: {
          phoneNumber: PhoneNumberSP
        }

      }
    });
    console.log('serviceProvider', serviceProvider);

    if (!serviceProvider) {
      return res.status(404).json({ error: 'Service provider not found' });
    }

    const beneficiary = await prisma.beneficiary.findFirst({
      where: {
        Users: {
          phoneNumber: PhoneNumberB
        }
      }
    });
    console.log('beneficiary', beneficiary);

    if (!beneficiary) {
      return res.status(404).json({ error: 'Beneficiary not found' });
    }

    const pvtOrg = await prisma.pvtOrg.findFirst({
      where: {
        Users: {
          phoneNumber: PhoneNumberPvtOrg
        }
      }
    });
    console.log('pvtOrg', pvtOrg);

    if (!pvtOrg) {
      return res.status(404).json({ error: 'Private organization not found' });
    }

    const createdVoucher = await prisma.voucher.create({
      data: {
        voucherAmount: voucherAmount,
        voucherRedeemed,
        ServiceProviderUser: {
          connect: {
            serviceProviderId: serviceProvider.serviceProviderId
          }
        },
        BeneficiaryUser: {
          connect: {
            beneficiaryId: beneficiary.beneficiaryId
          }
        },
        PvtOrgBy: {
          connect: {
            privateOrgId: pvtOrg.privateOrgId
          }
        }
      },
      include: {
        BeneficiaryUser: true,
        ServiceProviderUser: true,
        PvtOrgBy: true
      }
    });
    console.log('createdVoucher', createdVoucher);
    res.status(200).json({ createdVoucher });



  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create voucher' });
  };


});



app.patch('/create-voucher', async (req, res) => {
  try {
    const { voucherId } = req.body;
    // Create the voucher using the provided voucherId
    const updatedvoucher = await prisma.voucher.update({
      where: {
        voucherId
      },
      data: {
        voucherRedeemedDate: new Date(),
        voucherRedeemed: true,

      },
    });

    res.status(200).json(updatedvoucher);
  } catch (error) {
    console.error('Error updating voucher:', error);
    res.status(500).json({ error: 'Failed to update voucher' });
  }
});

app.get('/get-beneficiary-info/:phoneNumber', async (req, res) => {
  const { phoneNumber } = req.params;

  try {
    const beneficiary = await prisma.beneficiary.findFirst({
      where: {
        Users: {
          phoneNumber: phoneNumber
        }
      },
      select: {
        Users:{
          select: {
            firstName: true,
            lastName: true,
            bankName: true
        }
      }
      }
    });

    if (beneficiary) {
      res.status(200).json(beneficiary.Users);
    } else {
      res.status(404).json({ message: 'Beneficiary not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/get-serviceProvider-info/:phoneNumber', async (req, res) => {
  const { phoneNumber } = req.params;

  try {
    const serviceProvider = await prisma.serviceProvider.findFirst({
      where: {
        Users: {
          phoneNumber: phoneNumber
        }
      },
      select: {
        Users: {
          select: {
            firstName: true,
            lastName: true,
            bankName: true,

          }
        },
        BusinessName: true,
        PositionInBusiness: true,
        BusinessTag: true,

      }
    });

    if (serviceProvider && serviceProvider.Users) {
      res.status(200).json(serviceProvider);

    } else {
      res.status(404).json({ message: 'Service Provider not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/get-pvtOrg-info/:phoneNumber', async (req, res) => {
  const { phoneNumber } = req.params;

  try {
    const pvtOrg = await prisma.pvtOrg.findFirst({
      where: {
        Users: {
          phoneNumber: phoneNumber
        }
      },
      select: {
        Users: {
          select: {
            firstName: true,
            lastName: true,
            bankName: true,

          }
        },
        CompanyName: true,
        positionInCompany: true

      }
    });

    if (pvtOrg && pvtOrg.Users) {
      res.status(200).json(pvtOrg);

    } else {
      res.status(404).json({ message: 'Pvt Organisation not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/get-user-info/:phoneNumber', async (req, res) => {
  const { phoneNumber } = req.params;

  try {
    const user = await prisma.Users.findFirst({
      where: {
         phoneNumber: phoneNumber
      },
      select: {
            firstName: true,
            lastName: true,
            bankName: true,
            isBeneficiary: true,
            isServiceProvider : true,
            isPvtOrg : true,
            bankAccountHolderName : true,
            accountNumber : true,
            walletPin : true


          }
    });

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  const { phoneNumber, walletPin } = req.body;

  try {
    const user = await prisma.Users.findFirst({
      where: {
        phoneNumber: phoneNumber
      }
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPinMatched = user.walletPin === walletPin;

    res.status(200).json({ isPinMatched });
  } catch (error) {
    console.error('Error checking wallet PIN:', error);
    res.status(500).json({ error: 'Failed to check wallet PIN' });
  }
});

app.post('/check-phone', async function (req, res) {
  const { phoneNumber } = req.body;

  try {
    const user = await prisma.users.findFirst({
      where: {
        phoneNumber: phoneNumber
      }
    });

    if (user) {
      res.json({ exists: true });
    } else {
      res.json({ exists: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to check phone number' });
   }
});

app.get('/all-service-providers', async (req, res) => {
  try {
    const serviceProviders = await prisma.serviceProvider.findMany({
      select: {
        
        BusinessName: true,
        BusinessTag: true,
        PositionInBusiness: true,
        serviceProviderId : true,
        Users: {
          select: {
            phoneNumber: true,
            firstName: true,
            lastName: true,
          }
        }
      }
    });

    res.status(200).json(serviceProviders);
  } catch (error) {
    console.error('Error retrieving service providers:', error);
    res.status(500).json({ error: 'Failed to retrieve service providers' });
  }
});

app.get('/get-voucher-info/:voucherId', async (req, res) => {
  const { voucherId } = req.params;

  try {
    const voucher = await prisma.Voucher.findFirst({
      where: {
         voucherId: voucherId
      },
      select: {
            voucherAmount: true,
            voucherRedeemed : true,
            PvtOrgBy: {
              select: {
                CompanyName: true
              }
            },
            BeneficiaryUser: {
              select: {
                Users: {
                  select: {
                    firstName: true,
                    lastName: true
                  }
                }
              }
            },
            ServiceProviderUser : {
              select : {
                Users : {
                  select : {
                    phoneNumber : true,
                  }
                }
              }
            }
          }
        });
    
        if (voucher && voucher.BeneficiaryUser && voucher.PvtOrgBy) {
          res.status(200).json(voucher);
        } else {
          res.status(404).json({ message: 'Voucher not found' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
      }
    });

app.get('/get-voucher/:voucherId', async (req, res) => {
  const { voucherId } = req.params;

  try {
    const voucher = await prisma.Voucher.findFirst({
      where: {
         voucherId: voucherId
      },
      include: {
        PvtOrgBy: true,
        BeneficiaryUser: {
          select: {
            Users: {
              select: {
                firstName: true,
                lastName: true
              }
            }
          }
        },
        ServiceProviderUser: true,
      }
        });

        if (voucher && voucher.BeneficiaryUser && voucher.PvtOrgBy) {
          res.status(200).json(voucher);
        } else {
          res.status(404).json({ message: 'Voucher not found' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
      }
    });


app.post('/available-vouchers', async (req, res) => {
  const { phoneNumber } = req.body;

  try {
    const beneficiary = await prisma.beneficiary.findFirst({
      where: {
        Users: {
          phoneNumber,
        },
      },
      include: {
        AvailableVoucher: {
          include: {
            PvtOrgBy: true,
            BeneficiaryUser : true,
            ServiceProviderUser: true,
          },
        },
      },
    });

    if (!beneficiary) {
      return res.status(404).json({ message: 'Beneficiary not found' });
    }

    const vouchers = beneficiary.AvailableVoucher || [];
    res.json({ vouchers });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.post('/vouchers-created', async (req, res) => {
  const { phoneNumber } = req.body;

  try {
    const pvtOrg = await prisma.pvtOrg.findFirst({
      where: {
        Users: {
          phoneNumber,
        },
      },
      include: {
        VouchersCreated: {
          include: {
            PvtOrgBy: true,
            BeneficiaryUser: {
              select: {
                Users: {
                  select: {
                    firstName: true,
                    lastName: true
                  }
                }
              }
            },
            ServiceProviderUser: true,
          },
        },
      },
    });

    if (!pvtOrg) {
      return res.status(404).json({ message: 'pvtOrg not found' });
    }

    const vouchers = pvtOrg.VouchersCreated || [];
    res.json({ vouchers });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/vouchers-requested', async (req, res) => {
  const { phoneNumber } = req.body;

  try {
    const serviceProvider = await prisma.serviceProvider.findFirst({
      where: {
        Users: {
          phoneNumber,
        },
      },
      include: {
        VouchersRequested: {
          include: {
            PvtOrgBy: true,
            BeneficiaryUser : {
              select: {
                Users: {
                  select: {
                    firstName: true,
                    lastName: true
                  }
                }
              }
            },
            ServiceProviderUser: true,
          },
        },
      },
    });

    if (!serviceProvider) {
      return res.status(404).json({ message: 'serviceProvider not found' });
    }

    const vouchers = serviceProvider.VouchersRequested || [];
    res.json({ vouchers });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




app.listen(3000, function () {
  console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app