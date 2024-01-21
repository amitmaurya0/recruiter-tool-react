import axios from "axios";
import urls from "./urls";

export const getAllSkills = async () => {
    try {
        const resp = await axios.get(`${urls.skills}`);
        if(resp.data.status){
            return resp.data;
        } else {
            throw new Error(resp.message);
        }
    } catch (error) {
        throw new Error(error.message);
    }
}