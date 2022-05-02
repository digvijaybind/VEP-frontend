<template>
  <v-container>
    <v-form ref="forgotForm" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="email" label="E-mail" required></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="d-flex" cols="12" sm="3" xsm="12">
          <v-btn block color="success" class="mr-4" @click="forgot()">
            Send OTP
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { forgotPassword } from "@/service/Login&Register";
export default {
  name: "Email",
  data: () => {
    return {
      email: "",
    };
  },

  created: {},

  methods: {
    forgot() {
      forgotPassword({ email: this.email })
        .then((response) => {
          if (response.success) {
            this.$store.commit("setEmail", this.email);
            this.$router.push({ name: "reset" });
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
