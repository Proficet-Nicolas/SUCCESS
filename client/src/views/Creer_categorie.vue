<template>
    <div id="Créer_catégorie">
        <h1>Créer une catégorie</h1>
            <p>Nom de la catégorie</p>
                <input type="text" name="nom_categorie" value="" v-model="inputName" class="form-control" placeholder="Nom">
                    <p>Sujet de la catégorie</p>
                        <input type="text" name="nom_sujet" value="" v-model="inputTopic" class="form-control" placeholder="Sujet">
                            <button class="btn btn-danger btn-lg" type="btn btn-primary" @click="axAddCategorie">Envoyer</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Categorie',
  data () {
    return {
      inputName: '',
      inputTopic: ''
    }
  },
  created () {
    this.axGetAllCategorie()
  },
  methods: {
    axGetAllCategorie () {
      axios.get('http://localhost:3000/api/categorie')
        .then((response) => {
          this.category = response.data
        })
        .catch(error => {
          this.errorMessage = error.message
          console.error('There was an error!', error)
        })
    },
    //Ajout d'une categorie
axAddCategorie () {
      const data = {
        name: this.inputName,
        topic: this.inputTopic
      }
      axios.post('http://localhost:3000/api/categorie/', data)
        .then(() => {
          this.inputName = ''
          this.inputTopic = ''
          this.axGetAllCategorie()
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