<template>
  <v-data-table
    :headers="headers"
    :items="requestlists"
    class="elevation-1 mb-10 mt-10"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Manage Request</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
            <v-icon class="mr-2">mdi-plus</v-icon>
              New Request
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <!-- Fiscal year -->
                  <v-col cols="12" sm="12" md="6">
                      <v-select
                        :items="fcyears"
                        v-model="editedItem.fiscal_year"
                        label="Fiscal Year"
                        dense>
                        </v-select>
                  </v-col>
                  <!-- Meeting Number -->
                  <v-col cols="12" sm="12" md="6">
                      <v-select
                        :items="meetnums"
                        v-model="editedItem.meeting_number"
                        label="Meeting Number"
                        dense>
                        </v-select>
                  </v-col>
                  <!-- Full Name -->
                  <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.fullname"
                        label="Fullname"
                      ></v-text-field>
                  </v-col>
                  <!-- School -->
                  <v-col cols="12" sm="12" md="12">
                      <v-select
                        :items="schools"
                        v-model="editedItem.school"
                        label="สำนักวิชา"
                        dense>
                        </v-select>
                  </v-col>
                  <!-- Publication -->
                  <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.publication"
                        label="Publication"
                      ></v-text-field>
                  </v-col>
                  <!-- Level Type -->
                  <v-col cols="12" sm="6" md="4">
                      <v-select
                        :items="levtype"
                        v-model="editedItem.level_type"
                        label="Level Type"
                        dense>
                        </v-select>
                  </v-col>
                  <!-- Level -->
                  <v-col cols="12" sm="6" md="4">
                      <v-select
                        :items="lev"
                        v-model="editedItem.level"
                        label="Level"
                        dense>
                        </v-select>
                  </v-col>
                  <!-- Type -->
                  <v-col cols="12" sm="6" md="4">
                      <v-select
                        :items="types"
                        v-model="editedItem.type"
                        label="Types"
                        dense>
                        </v-select>
                  </v-col>
                  <!-- Compensation -->
                  <v-col cols="12" sm="6" md="12">
                      <v-text-field
                        v-model="editedItem.compensation"
                        label="Compensation"
                      ></v-text-field>
                  </v-col>
                  <!-- Request Date (Datetime) -->
                  <v-col cols="12" sm="6" md="6">
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="date"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="editedItem.request_date"
                          label="Request date"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="editedItem.request_date"
                        no-title
                        scrollable
                      >
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu = false">
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.menu.save(date)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                  <!-- Budget Source -->
                  <v-col cols="12" sm="12" md="6">
                      <v-select
                        :items="bud_sc"
                        v-model="editedItem.budget_source"
                        label="Budget Source"
                        dense>
                        </v-select>
                  </v-col>
                  <!-- Publication Name -->
                  <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.publication_name"
                        label="Publication Name"
                      ></v-text-field>
                  </v-col>
                  <!-- Published year issue pages -->
                  <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.published_year_issue_pages"
                        label="Publish year issue pages"
                      ></v-text-field>
                  </v-col>
                  <!-- First Author -->
                  <v-col cols="12" sm="6" md="6">
                      <v-select
                        :items="firstau"
                        v-model="editedItem.first_author"
                        label="First Author"
                        dense>
                        </v-select>
                  </v-col>
                  <!-- All Author -->
                  <v-col cols="12" sm="12" md="12">
                      <v-textarea
                        v-model="editedItem.all_author"
                        label="All Author"
                      ></v-textarea>
                  </v-col>
                  <!-- Remark -->
                  <v-col cols="12" sm="12" md="12">
                      <v-select
                        :items="rem"
                        v-model="editedItem.remark"
                        label="Remark"
                        dense>
                        </v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
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
    layout: "defaultAdmin",
    data: () => ({
      dialog: false,
      dialogDelete: false,
      menu: false,
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      headers: [
        { text: '#', value: 'request_id' },
        { text: 'Fiscal Year', value: 'fiscal_year' },
        { text: 'Meeting Number', value: 'meeting_number' },
        { text: 'FullName', value: 'fullname' },
        { text: 'School', value: 'school' },
        { text: 'Publication', value: 'publication' },
        { text: 'Level Type', value: 'level_type' },
        { text: 'Level', value: 'level' },
        { text: 'Type', value: 'type' },
        { text: 'Compensation', value: 'compensation' },
        { text: 'Request Date', value: 'request_date' },
        { text: 'Budget Source', value: 'budget_source' },
        { text: 'Publication Name', value: 'publication_name' },
        { text: 'Published Year Issue Pages', value: 'published_year_issue_pages' },
        { text: 'First Author', value: 'first_author' },
        { text: 'All Author', value: 'all_author' },
        { text: 'Remark', value: 'remark' },
        { text: 'Actions', value: 'actions', sort: false },
      ],
      fcyears: [
        2560,
        2561,
        2562,
        2563,
        2564,
        2565,
        2566,
      ],
      meetnums: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ],
      schools: [
        'ศิลปศาสตร',
        'วิทยาศาสตร',
        'การจัดการ',
        'อุตสาหกรรมการเกษตร',
        'เทนโนโลยีสารสนเทศ',
        'นิติศาสตร',
        'วิทยาศาสตร์',
        'วิทยาศาสตร์เครื่องสำอาง',
        'วิทยาศาสตร์เพื่อสุขภาพ',
        'ศูนย์ความเป็นเลิศทางด้านการวิจัยเชื้อรา',
        'พยาบาลศาสตร์',
        'เวชศาสตร์ชะลอวัยและฟื้นฟูสุขภาพ',
        'แพทย์ศาสตร์',
        'ทันตแพทยศาสตร์',
        'นวัตรกรรมสังคม',
        'จีนวิทยา',
      ],    
      levtype: [
        'บทความวิจัย ISI (Q1)',
        'บทความวิจัย SJR (Q1)',
        'บทความวิจัย SJR (Q2)',
        'บทความวิจัย SJR (Q3)',
        'บทความวิจัย SJR (Q4)',
        'บทความวิจัย ฐานข้อมูลก.พ.อ. (Scopus)',
        'บทความวิชาการ TCI กลุ่ม 1',
        'ทรัพย์สินทางปัญญา (อนุสิทธิบัตร)',
        'งานสร้างสรรค์ ระดับนานาชาติ',
      ],
      lev: [
        'Q1',
        'Q2',
        'Q3',
        'Q4',
        'TCI 1',
        'SCOPUS',
        'ฐาน ก.พ.อ',
        'อนุสิทธิบัตร',
        'นานาชาติ'
      ],
      types: [
        'ทรัพย์สินทางปัญญา',
        'International Publication',
        'National Publication',
        'International Creative'
      ],
      bud_sc: [
        'มฟล.',
        'Reinventing'
      ],
      firstau: [
        '-',
        'First author',
        'Corresponding author',
      ],
      rem: [
        'คุณสมบัติผู้ขอรับครบถ้วน',
        'คุณสมบัติผู้ขอรับไม่ถูกต้อง'
      ],
      
      requestlists: [],
      editedIndex: -1,
      editedItem: {
        fiscal_year: 0,
        meeting_number: 0,
        fullname: "",
        school: "",
        publication: "",
        level_type: "",
        level: "",
        type: "",
        compensation: 0,
        request_date: "",
        budget_source: "",
        publication_name: "",
        published_year_issue_pages: "",
        first_author: "",
        all_author: "",
        remark: ""
      },
      defaultItem: {
        fiscal_year: 0,
        meeting_number: 0,
        fullname: "",
        school: "",
        publication: "",
        level_type: "",
        level: "",
        type: "",
        compensation: 0,
        request_date: "",
        budget_source: "",
        publication_name: "",
        published_year_issue_pages: "",
        first_author: "",
        all_author: "",
        remark: "",
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
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

      editItem (item) {
        this.editedIndex = this.requestlists.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.requestlists.indexOf(item)
        this.editedItem = Object.assign({}, item)
        console.log(this.editedItem)
        this.dialogDelete = true
      },

      async deleteItemConfirm () {
        const del_url = url + "/" + this.editedItem.request_id
        console.log(del_url)
        try{
            const res = await this.$axios.delete(del_url)
            this.requestlists.splice(this.editedIndex, 1)
        } catch (e) {
            console.log(e)
        }
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      async save () {
        if (this.editedIndex > -1) {
            const put_url = url + "/" + this.editedItem.req_id
            Object.assign(this.requestlists[this.editedIndex], this.editedItem)
            try{
                const res = await this.$axios.put(put_url, this.editedItem)
            }catch(e){
                console.log(e)
            }
            // PUT API here
        } else {
            this.requestlists.push(this.editedItem)
            try{
                const res = await this.$axios.post(url, this.editedItem)
                this.initialize()
            }catch(e){
                console.log(e)
            }
            // POST API here
        }
        this.close()
      },
    }
  }
</script>