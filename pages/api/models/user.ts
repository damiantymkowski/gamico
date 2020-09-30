import * as mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
    nickname: string;
    password: string;
    email: string;
    active: boolean;
    createdDate: number;
}

export const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    active: {type: Boolean, required: true},
    createdDate: {type: Number, required: true},
})

const User = mongoose.model<IUser>('User', UserSchema);
export default User;