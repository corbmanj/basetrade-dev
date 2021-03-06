var express = require('express')
var path = require('path')
// var compression = require('compression')
require('isomorphic-fetch')
var bodyParser = require('body-parser')
var cors = require('cors')

var app = express()

// app.use(compression())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//send authCallback from twitch
app.get('/authCallback', function(req, res) {
  console.log('got auth response', req.query)
  var code = req.query.code
  var state = req.query.state
  if (state === clientSecret) {
    res.redirect(`/stream/${code}`)
  }
})

app.get('/twitch/stream/:streamID', function (req, res) {
  if (process.env.NODE_ENV !== 'production') {
    return res.status(200).json('weather')
  }
  try {
    // Retrieves location coordinates (latitude and longitude) from client request query
    var url = `https://api.twitch.tv/kraken/streams/${req.params.streamID}`
    console.log('Fetching '+url);

    fetch(url, {headers: {
      "Client-ID": twitchClientID
    }})
      .then(function(response) {
        if (response.status != 200) {
          res.status(response.status).json({'message': 'Bad response from Twitch server'})
        }
        return response.json()
      })
      .then(function(payload) {
        res.status(200).json(payload.stream)
      })
  } catch(err) {
    console.log("Errors occurred requesting Twitch API", err);
    res.status(500).json({'message': 'Errors occurred requesting Twitch API', 'details' : err})
  }
})

// send all requests to index.html so browserHistory in React Router works
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

var twitchClientID = 'mafllvn2ycrixc59ygrh12orgg03p4'

var clientSecret = '950g9loz5s9jsvnm861g4aizw74h6y'

// Following is an example to proxy client request to DarkSky forecast API
// var DARKSKY_SECRET_KEY = 'd309e32e8c63522fabf78f33fac01ca4'
//
// var darksky_prefix = 'https://api.darksky.net/forecast/'+DARKSKY_SECRET_KEY+'/'
// var darksky_excludes = '?exclude=currently,hourly,flags'
// app.get('/api/darksky/:lat/:lng/:time', function(req, res) {
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header("Access-Control-Allow-Headers", "X-Requested-With")
//   if (process.env.NODE_ENV !== 'production') {
//     return res.status(200).json(weather)
//   }
//   try {
//     // Retrieves location coordinates (latitude and longitude) from client request query
//     var coordinates = req.params.lat+','+req.params.lng+','+req.params.time
//     var url = darksky_prefix + coordinates + darksky_excludes;
//     console.log('Fetching '+url);
//
//     fetch(url)
//       .then(function(response) {
//         if (response.status != 200) {
//           res.status(response.status).json({'message': 'Bad response from Dark Sky server'})
//         }
//         return response.json()
//       })
//       .then(function(payload) {
//         res.status(200).json(payload)
//       })
//   } catch(err) {
//     console.log("Errors occurs requesting Dark Sky API", err);
//     res.status(500).json({'message': 'Errors occurs requesting Dark Sky API', 'details' : err})
//   }
// })
//
// var google_prefix = 'https://maps.googleapis.com/maps/api/geocode/json?address='
// app.get('/api/googleapis/maps/:cityState', function(req, res) {
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header("Access-Control-Allow-Headers", "X-Requested-With")
//   if (process.env.NODE_ENV !== 'production') {
//     return res.status(200).json(city)
//   }
//   try {
//     var coordinates = req.params.cityState
//     var url = google_prefix + coordinates
//     var key = 'AIzaSyDZt10DXNu-bVGAvZ2NLt75FK_ftYgEr1k'
//     url = url + '&key=' + key
//     console.log('Fetching '+url)
//
//     fetch(url)
//       .then(function(response) {
//         if (response.status != 200) {
//           res.status(response.status).json({'message': 'Bad response from Dark Sky server'});
//         }
//         return response.json();
//       })
//       .then(function(payload) {
//         res.status(200).json(payload);
//       });
//   } catch(err) {
//     console.log("Errors occurs requesting Google Location API", err);
//     res.status(500).json({'message': 'Errors occurs requesting Dark Sky API', 'details' : err});
//   }
// })
//
// app.use('/db', dbRoutes);

var PORT = process.env.PORT || 8082
app.listen(PORT, function() {
  console.info('Production Express server running at localhost:', PORT)
})