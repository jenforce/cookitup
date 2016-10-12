// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : process.env.FACEBOOK_APP_ID || '306010069772025', // your App ID
        'clientSecret'  : process.env.FACEBOOK_APP_SECRET || 'd51039eb79fde7d95a30b346f0997ffc', // your App Secret
        'callbackURL'   : process.env.FACEBOOK_CALLBACK_URL || 'http://localhost:3010/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : process.env.TWITTER_CONSUMER_KEY || 'YwCkdIDWuANTQukh4pYt39dPI',
        'consumerSecret'    : process.env.TWITTER_CONSUMER_SECRET || 'MXfpjOeYOH2Nq9vxXkNB4mRUhqUoTEoIid8gUxoZDJuq81u6MV',
        'callbackURL'       : process.env.TWITTER_CALLBACK_URL || 'http://127.0.0.1:3010/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};