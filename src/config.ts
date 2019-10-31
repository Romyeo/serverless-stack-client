export default {
  s3: {
    REGION: 'us-east-2',
    BUCKET: 'ac-notes-attachments'
  },
  apiGateway: {
    REGION: 'us-east-2',
    URL: 'https://94k23m8h62.execute-api.us-east-2.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-east-2',
    USER_POOL_ID: 'us-east-2_J083C4nPR',
    APP_CLIENT_ID: '4pdjqm1ngldf5hcv5ao86gjlq7',
    IDENTITY_POOL_ID: 'us-east-2:39291ebe-9b28-44bf-b19c-fcda96c1a513'
  },
  attachment: {
    MAX_ATTACHMENT_SIZE: 5000000
  }
};
