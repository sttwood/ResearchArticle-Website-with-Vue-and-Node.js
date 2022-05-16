<template>
  <v-data-table
    :headers="headers"
    :items="requestlists"
    :search="search"
    class="elevation-1 mt-10"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Research Article</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details>
        </v-text-field>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>           
          </v-card>
        </v-dialog>
        
      </v-toolbar>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
const url = "http://localhost:5000/api/requests";
  export default {
    layout: 'defaultAdmin',
    data: () => ({
      dialog: false,
      dialogDelete: false,
      search: '',
      headers: [
        { text: '#', value: 'request_id' ,filterable: false,},
        { text: 'FullName', value: 'fullname' },
        { text: 'School', value: 'school' },
        { text: 'Publication Name', value: 'publication_name' },
        { text: 'Publication', value: 'publication' },
        { text: 'Level Type', value: 'level_type' },
        { text: 'Remark', value: 'remark' },
        { text: 'Fiscal Year', value: 'fiscal_year' },

      ],
      requestlists: [],
    
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      async initialize () {
        const res = await this.$axios.get(url)
        this.requestlists = res.data.response
      },

    
    },
  }
</script>