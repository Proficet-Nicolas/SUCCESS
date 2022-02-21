<template>
    <div id="creer_utilisateur">
        <h1>Créer un utilisateur</h1>
            <p>identifiant</p>
                <input type="text" name="login" value="" v-model="inputLogin" class="form-control" placeholder="Login">
                    <p>Mot de passe</p>
                        <input type="text" name="password" value="" v-model="inputPassword" class="form-control" placeholder="Password">
                            <button class="btn btn-danger btn-lg" type="btn btn-primary" @click="axAddUser">Envoyer </button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'User',
  data () {
    return {
      inputLogin: '',
      inputPassword: ''
    }
  },
  created () {
    this.axGetAllUser()
  },
  methods: {
    axGetAllUser () {
      axios.get('http://localhost:3000/api/user')
        .then((response) => {
          this.category = response.data
        })
        .catch(error => {
          this.errorMessage = error.message
          console.error('There was an error!', error)
        })
    },
    //Ajout d'un utilisateur
axAddUser () {
      const data = {
        login: this.inputLogin,
        password: this.inputPassword
      }
      axios.post('http://localhost:3000/api/user/', data)
        .then(() => {
          this.inputLogin = ''
          this.inputPassword = ''
          this.axGetAllUser()
        })
        .catch(error => {
          this.errorMessage = error.message
          console.error('There was an error!', error)
        })
    },
}
}
</script>
