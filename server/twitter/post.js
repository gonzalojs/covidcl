require('dotenv').config()
const Twitter = require('twitter')
// load image
const data = require('fs').readFileSync('server/twitter/screenshots/data.png')

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

// Make post request on media endpoint. Pass file data as media parameter

function postTweet(params) {
  client.post('media/upload', {
    media: data
  }, function (error, media, response) {

    if (!error) {

      // If successful, a media object will be returned.
      console.log(media);

      // Lets tweet it
      var status = {
        status: 'I am a tweet',
        media_ids: media.media_id_string // Pass the media id string
      }

      client.post('statuses/update', status, function (error, tweet, response) {
        if (!error) {
          console.log(tweet);
        }
      });

    }
  });

}

module.exports = postTweet