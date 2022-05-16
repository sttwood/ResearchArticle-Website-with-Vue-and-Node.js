<template>
  <div class="mb-10">
    <v-card class="mt-5 pl-5 pt-1 pb-1">
        <h1>Research Dashboard</h1>
        <v-divider></v-divider>
        <br>
        <h4>
           - First graph show The total research of each year.
        </h4>
        <h4>
           - Second graph show The total compensation of each fiscal year.
        </h4>
        <h4>
           - Third graph show The total research of each school.
        </h4>
        <br>
    </v-card>
    
    <v-container class="mt-5">
        <v-row>
            <v-col cols="12" md="6">
                <v-card>
                    <bar-chart 
                        v-if="sumfis_loaded"
                        :barchartdata="sumfis_apidata" 
                        :barchartoptions="chartoptions" />
                    </v-card>
            </v-col>
            <v-col cols="12" md="6">
                    <v-card>
                        <doughnut-chart
                        v-if="sumcompen_loaded"
                        :doughnutchartdata="sumcompen_apidata" 
                        :doughnutchartoptions="chartoptions" />
                    </v-card>
                </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="12">
                <v-card>
                    <bar-chart 
                        v-if="sumschool_loaded"
                        :barchartdata="sumschool_apidata" 
                        :barchartoptions="chartoptions" />
                </v-card>
            </v-col>
        </v-row>
    </v-container>

  </div>
</template>

<script>
const sumfisurl = "http://localhost:5000/api/sumfiscal_year";
const compenfisurl = "http://localhost:5000/api/sumcompensation"
const sumschoolurl = "http://localhost:5000/api/sumschool";

export default {
    layout: "defaultAdmin",
    data() {
        return {
            sumfis_loaded: false,
            sumfis_apidata: {
                labels: [],
                datasets: [],
            },
            sumcompen_loaded: false,
            sumcompen_apidata: {
                labels: [],
                datasets: [],
            },
            sumschool_loaded: false,
            sumschool_apidata: {
                labels: [],
                datasets: [],
            },
            chartoptions: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        }
                    }]
                }
            },
            bardata: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
        }
    },
    methods: {
        async getSumFiscal_year(){
            this.sumfis_loaded = false;
            try{
                const res = await this.$axios.get(sumfisurl);
                var results = res.data.response;
                var templabels = [], 
                    tempdata = [];
                results.forEach(function (x) {
                    templabels.push(x.fiscal_year);
                    tempdata.push(x.sumfiscal_year);
                });
                var tempAPIdata = {
                    labels: templabels,
                    datasets: [
                        {
                            label: "Sum of Fiscal year",
                            backgroundColor: ["tomato", "MediumPurple", "lightblue", "khaki", "palegreen", "green", "indigo"],
                            data: tempdata,
                        }
                    ],
                }
                console.log(tempAPIdata)
                this.sumfis_apidata = tempAPIdata;
                this.sumfis_loaded = true;
            } catch(e) {
                console.error(e);
            }
        },

        async getSumCompensation(){
            this.sumcompen_loaded = false;
            try{
                const res = await this.$axios.get(compenfisurl);
                var results = res.data.response;
                var templabels = [], 
                    tempdata = [];
                results.forEach(function (x) {
                    templabels.push(x.fiscal_year);
                    tempdata.push(x.total_compensation);
                });
                var tempAPIdata = {
                    labels: templabels,
                    datasets: [
                        {
                            label: "Sum of Fiscal year",
                            backgroundColor: ["khaki", "green", "lightblue", "indigo", "palegreen", "purple", "tomato"],
                            data: tempdata,
                        }
                    ],
                }
                console.log(tempAPIdata)
                this.sumcompen_apidata = tempAPIdata;
                this.sumcompen_loaded = true;
            } catch(e) {
                console.error(e);
            }
        },

        async getSumSchool(){
            this.sumschool_loaded = false;
            try{
                const res = await this.$axios.get(sumschoolurl);
                var results = res.data.response;
                var templabels = [], 
                    tempdata = [];
                results.forEach(function (x) {
                    templabels.push(x.school);
                    tempdata.push(x.sumschool);
                });
                var tempAPIdata = {
                    labels: templabels,
                    datasets: [
                        {
                            label: "Sum of School",
                            backgroundColor: ["red", "Purple", "tomato", "green", "indigo", "cyan", "gray", "yellow", "pink", "orange", "brown", "khaki", "palegreen", "lightblue", "lime"],
                            data: tempdata,
                        }
                    ],
                }
                console.log(tempAPIdata)
                this.sumschool_apidata = tempAPIdata;
                this.sumschool_loaded = true;
            } catch(e) {
                console.error(e);
            }
        },
    },
    mounted() {
        this.getSumFiscal_year();
        this.getSumCompensation();
        this.getSumSchool();
    },
}
</script>
