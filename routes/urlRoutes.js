const express = require('express');

const models = require("../models/Url");
const Url = require('../models/Url');
const router = express.Router();

let nanoid;

// Dynamic import for nanoid (ESM module)
(async () => {
  const module = await import('nanoid');
  nanoid = module.nanoid;
})();

//post /short
router.post("/shorten", async(req, res)=>{
    try{
        const{url} = req.body;

        //1. validation
        if(!url){
            return res.status(400).json({
                error: "Url is required bro"
            });
        }

        //2. Generate unique short code
        const shortCode = nanoid(6);

        //3. Save to DB
        const newUrl = await Url.create({
            url,
            shortCode
        });

        //4. return response
        res.status(201).json({
            id: newUrl._id,
            url: newUrl.url,
            shortCode: newUrl.shortCode,
            createdAt: newUrl.createdAt,
            updatedAt: newUrl.updatedAt
        });
    }catch(error){
        res.status(500).json({
            error:"Internal Server Error"
        });
    }
});

module.exports = router;