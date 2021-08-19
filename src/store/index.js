import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    students:[]
  },
  mutations: {
    increment(state){
      state.count++
    },
    getStudents(state, student){
      state.students.push(student)
    },
    getStudentsState(state, student){
      state.students = student
    }
  },
  actions: {
    saveDataToLocalStorage({state}){
      const data = JSON.stringify(state.students)
      localStorage.setItem('students', data)
    },

    loadDataToLocalstorage(){
      let data = JSON.parse(localStorage.getItem('students'))

      if (data){
        this.commit('getStudentsState', data)
      }
    }
  },
  getters:{
  },
  modules: {},
});
