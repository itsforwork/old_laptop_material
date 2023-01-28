<template>
 <!-- kuki initially jobs null hai to error dega  -->
  <div v-if="job">
  <h1>{{job.title}}</h1>
  <p>This is {{id}}</p>
  <p>{{job.details}}</p>
  </div>
  <div v-else>
<p>Loading job details...</p>
  </div>

</template>

<script>
export default {
    props: ['id'],
    // data(){
    //     return{
    //         id: this.$route.params.id
    //     }
    // }
    data(){
        return{
            job: null
        }
    },
    mounted(){
        fetch('http://localhost:3000/jobs' + this.id)
        .then(res => res.json())
        .then(data => this.jobs = data)
        .catch(err => console.log(err.message))
    }

}
</script>

<style>

</style>