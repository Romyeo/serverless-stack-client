const dev = {
  s3: {
    REGION: 'us-east-2',
    BUCKET: 'ac-notes-app-dev-api-dev-attachmentsbucket-19crdvybobo4p'
  },
  apiGateway: {
    REGION: 'us-east-2',
    URL: 'https://mg8etbpkc1.execute-api.us-east-2.amazonaws.com/dev'
  },
  cognito: {
    REGION: 'us-east-2',
    USER_POOL_ID: 'us-east-2_hgx2We5tj',
    APP_CLIENT_ID: '20oi7k4bhclvpp0evik1eble41',
    IDENTITY_POOL_ID: 'us-east-2:5c41d934-94bb-4f17-8a71-83b138b994da'
  },
  stripe: {
    STRIPE_KEY: 'pk_test_l5nXBG6h29awK9fgBJcuycKZ00YodDm2HB'
  }
};

const prod = {
  s3: {
    REGION: 'us-east-2',
    BUCKET: 'ac-notes-app-dev-api-prod-attachmentsbucket-mlsh655qjaoa'
  },
  apiGateway: {
    REGION: 'us-east-2',
    URL: 'https://jo8iuhjho5.execute-api.us-east-2.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-east-2',
    USER_POOL_ID: 'us-east-2_DVeMhsjGU',
    APP_CLIENT_ID: '5e72rmop7mruj6f9m21juh1pia',
    IDENTITY_POOL_ID: 'us-east-2:e9598d84-24fe-4826-b172-81a3a0d0cbc5'
  },
  stripe: {
    STRIPE_KEY: 'pk_test_l5nXBG6h29awK9fgBJcuycKZ00YodDm2HB'
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
  // Add common config values here
  attachment: {
    MAX_ATTACHMENT_SIZE: 5000000
  },
  ...config
};
