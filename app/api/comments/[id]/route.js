import connectToDB from "@/config/db"
import CommentModel from "@/models/Comment"
import { AuthAdmin } from "@/src/utils/serverHelpers"



export async function PUT(req, { params }) {
    const admin = await AuthAdmin()
    if (!admin) {
        throw new Error('this api protect and you cant access it')
    }
    try {
        
    const paramsGot = await params
    const commentID = paramsGot.id
    
    await connectToDB()
    const commentUpdate = await CommentModel.findOneAndUpdate({ _id: commentID }, {
        $set: {
            isAccept: true
        },
        new:true
    })

    if (commentUpdate) {
        return Response.json({ message: 'updating was succesfully' }, { status: 200 })
    }

    return Response.json({ message: 'updating was not succesfully' }, { status: 501 })
    } catch (err) {
        return Response.json({ message: 'updating was not succesfully' }, { status: 500 })
    }
}