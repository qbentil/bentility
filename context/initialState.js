import { GET_SESSION_USER } from "../util/session";
const session_user = GET_SESSION_USER();
export const initialState = {
    user:session_user,

}