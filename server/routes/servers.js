import {Router} from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.render('index.ejs', {
        active: 'home'
    })
})

router.get('/about', (erq, res) => {
    res.render('about.ejs')
})

export default router