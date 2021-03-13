'use strict'

class Register {

    get rules() {
        return {
            username: 'required|unique:users',
            email: 'required|email|unique:users',
            password: 'required|min:6'
        }
    }

    get data() {
        const requestBody = this.ctx.request.all()
        requestBody.email = (requestBody.email) ? requestBody.email.trim().toLowerCase() : null
        requestBody.username = (requestBody.username) ? requestBody.username.trim().toLowerCase() : null
        return requestBody
    }

    get sanitizationRules() {
        return {
        }
    }

    get messages() {
        return {

        }
    }

    async fails(errors) {
        return this.ctx.response.status(400).json({
            message: "Something went wrong",
            errors: errors
        })
    }

}

module.exports = Register