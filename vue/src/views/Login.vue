<template>
  <div class="text-center" id="login">
    <div class="login-page">
      <v-row align="center">
        <div class="login-header">
          <h3>For All The Marbles</h3>
        </div>
        <form class="form form-signin form" @submit.prevent="login">
          <h1>
          <img 
          id="logo" 
          src="LogoOnlyNoBackground.png">
          </h1>
          <div
            class="alert alert-danger"
            role="alert"
            v-if="invalidCredentials"
          >
            Invalid username and password!
          </div>
          <div
            class="alert alert-success"
            role="alert"
            v-if="this.$route.query.registration"
          >
            Thank you for registering, please sign in.
          </div>
          <label id="user" for="username" class="sr-only"
            ></label
          >
          <input
            type="text"
            id="username"
            class="form-control"
            placeholder="Username"
            v-model="user.username"
            required
            autofocus
          />
          <label id="pass" for="password" class="sr-only"
            ></label
          >
          <input
            type="password"
            id="password"
            class="form-control"
            placeholder="Password"
            v-model="user.password"
            required
          />
          <router-link id="register" :to="{ name: 'register' }"
            >Need an account?</router-link
          >
          <button id="submitButton" type="submit">Sign in</button>
        </form>
      </v-row>
    </div>
  </div>
</template>

<script>
import authService from "../services/AuthService";

export default {
  name: "login",
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      invalidCredentials: false,
    };
  },
  methods: {
    login() {
      authService
        .login(this.user)
        .then((response) => {
          if (response.status == 200) {
            this.$store.commit("SET_AUTH_TOKEN", response.data.token);
            this.$store.commit("SET_USER", response.data.user);
            this.$router.push("/");
          }
        })
        .catch((error) => {
          const response = error.response;

          if (response.status === 401) {
            this.invalidCredentials = true;
          }
        });
    },
  },
};
</script>

<style scoped>
.login-page {
  position: relative;
  width: 360px;
  padding: 8% 0 0;
  margin: 0px auto;
  font-family: "Roboto", sans-serif;
  left: -47px;
}
.form {
  margin: 0px auto;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background-color: #ffb703;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form .message {
  margin: 15px 0 0;
  color: #023047;
  font-size: 12px;
}
.form .message a {
  color: black;
  text-decoration: none;
}

body {
  background-color: #ffb703;
  background-image: linear-gradient(45deg, #ffb703, #ffb703);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
p {
  font-family: "Roboto", sans-serif;
  font-size: x-large;
  color: #ffb703;
  margin: auto;
  padding-left: 18%;
}
#register {
  font-family: "Roboto", sans-serif;
}
#submitButton {
  margin: 25px auto;
}
#password {
  margin-top: 5%;
}
#username {
  margin-top: 5%;
}

h3 {
  font-size: xx-large;
}

.form img {
  height: 100%;
  width: 100%;
  object-fit: contain;

}
</style>
