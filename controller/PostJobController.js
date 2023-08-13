const post = require('../model/PostJob')

const authController = {
    async CreateJob (req,res){
        try{
            const {jobTitle,salary,location,jobtype,experience} = req.body;
            if (!jobTitle||!salary||!location||!jobtype||!experience){
              return res.status(400).json({message:"all fields required"})
            }
          
            
              //create Job
              const newUser = new post({
                jobTitle,
                salary,
                location,
                jobtype,
                experience
              })
              await newUser.save()
             
              // const token = jwt.sign(req.body)
              res.json({newUser})
        }
        catch(error){
                res.status(500).json({message:"internal server error",error:error.message})
        }
        
    },
   
    
  
}
module.exports = authController