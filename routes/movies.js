import { Router } from 'express'
import * as moviesCtrl from "../controllers/movies.js"

const router = Router()

/* GET users listing. */
router.get('/new', moviesCtrl.new)

export {
  router
}
