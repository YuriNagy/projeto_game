'use strict'

class GameController {

  index({request, response}){

    console.log(request._all)
    // console.log(res)
    return {teste: 'oi'}

  }
}

module.exports = GameController
