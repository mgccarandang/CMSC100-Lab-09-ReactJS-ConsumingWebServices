const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/GAMES', { useNewUrlParser: true })

const Game = mongoose.model('Game', {
  title: String,
  developer: String,
  year: Number,
  online: Boolean,
  maxLocalPlayers: Number
})


exports.findAll = (req, res, next) => {
  Game.find((err, games) => {
    if (!err) { res.send(games) }
  })
}

exports.findById = (req, res, next) => {
  if (!req.query.id) { return res.send('No id provided') }

  Game.findOne({ _id: req.query.id}, (err, game) => {
    if (!err) { res.send(game) }
  })
}

exports.findByIdPOST = (req, res, next) => {
  console.log('find by post')
  console.log(req.body)
  if (!req.body.id) { return res.send('No id provided') }

  Game.findOne({ _id: req.body.id}, (err, game) => {
    if (!err) { res.send(game) }
  })
}

exports.add = (req, res, next) => {

  const newGame = new Game({
    title: req.body.title,
    developer: req.body.developer,
    year: req.body.year,
    online: req.body.online,
    maxLocalPlayers: req.body.maxLocalPlayers
  })

  newGame.save((err) => {
    if (!err) { res.send(newGame)}
    else { res.send('Unable to save game') }
  })
}

exports.deleteById = (req, res, next) => {
  Game.findOneAndDelete({ _id: req.body.id }, (err, game) => {
    if (!err && game) {
      res.send('Successfully deleted ' + game.title)
    }
    else {
      res.send('Unable to delete game')
    }
  })
}
