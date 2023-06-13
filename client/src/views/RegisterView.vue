<template>
  <div class="container">
    <h1>Registro de usuario</h1>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="newUsername">Nombre de usuario:</label>
        <input type="text" id="newUsername" v-model="newUsername" required>
      </div>
      <div class="form-group">
        <label for="newPassword">Contraseña:</label>
        <input type="password" id="newPassword" v-model="newPassword" required>
      </div>
      <button type="submit">Registrarse</button>
    </form>
    <p>{{ registerMessage }}</p>
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
    async register() {
      try {
        // const response = await fetch('/api/register', {
        const url = 'http://localhost:3000'
        const response = await fetch(url+'/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            nombre: this.newUsername,
            password: this.newPassword
          })
        });
        const data = await response.json();
        if (response.ok) {
          this.registerMessage = data.message;
          // Realizar acciones adicionales después de registrar exitosamente
        } else {
          this.registerMessage = data.error;
        }
      } catch (error) {
        this.registerMessage = 'Ocurrió un error al registrar el usuario.';
      }
    }
  }
};
</script>
