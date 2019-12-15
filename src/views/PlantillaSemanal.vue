<template>
  <div class="cont-view">
    <vue-cal
             :time-from="9 * 60"
             :time-to="22 * 60"
             :disable-views="['years', 'year', 'month', 'day']"
             :show-all-day-events="['short', true, false][showAllDayEvents]"
             :events-on-month-view="[true, 'short'][shortEventsOnMonthView * 1]"
             :events="events">
    </vue-cal>
  </div>
</template>

<script>
  import VueCal from 'vue-cal';
  import 'vue-cal/dist/vuecal.css';

  export default {
    name: "PlantillaSemanal",
    components: {
      VueCal
    },
    data(){
      return {
        events: [
          {
            start: '2019-12-15 10:30',
            end: '2019-12-15 11:30',
            title: 'Reunión',
            content: '',
            class: 'pega'
          },
          {
            start: '2019-12-16',
            end: '2019-12-16',
            title: 'Contrato',
            content: '',
            class: 'pega'
          },
          {
            start: '2018-11-22',
            end: '2018-11-22',
            title: 'Dad\'s birthday!',
            content: '',
            class: 'pega'
          }
        ]
      }
    },
    computed: {
      hoy(){
        return new Date();
      }
    }
  }
</script>

<style>
  .vuecal__event.pega {background-color: rgba(255, 102, 102, 0.9);border: 1px solid rgb(235, 82, 82);color: #fff;}
</style>