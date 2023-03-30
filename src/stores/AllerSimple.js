import { defineStore } from 'pinia'


export const useAllerSimple = defineStore('aller-simple', {
    state: () => ({ 
        placeDeDepart: '',
        placeDArrivee: '',
        dateDeDepart: '',
        heureDeDepart: '',
        voyageurs: 1,
        bagages: [],
        motif: '',
        equipements: {
            microAud: false,
            SigeBebe: false,
            glacie: false
        },
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
        setHeureDeDepart(heureDeDepart) {
            this.heureDeDepart = heureDeDepart
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

        //etape 3 Setters

        registerParticulier(...particulier) {
            this.particulier = particulier
        },
        regiterSocite(...societe) {
            this.societe = societe
        }

     }
  })