'use strict'

class Create {

  get rules() {
    return {
      name: 'required',
      action: 'required',
      status: 'required',
    }
  }

  get data() {
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

module.exports = Create