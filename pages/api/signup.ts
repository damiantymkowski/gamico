import {NextApiRequest, NextApiResponse} from "next";
import User from "./models/user";
import bcrypt from "bcryptjs";

export default (req: NextApiRequest, res: NextApiResponse) => {
User.find({email: req.body.email})
    .exec()
    .then(user =>{
        if(user.length>=1){
            return res.status(409).json({
                message: "User exists in database"
            });
        }else{
        bcrypt.hash(req.body.password, 20, (error, hash)=>{

        })
        }
    })
}