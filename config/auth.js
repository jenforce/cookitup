// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : process.env.FACEBOOKAPPID || '306010069772025', // your App ID
        'clientSecret'  : process.env.FACEBOOKSECRET || 'a19fd4445756be1951d83dcf187f2eb5', // your App Secret
        'callbackURL'   : process.env.FACEBOOKCALLBACKURL || 'http://localhost:3010/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};