<template>
  <div class="about">
    <cards/>

    
    <pre>{{students}}</pre>
    <div v-for="(student, index) in students" :key="index">
      <span>{{student.firstName}}</span>
    </div>
 
  </div>
</template>
<script>
import Cards from '@/components/Cards'
import { mapState } from 'vuex'
export default {
  name:"About",
  components:{
    Cards
  },
    mounted(){
    this.$store.dispatch('loadDataToLocalstorage')
  },
  computed:{
    ...mapState({
      students: state => state.students
    })
  },
}
</script>
