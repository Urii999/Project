<script setup>
import { onMounted, ref } from 'vue'


const inputUrl = ref('')
let result = ref('');



//fetch('https://pokeapi.co/api/v2/pokemon/ditto').then( x => x.json() ).then( resp => console.log(resp));
fetch('http://localhost:3333/api/short').then( x => x.json() ).then( resp => console.log(resp));



async function shorten() {
  console.log('url:', inputUrl.value);

  const url = 'http://localhost:3333/api/short'

  const formData = new FormData();
  formData.append('origUrl', inputUrl.value);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({
    //   origUrl: inputUrl.value
    // })
    body: formData
  });

   // Verificar si la URL tiene un formato válido
   if (!validateUrl(inputUrl.value)) {
    console.log('La URL ingresada no tiene un formato válido.');
    return;
  }

  console.log('url:', inputUrl.value);

  const data = await response.json();
  if (response.ok) {
    console.log('ok')
    result.value = response;
    // Realizar acciones adicionales después de iniciar sesión exitosamente
  } else {
    console.log('error')
    result.value = "ha ocurrido un error";
  }
}
</script>

<template>
  <main>
    <h1>Short URL</h1>
    <form @submit.prevent="shorten">
        <input type="text" id="url" v-model="inputUrl" required>
      <button type="submit">Short URL</button>
    </form>

    <div>{{ result }}</div>
  </main>
</template>

<style scoped>
</style>
