import axios from 'axios'

const headers = {
    'Content-Type': 'application/json',
}
const burl = "http://localhost:3001"

export default{
    sendMail : function(emailFrom, emailTo, message){
        return axios.post(burl + '/mail',{
            'emailFrom' : emailFrom,
            'emailTo': emailTo,
            'message': message
        })
    }
}
