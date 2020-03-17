const {
  Router
} = require('express')
const router = Router()

router.get('/', (req, res, next) => {
  res.status(200).json({
    data: data_total
  })
})

module.exports = router
