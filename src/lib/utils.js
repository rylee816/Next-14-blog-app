import mongoose from 'mongoose'

const connection = {}

export const connectToDB = async () => {
    try {
        if (connection.isConnected) {
            console.log('Using existing connection')
            return
        }
        const db = await mongoose.connect(`${process.env.NEXT_MONGO_DB}`)
        connection.isConnected = db.connections[0].readyState
    } catch (error) {
        console.log(error)
        throw new Error('Error connecting to database')
    }
}
