import {NextApiRequest, NextApiResponse} from "next";
import bcrypt from 'bcryptjs';
const User = require("./models/user");
import connectToDb from './db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    await connectToDb();
    User.find({email: req.body.email})
        .exec()
        .then(new_user => {
            if (new_user.length >= 1) {
                return res.status(409).json({
                    message: "User exists in database"
                });
            } else {
                bcrypt.hash(req.body.password, 12, (err: Error, hash: string) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const new_user = new User({
                            name: req.body.name,
                            password: hash,
                            email: req.body.email,
                            active: false,
                            createdDate: Date.now(),
                            points: 0
                        });
                        new_user
                            .save()
                            .then(result => {
                                res.status(201).json({
                                    message: "Created"
                                });
                            })
                            .catch(err => {
                                res.status(500).json({
                                    error: err
                                });
                            });
                    }
                });
            }
        })
}
