<template>
  <div class="cont-view">
    <vue-cal
             :time="false"
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
  }
</script>
