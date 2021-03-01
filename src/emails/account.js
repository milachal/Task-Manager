const sgMail = require('@sendgrid/mail')


//asscociate API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'n.millenium78@gmail.com',
        subject: 'Thanks for joining!',
        text: `Welcome to the app, ${name}!`
    })
}

const sendAccountCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'n.millenium78@gmail.com',
        subject: "We're sorry to see you go!",
        text: `Sorry to see you go, ${name}!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendAccountCancelationEmail
}


