<template>
  <section class="container">
      <h1 class="cards__title">Analytics</h1>
      <!-- REAL -->
      <pre>{{getInterestOfStudent}}</pre>
    <div class="cards">
        <div class="card">
          <div class="card-details">
              <h3 class="card__number">1</h3>
              <h1 class="card__title">2</h1>
        </div>
         </div>
      </div>

  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Cards',
    computed:{
        ...mapState({
            students: state => state.students
        }),
    
        getInterestOfStudent(){
            return this.students.filter(s => s.interesting === 'IT')
        }
    },
}
</script>

