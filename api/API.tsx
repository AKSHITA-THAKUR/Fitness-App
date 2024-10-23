import { API_KEY, bodyParts } from "@/constants";
import axios from 'axios';


const baseUrl =  'https://exercisedb.p.rapidapi.com';

 const apiCall = async(url?:any , bodyPart?:string) =>{
    try{
        const options = {
            method: 'GET',
            url,
            params: {
              limit: '10',
              offset: '0'
            },
            headers: {
              'x-rapidapi-key': API_KEY,
              'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
            }
          };
    const response = await axios.request(options);
    return response.data;
    console.log(response.data)
    }
    catch(err){
        if (axios.isAxiosError(err)) {
            console.error('Axios error:', err.message);
        } else {
            console.error('Unexpected error:', err);
        }
        return null; // Return null to indicate failure
    }
}

export const fetchExerciseBodyPart = async(bodyPart:string) =>{
    let data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyPart}`);
    return data;
}
