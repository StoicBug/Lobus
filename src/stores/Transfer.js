import { defineStore } from 'pinia'

export const useTransfer = defineStore('transfer',{
    state: () => ({
        placeDeDepart : '',
        placeDarrive: '',
        dateDeDepart: '',
        heureDeDepart: '',
        voyageurs: 1,
        numuroDeVol: '',
        pancarte: '',
        bagages: [],
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
        setPlaceDarrive(placeDarrive) {
            this.placeDarrive = placeDarrive
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
        setNumeroDeVol(numuroDeVol) {
            this.numuroDeVol = numuroDeVol
        },
        setPancarte(pancarte) {
            this.pancarte = pancarte
        },
        //Etape 2
        setBagages(bagages) {
            this.bagages = bagages
        },
        setEquipements(equipements) {
            this.equipements = equipements
        },
        //Etape 3
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
    