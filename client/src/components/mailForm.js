import React from 'react';
import API from './utils/API';

class MailForm extends React.Component{


    render(){
        return(
            <div className="mail-form" class="w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin">
            <h2 class="w3-center">Envoyer un mail au webMaster</h2>>
                <br></br>
                <div class="w3-row w3-section">
                    <div class="w3-col" style={{width:50 +'px'}}><i class="w3-xxlarge fa fa-envelope-o"></i></div>
                    <div class="w3-rest">
                        <input class="w3-input w3-border"id="emailFrom" name="emailFrom" type="text" placeholder="Votre email"></input>
                    </div>
                </div>
                <div class="w3-row w3-section">
                    <div class="w3-col" style={{width:50 +'px'}}><i class="w3-xxlarge fa fa-envelope-o"></i></div>
                    <div class="w3-rest">
                        <input class="w3-input w3-border"id="emailTo" name="emailTo" type="text" placeholder="email du web master"></input>
                    </div>
                </div>
                <div class="w3-row w3-section">
                    <div class="w3-col" style={{width:50 +'px'}}><i class="w3-xxlarge fa fa-pencil"></i></div>
                        <div class="w3-rest">
                        <input class="w3-input w3-border" name="message" id="message" type="text" placeholder="Message"></input>
                    </div>
                </div>                

                <button class="w3-button w3-block w3-section w3-blue w3-ripple w3-padding" onClick={OnValidate}>Valider</button>
            </div>
        )
    }


}


function OnValidate(event){
    event.preventDefault();

    var emailFrom = document.getElementById("emailFrom").value;
    var emailTo = document.getElementById("emailTo").value;
    var message = document.getElementById("message").value;

    API.sendMail(emailFrom, emailTo, message);


    console.log(emailFrom);
    console.log(emailTo);
    console.log(message)
}

export default MailForm