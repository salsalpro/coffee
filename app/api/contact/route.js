import connectToDB from '@/config/db'
import Contact from '@/models/Contact'

export async function POST(req) {

    try {
        const body = await req.json()
        const { communicationMethod: communicationMethod1, name: name1, message: message1 } = body

        const communicationMethod = communicationMethod1.trim('')
        if (!communicationMethod) {
            return Response.json({ message: 'communicationMethod is empity' }, { status: 422 })
        }
        const name = name1.trim('')
        if (!name) {
            return Response.json({ message: 'name is empity' }, { status: 422 })
        }
        const message = message1.trim('')
        if (!message) {
            return Response.json({ message: 'message is empity' }, { status: 422 })
        }

        await connectToDB()
        const contact = await Contact.create({
            communicationMethod,
            name,
            message
        })

        if (contact) {
            return Response.json({ message: 'contact created successfully' }, { status: 201 })
        }
        
        return Response.json({ message: 'contact did not created successfully' }, { status: 201 })

    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 })
    }
}