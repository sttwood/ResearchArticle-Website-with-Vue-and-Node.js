<template>
    <v-container class="mt-10">
        <v-card class="mb-3" cols="auto">
            <v-toolbar
            color="success"
            dark>
                <h1>Login</h1>
            </v-toolbar>
            <v-card-text>
                <v-text-field
                label="Username"
                v-model="uname"
                >
                </v-text-field>

                <v-text-field 
                label="Password"
                v-model="pwd"
                >
                </v-text-field>
                <v-btn
                depressed
                color="success"
                @click="handleLoginClicked">
                    Login
                </v-btn>
            </v-card-text>
        </v-card>

        <v-alert 
        :value="alert"
        dismissible
        type="error"
        transition="scale-transition">
        Your username or password are not correct.
        </v-alert>
    </v-container>
</template>


<script>
  export default {
    data() {
        return {
            uname: '',
            pwd: '',
            alert: false
        }
    },

    methods: {
        handleLoginClicked() {
            if(this.uname == 'admin' && this.pwd == 'admin'){
               this.$router.replace({name: 'admin'})
            } else {
                this.alert = true
            }
        },
    }
}
</script>

<style>
</style>