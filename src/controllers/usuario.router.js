const {Router}= require('express')

const router= Router()


router.get("/findById/:id")
router.get("/findAll")

router.post('/create')
router.post('/addAddress/:id')
router.post('/addFavProduct/:id')


router.put('/update/:id')


router.detele('/remove/:id');
router.delete('/removeAddress');
router.delete('/removeFavProduct');

module.exports= router