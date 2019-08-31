const Burger = require('./model')

async function readBurger (req, res) {
  const burgers = await Burger.find({...req.params})
  return res.json(burgers)
}

async function createBurger (req, res) {
  const burger = new Burger({...req.body})
  await burger.save()
  return res.json(burger)
}

async function updateBurger (req, res) {
  await Burger.updateOne({...req.params }, {...req.body})
  const burger = await Burger.find({...req.params})

  return res.json(burger)
}

async function deleteBurger (req, res) {
  const burger = await Burger.find({...req.params})
  await Burger.deleteOne({...req.params})
  return res.json(burger)
}

module.exports = {
  createBurger,
  readBurger,
  updateBurger,
  deleteBurger,
}