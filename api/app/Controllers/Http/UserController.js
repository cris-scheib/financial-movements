'use strict'

const Hash = use('Hash')
const User = use('App/Models/User')

class UserController {

    async user({ response, auth }) {
        try {
            let user = await auth.getUser()
            return response.status(200).json(user)
        } catch (error) {
            return response.status(500).json({ message: 'Error to find the user', error })
        }
    }
    async password({ request, response, auth }) {

        try {
            const { password, newPassword, email } = request.all()
            const user = await User.findBy('email', email)
            const passwordValid = await Hash.verify(password, user.password);
            if (!passwordValid) {
                return response.status(400).json({ message: "Passwords are not compatible" })
            }
            user.password = newPassword
            const result = await user.save()
            return response.status(200).json({ message: "Updated password" }, result)
        } catch (error) {
            return response.status(500).json({ message: 'Error to update the password', error })

        }
    }

}

module.exports = UserController