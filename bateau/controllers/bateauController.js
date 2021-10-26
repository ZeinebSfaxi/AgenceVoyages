const express = require('express')
const router = express.Router();
const Bateau = require('../models/bateau');

router.get('/', (req, res) => {
    res.json('test router');
})


router.get('/bateau', async (req, res) => {

    try {
        const bateaux = await Bateau.find()

        if (!bateaux || bateaux.length <= 0) {
            return res.status(400).json({
                message: 'not found'
            })
        }
        else {
            res.status(200).json({
                success: true,
                bateaux,

            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

router.post('/bateau', async (req, res) => {
    const { nom, prenom, cin, email, nbPersonne, dateDebut, dateFin, pays } = req.body;
    try {


        const bateau = await Bateau.create({
            nom,
            prenom,
            cin,
            email,
            nbPersonne,
            dateDebut,
            dateFin,
            pays
        })
        res.json({ bateau })
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

router.delete('/bateau/:id', async (req, res) => {
    try {
        const bateau = await Bateau.findById(req.params.id)

        if (!bateau)
            res.status(404).json({ error: 'bateau not found !' })

        const deleted = await bateau.remove()

        res.json({ bateau: deleted })
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})


router.put('/bateau/:id', async (req, res) => {
    const { nom, prenom, cin, email, nbPersonne, dateDebut, dateFin, pays } = req.body;
    try {

        const newBateau = await Bateau.findById(req.params.id)
        if (!newBateau)
            res.status(404).json({ error: 'bateau not found !' })

        newBateau.nom = nom || newBateau.nom
        newBateau.prenom = prenom || newBateau.prenom
        newBateau.cin = cin || newBateau.cin
        newBateau.email = email || newBateau.email
        newBateau.nbPersonne = nbPersonne || newBateau.nbPersonne
        newBateau.dateDebut = dateDebut || newBateau.dateDebut
        newBateau.dateFin = dateFin || newBateau.dateFin
        newBateau.pays = pays || newBateau.pays

        const updated = await newBateau.save()

        res.json({ bateau: updated })
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})


router.get('/bateau/:id', async (req, res) => {

    try {
        const newBateau = await Bateau.findById(req.params.id)
        if (!newBateau)
            res.status(404).json({ error: 'bateau not found !' })

        res.status(200).json({
            success: true,
            bateau: newBateau,

        })

    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})



module.exports = router;
