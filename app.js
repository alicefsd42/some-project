const express = require('express')
const app = express()

app.get('/hello', (req, res) =>
  res.send('Hello World'))

app.get('/add/:a/:b', (req, res) =>
  res.send((parseInt(req.params.a) + parseInt(req.params.b)).toString())
)

app.get('/subtract/:a/:b', (req, res) =>
  res.send((parseInt(req.params.a) - parseInt(req.params.b)).toString())
)

app.get('/multiply/:a/:b', (req, res) =>
  res.send((parseInt(req.params.a) * parseInt(req.params.b)).toString())
)

app.get('/divide/:a/:b', (req, res) =>
  res.send((parseInt(req.params.a) / parseInt(req.params.b)).toString())
)

app.get('/power/:a/:b', (req, res) =>
  res.send(
    (
      Math.pow(
        parseInt(req.params.a),
        parseInt(req.params.b)
      ).toString()
    ))
)
/**
 * Computes the absolute value of a parameter
 * @param {number} a Number to calculate its absolute value
 */
app.get('/absolute/:a', (req, res) =>
  res.send((Math.abs(parseInt(req.params.a))).toString())
)

app.get('/sqrt/:a', (req, res) =>
  res.send((Math.sqrt(parseInt(req.params.a))).toString())
)

app.get('/square/:a', (req, res) =>
  res.send((Math.pow(parseInt(req.params.a), 2)).toString())
)

app.get('/sin/:a', (req, res) =>
  res.send((Math.sin(parseInt(req.params.a))).toString())
)

app.listen(3000)
