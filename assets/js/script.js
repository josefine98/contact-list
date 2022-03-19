//Function to add new HTML -> From the lesson 15/03-2022
const addHTML = (selector, newContent) => {
    const elements = document.querySelectorAll(selector); 

    elements.forEach((element) => {
        element.innerHTML += newContent;
    });
}

//Creates HTML to display the contact's address if available. I don't check for availability since all contacts
// have this information, but ideally this should be checked for all properties. 
const address = (contact) => {
    addressHTML = `
    <div class="address">
        <p>${contact.location.number} ${contact.location.street}</p>
        <p>${contact.location.city} - ${contact.location.zipCode}</p>
        <p>${contact.location.country}</p>
    </div>`;

    return addressHTML; 
};


//Arrow function that returns HTML to display the phone number if it is available. If not, it returns an empty string. 
const phoneNumber = (contact) => {
    //phoneNumberHTML is set to "" if the mobile number is "" in the contacts array(as all undefined properties are
    // defined as "" in the data.js file), and if not, it is set to a paragraph with an icon and the phone number 
    const phoneNumberHTML = contact.contact.mobile == "" ? "" :
        `<p><i class="fa-solid fa-phone"></i> ${contact.contact.mobile}</p>`;

    return phoneNumberHTML;
};

//Arrow function that returns HTML to display the email if available. If not, it returns an empty string. 
const email = (contact) => {
    const emailHTML = contact.contact.email == "" ? "" :
        `<p><i class="fa-solid fa-at"></i> ${contact.contact.email}</p>`;

    return emailHTML;
};

//Arrow function that returns HTML to display if a link to a contacts LinkedIn account is available. If not, it returns an empty string.  
const linkedIn = (contact) => {
    const linkedInHTML = contact.social.linkedin == "" ? "" :
        `<p><i class="fa-brands fa-linkedin"></i> <a href="${contact.social.linkedin}">LinkedIn<a></p>`;

    return linkedInHTML;
};

//Arrow function that returns HTML to display if a link to a contacts twitter account is available. If not, it returns an empty string. 
const twitter = (contact) => {
    const twitterHTML = contact.social.twitter == "" ? "" :
        `<p><i class="fa-brands fa-twitter"></i> <a href="${contact.social.twitter}">Twitter<a></p>`;

    return twitterHTML;
};

//Arrow function that returns HTML to display a picture of the contact if it's available. If not, it returns an empty string. 
const contactImage = (contact) => {
    const imageHTML = contact.picture == "" ? "" : `<img src="./assets/images/${contact.picture}" alt="${contact.name.first} ${contact.name.last}">`;

    return imageHTML;
};

//Loops through the contacts array from the data.js file and creates HTML to display the contact list. 
contacts.forEach((contact) => {
    let contactListHTML = `
    <div class="contact">
        ${contactImage(contact)}    
        <div class="contactInfoText">
            <h2>${contact.name.first} ${contact.name.last}</h2>
            ${address(contact)}
            ${phoneNumber(contact)}
            ${email(contact)}
            ${linkedIn(contact)}
            ${twitter(contact)}
        </div>
    </div>`;

    addHTML("#contactList", contactListHTML);
});