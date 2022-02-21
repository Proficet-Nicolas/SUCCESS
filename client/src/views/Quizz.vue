<template>
<div id="app">
    <select name="quizz" id="quizz-select">
        <option value="">Choisir un quizz</option>
    </select>
    <button class="btn btn-danger btn-lg" @click="test">Lancer</button>
    <p>Question:{{data}}</p>
        <form>
            <div class="send">
            <input type="text" name="reponse" value=""><br>
            <input type="submit" name="bouton" value="Envoyer">
            </div>
        </form>
</div>
</template>

<script>
export default {
  name: "App",
  data(){
      return{
          data: "",
            }
  },
  methods:  {
        test() {
            const requestOpt = { method: "GET", redirect: "follow" };
            fetch("http://localhost:3000/api/question", requestOpt)

                .then((response) => response.json())
                .then((data) => {
                    this.data = (data[0].question);
                    console.log(data[0].question)
                })
                .catch((error) => { console.log("error", error); })
        },
    },
};

const element = document.querySelector('#post-request-set-headers .article-id');
const requestOptions = {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer my-token',
        'My-Custom-Header': 'foobar'
    },
    body: JSON.stringify({ reponse: '' })
};
fetch('http://localhost:3000/api/question', requestOptions)
    .then(response => response.json())
    .then(data => element.innerHTML = data.reponse);

</script>

<style>
#app {
    display: block;
}
</style>
