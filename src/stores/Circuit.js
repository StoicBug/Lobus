import { defineStore } from 'pinia'

export const useCircuit = defineStore('circuit', {
    state: () => ({
        placeDeDepart: '',
        placeDArrivee: '',
        dateDeDepart: '',
        dateDeRetour: '',
        heureDeDepart: '',
        heureDeRetour: '',
        voyageurs: 1,
        bagages: [],
        motif: '',
        equipements: {
            microAud: false,
            SigeBebe: false,
            glacie: false
        },
        detailDeVoyage: '',
        particulier: {
            prenom:'',
            nom:'',
            email:'',
            password:'',
            password_confirmation:'',
            isAgree: false
        },
        societe: {
            prenom:'',
            nom:'',
            denomination:'',
            ice: 0,
            email:'',
            password:'',
            passwordConfirm:'',
            isAgree: false
        }
    }),
    actions: {
        setPlaceDeDepart(placeDeDepart) {
            this.placeDeDepart = placeDeDepart
        },
        setPlaceDArrivee(placeDArrivee) {
            this.placeDArrivee = placeDArrivee
        },
        setDateDeDepart(dateDeDepart) {
            this.dateDeDepart = dateDeDepart
        },
        setDateDeRetour(dateDeRetour) {
            this.dateDeRetour = dateDeRetour
        },
        setHeureDeDepart(heureDeDepart) {
            this.heureDeDepart = heureDeDepart
        },
        setHeureDeRetour(heureDeRetour) {
            this.heureDeRetour = heureDeRetour
        },
        setVoyageurs(voyageurs) {
            this.voyageurs = voyageurs
        },
        //etape 2 Setters
        setBagages(bagages) {
            this.bagages = bagages
        },
        setMotif(motif) {
            this.motif = motif
        },
        setEquipements(equipements) {
            this.equipements = equipements
        },
        setDetailDeVoyage(detailDeVoyage) {
            this.detailDeVoyage = detailDeVoyage
        },
        //etape 3 Setters
        registerParticulier(prenom, nom, email, password, password_confirmation, isAgree) {
            this.particulier = Object.assign(this.particulier, {
                prenom,
                nom,
                email,
                password,
                password_confirmation,
                isAgree
            })
        },
        registerSociete(prenom, nom, denomination, ice, email, password, passwordConfirm, isAgree) {
            this.societe = Object.assign(this.societe, {
                prenom,
                nom,
                denomination,
                ice,
                email,
                password,
                passwordConfirm,
                isAgree
            })
        }
    }
})