'use strict'
const User = use('App/Models/User')
const Database = use('Database')

class AuthController {
    async register({ request, response, auth }) {
        const transition = await Database.beginTransaction()
        try {
            const { email, password, username } = request.all()
            const user = await User.create(request.all())
            if (user) {
                const token = await auth.attempt(email, password)
                await transition.commit()
                return response.status(201).json({ token, username })
            } else {
                await transition.rollback()
                return response.status(500).json({ message: 'Error to create the user', error })
            }
        } catch (error) {
            await transition.rollback()
            return response.status(500).json({ message: 'Error to create the user', error })
        }
    }

    async login({ request, response, auth }) {
        const { email, password } = request.all()
        const token = await auth.attempt(email, password)
        const { username } = await User.findBy('email', email)
        if (token) {
            return response.status(201).json({ token, username })
        } else {
            return response.status(403).json({ message: 'Invalid email or password ', error })
        }
    }

    async logout({ response, auth }) {
        try {
            const isLogged = await auth.check()
            if (isLogged) {
                await auth.logout();
            }
            return response.status(201).json({ message: 'User disconnected' })
        } catch (error) {
            return response.status(403).json({ message: 'Authenticated user not found' })
        }


    }
}

module.exports = AuthController