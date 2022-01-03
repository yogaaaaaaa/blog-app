const router = require("express").Router();
const Category = require("../models/Category.js");

router.post("/", async (req, res) => {
  const newCat = await Category(req.body);
  try {
    const saveCat = await newCat.save();
    res.status(200).json(saveCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async(req, res)=>{
    try{
        const categories = await Category.find() 
        res.status(200).json(categories)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;
