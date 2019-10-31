export default {
  s3: {
    REGION: 'us-east-2',
    BUCKET: 'ac-note-attachments'
  },
  apiGateway: {
    REGION: 'us-east-2',
    URL: 'https://94k23m8h62.execute-api.us-east-2.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-east-2',
    USER_POOL_ID: 'us-east-2_J083C4nPR',
    APP_CLIENT_ID: '4pdjqm1ngldf5hcv5ao86gjlq7',
    IDENTITY_POOL_ID: 'us-east-2:c5c75644-1773-42c8-9866-0b1a793d1a36'
  },
  attachment: {
    MAX_ATTACHMENT_SIZE: 5000000
  }
};
