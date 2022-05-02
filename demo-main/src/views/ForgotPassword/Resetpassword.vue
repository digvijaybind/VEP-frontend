<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="form.email"
          label="E-mail"
          readonly
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="form.otp"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="OTP"
          hint="At least 8 characters"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>

        <v-text-field
          v-model="form.password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="NewPassword"
          hint="At least 6 Numbers"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>
      </v-col>

      <v-spacer></v-spacer>
      <v-col class="d-flex" cols="12" sm="3" xsm="12">
        <v-btn block color="success" class="mr-4" @click="reset()">
          ResetPassword
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { resetPassword } from "@/service/Login&Register";
export default {
  name: "Newpassword",
  data: () => {
    return {
      form: {
        email: "",
        otp: "",
        password: "",
      },
    };
  },

  created: {},
  mounted() {
    this.form.email = this.$store.state.email;
  },
  methods: {
    reset() {
      resetPassword(this.form)
        .then((response) => {
          console.log(response);
          this.$swal("password is updated");
          this.$router.push({ name: "loginAndRegister" });
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
