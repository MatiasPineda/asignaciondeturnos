<template>
  <div class="cont-view plantilla-mensual">
    <vue-cal
             :time="false"
             events-count-on-year-view
             default-view="month"
             :disable-views="['years', 'year', 'week', 'day']"
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
    name: "PlantillaMensual",
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

  }
</script>

<style lang="scss">
  .plantilla-mensual {
    .vuecal__cell--has-events {background-color: #fffacd;}
    .vuecal__cell-events-count {display: none;}
  }
</style>