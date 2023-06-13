<template>
  <div class="container">
    <h1>Inicio de sesión</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Nombre de usuario:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Iniciar sesión</button>
          </form>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      message: '',
      newUsername: '',
      newPassword: '',
      registerMessage: ''
    };
  },
  methods: {
    async login() {
      try {
        const url = 'http://localhost:3000'
        const response = await fetch(url+'/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password
          })
        });
        const data = await response.json();
        if (response.ok) {
          this.message = data.message;
          // Realizar acciones adicionales después de iniciar sesión exitosamente
        } else {
          this.message = data.error;
        }
      } catch (error) {
        this.message = 'Ocurrió un error al iniciar sesión.';
      }
    },
  }
};
</script>
