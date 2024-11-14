const SES = require("aws-sdk/clients/ses")
require('dotenv').config()

const client = new SES({
    accessKeyId: process.env.AWS_SECRET_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1',
})

async function sendEmail(from, destination, subject, body) {

    try {
        client.sendEmail({
            Source: from,
            Destination: {
                ToAddresses: [
                    destination
                ]
            },
            Message: {
                Subject: {
                    Data: subject,
                },
                Body: {
                    Text: {
                        Data: body
                    }
                }
            }
        }).promise()

    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
    }

}

module.exports = sendEmail