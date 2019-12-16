<template>
  <div class="cont-view">
    <vue-cal
             :time-from="9 * 60"
             :time-to="23 * 60"
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
            start: '2019-12-17 10:30',
            end: '2019-12-17 16:30',
            title: 'Turno',
            content: '',
            class: 'pega'
          },
          {
            start: '2019-12-16 9:00',
            end: '2019-12-16 14:00',
            title: 'Turno',
            content: '',
            class: 'pega'
          },
          {
            start: '2019-12-22 14:00',
            end: '2019-12-22 21:00',
            title: 'Turno',
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