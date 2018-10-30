// export default {
//     s3: {
//       REGION: "ap-southeast-1",
//       BUCKET: "lykeappimages"
//     },
//     apiGateway: {
//       REGION: "us-west-2",
//       URL: "https://lgsvndoduc.execute-api.us-west-2.amazonaws.com/beta"
//     },
//     cognito: {
//       REGION: "ap-southeast-1",
//       USER_POOL_ID: "ap-southeast-1_RIxPRkFTb",
//       APP_CLIENT_ID: "2ri4uqqq2a08gs49aqanb4vios",
//       IDENTITY_POOL_ID: "ap-southeast-1:8790a4c3-c641-4f7d-b957-443c9024f140"
//     }
//   };


  export default {
    s3: {
      REGION: "us-west-2",
      BUCKET: "pt4-iss-nus-bucket-image"
    },
    apiGateway: {
      REGION: "us-west-2",
      URL: "https://lgsvndoduc.execute-api.us-west-2.amazonaws.com/beta"
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_0ZclfoXLd",
      APP_CLIENT_ID: "rtc79abuc84atqhcrie6klg4i",
      IDENTITY_POOL_ID: "us-west-2:97f7a408-0ae0-45e8-8b37-c040791688de"
    },
    domain:'http://locahost/'
  };

//   Auth: {
//     // REQUIRED - Amazon Cognito Identity Pool ID
//         identityPoolId: 'ap-southeast-1:8790a4c3-c641-4f7d-b957-443c9024f140',
//     // REQUIRED - Amazon Cognito Region
//         region: 'ap-southeast-1',
//     // OPTIONAL - Amazon Cognito User Pool ID
//         userPoolId: 'ap-southeast-1_RIxPRkFTb',
//     // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
//         userPoolWebClientId: '2ri4uqqq2a08gs49aqanb4vios',
//     // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
//         mandatorySignIn: true,
//     // OPTIONAL - Configuration for cookie storage
//         cookieStorage: {
//         // REQUIRED - Cookie domain (only required if cookieStorage is provided)
//             domain: 'lykepicapp.auth.ap-southeast-1.amazoncognito.com',
//         // OPTIONAL - Cookie path
//             path: '/',
//         // OPTIONAL - Cookie expiration in days
//             expires: 365,
//         // OPTIONAL - Cookie secure flag
//             secure: true
//         },
//        // oauth: oauth
//     }