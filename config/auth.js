// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : process.env.FACEBOOKAPPID || '306010069772025', // your App ID
        'clientSecret'  : process.env.FACEBOOKSECRET || 'a19fd4445756be1951d83dcf187f2eb5', // your App Secret
        'callbackURL'   : process.env.FACEBOOKCALLBACKURL || 'http://localhost:3010/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : process.env.TWITTERKEY || 'YwCkdIDWuANTQukh4pYt39dPI',
        'consumerSecret'    : process.env.TWITTERSECRET || 'MXfpjOeYOH2Nq9vxXkNB4mRUhqUoTEoIid8gUxoZDJuq81u6MV',
        'callbackURL'       : process.env.TWITTERCALLBACKURL || 'http://127.0.0.1:3010/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};