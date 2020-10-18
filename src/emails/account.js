const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sunshinesanew@gmail.com',
        subject: 'Thank for joining in!',
        text: 'Welcome to the app, ' + name +  '. Let me know how you get a long with the app.'
    })
}

const sendcancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sunshinesanew@gmail.com',
        subject: 'Sorry to see you go!',
        text: 'Goodbye, ' + name + '. I hope to see you back sometime soon.'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendcancelationEmail
}