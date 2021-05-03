const express = require('express');
const router = express.Router();
const { Record } = require("../models/records");


router.post("/get", (req, res) => {
	try{	
		console.log(req.body)
	     const record = new Record(req.body);
       	     record.save();
       	     res.status(200).send(record);

        }catch(err){res.status(400).send(err); }
  
})

router.get("/get", async(req, res) => {
	try{	
		console.log(req.body)
	     const recordsData = await Record.find();
       	    //  record.save();
			   res.status(200).send(recordsData);

        }catch(err){res.status(400).send(err); }
  
})

router.post("/edit/:id", async(req, res) => {
	try {
		 const _id = req.params.id;
		 const updaterecords = await Record.findByIdAndUpdate(_id,{
			 ...req.body,
		   new:true
		 });
		 res.status(200).send(updaterecords);
	}catch (err){
	  res.status(404).send(err);
	}
  })

  router.delete("/delete/:id", async(req, res) => { 
	  console.log(req.params.id);
	try {
		 const deleterecords = await Record.findByIdAndDelete(req.params.id);
		 if(!req.params.id) {
		   return res.status(404).send();
		 }
		 res.status(200).send(deleterecords );
	}catch (err){
	  res.status(500).send(err);
	}
  })

module.exports = router;


