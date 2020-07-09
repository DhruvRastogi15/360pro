
import axios from "axios";
import { Base64 } from 'js-base64';

const Config = {};


// var authorizationToken = localStorage.getItem('accessToken');



Config.backendAPICall = function (methodType, APIPath, parameters) {

    if (methodType === "GET") {
        var authorizationToken = localStorage.getItem('accessToken');
        return axios
            .get(APIPath,{headers: {"authenticationToken" : authorizationToken}})
            .then(res => {
                
                if (res.data.status === "JWTERROR") {
                    alert('session expired please logged in');
                    window.location.pathname = '/'
                } else {
                                    
                return res.data;
                }
            })
            .catch(err => {
                // console.log(err);
            });

    } else if ("POST") {

        let params = JSON.stringify(parameters);
        params = Base64.encode(params);
        
        // var authorizationToken = localStorage.getItem('accessToken');
        return axios
            .post(APIPath, params,{headers: {"authenticationToken" : authorizationToken}})
            .then(res => {
                if (res.data.status === "JWTERROR") {
                    alert('session expired please logged in');
                    window.location.pathname = '/'                    
                } else {
                return res.data;
                }
            })
            .catch(err => {
                // console.log(err);
            });
    }




};


export default Config;