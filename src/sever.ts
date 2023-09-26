import * as dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";;
import cors from "cors";
import path from 'path';
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";
import bodyParser from "body-parser";
import http from "http";

import { User } from "@prisma/client";

import { userRouter } from "./users/user.router";
import { paymentRouter } from "./payment/payment.router";
//import { userToken } from "./utils/handler";

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET_KEY));
app.use(cookieSession({ secret: process.env.JWT_SECRET_KEY }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/users", userRouter);
app.use("/api/deposit", paymentRouter);
//app.use(userToken);
app.use(express.static('public'));


// app.use(function (req, res, next) {
//     res.setHeader('Content-Type', 'text/html');
//     res.setHeader('set-cookies', ['value= ${token}', 'language= javascript', 'HttpOnly']);

//     next();
// })


app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));
app.get('/login', (req, res) => res.render('login'));
app.get('/register', (req, res) => res.render('register'));
app.get('/dashboard', (req, res) => res.render('dashboard'));
app.get('/deposit', (req, res) => res.render('deposit'));


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});