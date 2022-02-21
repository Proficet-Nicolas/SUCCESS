<template>
    <div id="Créer_groupe">
        <h1>Créer un groupe</h1>
            <p>Nom du groupe</p>
                <input type="text" name="nom_categorie" value="" v-model="inputGroupname" class="form-control" placeholder="Nom du groupe">
                    <p>Spécialité</p>
                        <input type="text" name="nom_sujet" value="" v-model="inputSpeciality" class="form-control" placeholder="Spécialité">
                            <button class="btn btn-danger btn-lg" type="btn btn-primary" @click="axAddGroupe">Envoyer</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Groupe',
  data () {
    return {
      inputGroupname: '',
      inputSpeciality: ''
    }
  },
  created () {
    this.axGetAllGroupe()
  },
  methods: {
    axGetAllGroupe () {
      axios.get('http://localhost:3000/api/groupe')
        .then((response) => {
          this.category = response.data
        })
        .catch(error => {
          this.errorMessage = error.message
          console.error('There was an error!', error)
        })
    },
    ////Ajout d'un groupe
axAddGroupe () {
      const data = {
        groupname: this.inputGroupname,
        speciality: this.inputSpeciality
      }
      axios.post('http://localhost:3000/api/groupe/', data)
        .then(() => {
          this.inputGroupname = ''
          this.inputSpeciality = ''
          this.axGetAllGroupe()
        })
        .catch(error => {
          this.errorMessage = error.message
          console.error('There was an error!', error)
        })
    },
  }
}
</script>

<style>
button {
    margin: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>