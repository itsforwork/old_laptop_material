import express from "express";
 
const router= express.Router();
// now all path here will be followed by /users

//sending static data
const users=[
    {
        firstname : "john",
        lastname: "doe",
        age: '25'
    },
    {
        firstname : "dane",
        lastname: "doe",
        age: '21'
    }
]
//making get request
router.get('/' , (req,res)=>{
res.send(users)
})
//making post request - we can only test this on postman not on browser
router.post('/' , (req,res)=>{
    //jab hum is path ko hit karenge postman pe so this will execute
    console.log('post route reached');
    // req k andar ek body method will return whatever you will give in as post
    console.log(req.body)
    //so we can push this body in our existing array of users
    const newUser= req.body;
    users.push(newUser);
    //now if you see on browser users will be updated there also
});
// we are doing this so we can use this object in other files
export default router;