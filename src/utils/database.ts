import mongoose from 'mongoose'

class Database {
  private static instance: Database

  static async getInstance() {
    if (!Database.instance) {
      Database.instance = new Database()
      await Database.instance.connect()
    }
    return Database.instance
  }

  async connect() {
    try {
      await mongoose.connect(
        'mongodb+srv://admin:rDTVFFQOvu9Oa1OM@cluster0.viw3kqj.mongodb.net/LabkidIndustry?retryWrites=true&w=majority',
      )
      console.log('Database connected successfully.')
    } catch (error) {
      console.error('Database connection error:', error)
      throw error
    }
  }

  disconnect() {
    if (mongoose.connection.readyState === 1) {
      mongoose.disconnect()
    }
  }
}

export default Database
