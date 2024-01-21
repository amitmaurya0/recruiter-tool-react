import axios from "axios";
import urls from "./urls";


export const getCandidates = async (candidateId='') => {
    try {
        const resp = await axios.get(`${urls.candidates}/${candidateId}`);
        if(resp.data.status){
            return resp.data;
        } else {
            throw new Error(resp.message);
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export const saveCandidate = async (data, candidateId="") => {
    try {
        const resp = await axios.post(`${urls.candidates}/${candidateId}`, data);
        if(resp.data.status){
            return resp.data;
        } else {
            throw new Error(resp.message);
        }
    } catch (error) {
        throw new Error(error.message);
    }
}