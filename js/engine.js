// Add an event listener to the button
document.getElementById('emailButton').addEventListener('click', function() {
// Define email parameters
const to = 'joeboadi1@gmail.com';
const subject = 'Gig Inquiry';
const body = 'Hello, I would like to get in touch with you regarding a gig.';

// Construct mailto URL
const mailtoURL = 'mailto:' + encodeURIComponent(to) + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

// Open mail client
window.location.href = mailtoURL;
});
 
