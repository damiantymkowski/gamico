import {AUTHORIZE, NEW_AUTH} from "./types";
import axios from "axios";

export const newAuth = (data) => dispatch => {
        axios
            .post("/api/login", {
                email: data.email,
                password: data.password,
            })
            .then((res) => {
            }).then(data=>dispatch({
            type: AUTHORIZE,
            payload: data
            }))
            .catch((err) =>dispatch({
                type: AUTHORIZE,
                payload: err
            }))
}