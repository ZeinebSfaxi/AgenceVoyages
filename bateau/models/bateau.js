const mongoose = require('mongoose')


const bateauSchema = mongoose.Schema(

    {
        nom: {
            type: String
        },

        prenom: {
            type: String
        },
        cin: {
            type: String
        },
        email: {
            type: String
        },

        nbPersonne: {
            type: Number
        },
        dateDebut: {
            type: Date
        },
        dateFin: {
            type: Date
        },
        pays: {
            type: String
        },


    }
)

module.exports = mongoose.model('Bateau', bateauSchema)
