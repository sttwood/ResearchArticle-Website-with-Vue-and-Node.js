import { Doughnut } from 'vue-chartjs'
export default {
    extends: Doughnut,
    props: {
        doughnutchartdata: {
            type: Object,
            default: null
        },
        doughnutchartoptions: {
            type: Object,
            default: null
        }
    },
    mounted () {
        this.renderChart(this.doughnutchartdata, this.doughnutchartoptions)
    }   
}