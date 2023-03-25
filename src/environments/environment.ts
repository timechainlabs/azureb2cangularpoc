export const environment = {
  production: false,
  msalConfig: {
      auth: {
          clientId: '2048e4eb-a47f-49a8-85e0-b5af022de161',
      }
  },
  apiConfig: {
      scopes: ['https://trueworldorganization.b2clogin.com/helloapi/demo.read'],
      uri: 'https://trueworldorganization.b2clogin.com/trueworldorganization.onmicrosoft.com'
  },
  b2cPolicies: {
      names: {
          signUpSignIn: "B2C_1_truworldsignin",
          resetPassword: "B2C_1_truworldsignin",
          editProfile: "B2C_1_truworldsignin"
      },
      authorities: {
          signUpSignIn: {
              authority: 'https://trueworldorganization.b2clogin.com/trueworldorganization.onmicrosoft.com/B2C_1_truworldsignin'
          },
          resetPassword: {
              authority: 'https://trueworldorganization.b2clogin.com/trueworldorganization.onmicrosoft.com/B2C_1_truworldsignin'
          },
          editProfile: {
              authority: "https://trueworldorganization.b2clogin.com/trueworldorganization.onmicrosoft.com/B2C_1_truworldsignin"
          }
      },
      authorityDomain: "trueworldorganization.b2clogin.com"
  }
};