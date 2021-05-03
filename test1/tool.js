const axios = require('axios')

const tool = {
    callUno : async () => {
        try {
            return axios.get('http://localhost:3001/uno')
        } catch (error) {
            console.log('error calling uno')
        }
    },
    callDos : async () => {
        try {
            return axios.get('http://localhost:3002/dos')
        } catch (error) {
            console.log('error calling uno')
        }
    
    },
    merge : (uno, dos) =>{
    
        return({"names": [uno.data.name, dos.data.name]})
    }
}


module.exports = tool