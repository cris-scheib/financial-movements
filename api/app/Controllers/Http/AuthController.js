'use strict'
const User = use('App/Models/User')
const Database = use('Database')

class AuthController {
    async register({ request, response, auth }) {
        const transition = await Database.beginTransaction()
        try {
            const { email, username } = request.all()
            let user = await User.create(request.all())
            await auth.login(user)
            await transition.commit()
            return response.status(201).json({ email, username })
        } catch (error) {
            await transition.rollback()
            return response.status(500).json({ message: 'Error to create the user', error })
        }
    }

    async login({ request, response, auth }) {

        const { email, password } = request.all()
        await auth.attempt(email, password)
        auth.getUser().then(async user => {
            const { email, username } = user;
            return response.status(201).json({ email, username })
        }).catch(async error => {
            return response.status(403).json({ message: 'Invalid email or password ', error })
        })
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