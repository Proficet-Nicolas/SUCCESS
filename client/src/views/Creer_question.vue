<template>
    <div id="créer_questionnaire">
        <h1>Créer un questionnaire</h1>
            <p>Nom du questionnaire</p>
                <input type="text" name="nom_questionnaire" value="">
                    <div id="qr">
                            <p>Question</p>
                            <input type="text" name="question" value="">
                                <p>Réponse</p>
                                <input type="text" name="réponse" value="" v-model="reponse" class="form-control" placeholder="JavaScript"><br>
                                    <button class="btn btn-danger btn-lg" type="btn btn-primary" @click="axAddQuestion">Envoyer</button>
                    </div>
                <button id="button" @click="add()">+</button>
    </div>
</template>

<script>

export default {
  name: 'Question',
  data () {
    return {
      inputQuestion: '',
      category: null
    }
  },
  created () {
    this.axGetAllQuestion()
  },
  methods: {
    axGetAllQuestion () {
      this.axios.get('http://localhost:3000/api/question')
        .then((response) => {
          this.category = response.data
        })
        .catch(error => {
          this.errorMessage = error.message
          console.error('There was an error!', error)
        })
    },
axAddQuestion () {
      const data = {
        name: this.inputQuestion
      }
      this.axios.post('http://localhost:3000/api/question', data)
        .then(() => {
          this.inputQuestion = ''
          this.axGetAllQuestion()
        })
        .catch(error => {
          this.errorMessage = error.message
          console.error('There was an error!', error)
        })
    },
}
}
</script>
