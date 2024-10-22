import nodemailer from 'nodemailer'
import mailConf from '../config/mail.conf'

// @ts-ignore
export default nodemailer.createTransport(mailConf)
