import { sign , verify } from "jsonwebtoken";
import { hash , compare } from "bcryptjs";

const HashPassword = async (pass) => {
    const HashedPassword = await hash(pass, 12)
    return HashedPassword
}

const VerifyPassword = async (pass, HashedPassword) => {
    const isValid = await compare(pass, HashedPassword)
    return isValid
}

const GeneratAccessToken = async (data) => {
    const token = await sign({ ...data }, process.env.Secret_Token_key, {
        expiresIn: '60d' // 30d for while // 60s is the true one
    })
    return token
}

const VerifyAccessToken = async (token) => {
    try {
        const tokenPayload = await verify(token, process.env.Secret_Token_key)
        return tokenPayload
    } catch (err) {
        console.log('you have a err ->', err)
    }
}

const GeneratRefreshToken = async (data) => {
    const token = sign({ ...data }, process.env.Secret_RefreshToken_key, {
        expiresIn: '15d'
    })
    return token
}

const VerifyRefreshToken = async (token) => {
    try {
        const tokenPayload = await verify(token, process.env.Secret_RefreshToken_key)
        return tokenPayload
    } catch (err) {
        console.log('you have err ->', err)
    }
}

const verifyEmail = (email) => {
    const patern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;
    return patern.test(email)
}

const verifyPhone = (phone) => {
    const patern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
    return patern.test(phone)
}

const validatPass = (pass) => {
    const patern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{4,}$/g;
    return patern.test(pass)
}


export {
    GeneratAccessToken,
    VerifyAccessToken,
    HashPassword,
    VerifyPassword,
    GeneratRefreshToken,
    VerifyRefreshToken,
    verifyEmail,
    verifyPhone,
    validatPass
}