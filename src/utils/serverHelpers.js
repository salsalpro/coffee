import { cookies } from "next/headers"
import { VerifyAccessToken, VerifyRefreshToken } from "./auth"
import connectToDB from "@/config/db"
import UserModel from "@/models/User"
import DiscountModel from "@/models/Discount"

const AuthUser = async () => {
    const cookie = await cookies()
    const token = await cookie.get('token')?.value
    let user = false

    if (token) {
        const tokenPayload = await VerifyAccessToken(token)
        if (tokenPayload) {
            await connectToDB()
            let userFound = await UserModel.findOne({ username: tokenPayload.username })
            return user = await JSON.parse(JSON.stringify(userFound))
        }
        return user = false
    }


    return user
}

const AuthAdmin = async () => {
    await connectToDB()
    const cookie = await cookies()
    const token = await cookie.get('token')?.value
    let admin = false

    if (token) {
        const tokenPayload = await VerifyAccessToken(token)
        if (tokenPayload) {
            let adminGot = await UserModel.findOne({ username: tokenPayload.username })
            if (!adminGot) {
                return admin = false
            }
            let adminFound = await JSON.parse(JSON.stringify(adminGot))
            return admin = adminFound.role === 'ADMIN' ? adminFound : false
        }
        return admin = false
    }

    return admin
}

const UseDiscount = async (code) => {
    try {
        await connectToDB()
        const discount = await DiscountModel.findOne({ code })
        if (!discount) {
            return { status: 404, message: "did not found" };
        }

        if (discount.expireAt < Date.now()) {
            return { status: 411, message: "expired ..." };
        }

        if (discount.maxUse === discount.uses) {
            return { status: 410, message: "expired ..." };
        }


        const discountUsed = await DiscountModel.findOneAndUpdate({ code }, {
            $inc: {
                uses: 1
            }
        })

        if (discountUsed) {
            return { status: 200, discount: discountUsed };
        }

        return { status: 500, message: 'something happend' };
    } catch (err) {
        return { status: 500, message: 'something happend' };
    }
}

const CreateDiscount = async ({ code: code1, percent, expireInHours, maxUse }) => {

    const code = await code1?.trim()

    if (!code) {
        return { message: 'code is empity', status: 422 }
    }
    if (percent > 100 || isNaN(expireInHours)) {
        return { message: 'percent is empity', status: 422 }
    }
    if (isNaN(expireInHours)) {
        return { message: 'expireInHours is not number', status: 422 }
    }
    if (isNaN(maxUse)) {
        return { message: 'maxUse is not number', status: 422 }
    }

    await connectToDB()
    const isDiscountExsist = await DiscountModel.findOne({ code })
    if (isDiscountExsist) {
        return { message: 'discount allready exsist', status: 409 }
    }

    const expireAt = new Date(Date.now() + expireInHours * 60 * 60 * 1000);

    const discount = await DiscountModel.create({ code, percent, expireAt, maxUse });

    if (discount) {
        return { message: 'discount made successfully', discount, status: 201 }
    }


    return { message: 'discount did not made and something went wrong', status: 500 }
};

export { AuthUser, AuthAdmin, UseDiscount, CreateDiscount }