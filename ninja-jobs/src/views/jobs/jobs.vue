<template>
    <h1>View Jobs</h1>
<div v-for="job in jobs" :key="job.id" class="jobClass">
<router-link :to="{name : 'jobDetails' , params : {id : job.id}}">
<h2>{{job.title}}</h2>
</router-link>
</div>
  </template>
  
  <script>
  export default {
    data(){
        return{
            // jobs: [
            //     {title: 'UX Designer' , id: 1, details: 'lorem'},
            //     {title: 'Web Developer' , id: 2, details: 'lorem'},
            //     {title: 'Data Analyst' , id: 3, details: 'lorem'},
            // ]
            jobs: []
        }
    },
    mounted(){
        fetch('http://localhost:3000/jobs')
        .then(res => res.json())
        .then(data => this.jobs = data)
        .catch(err => console.log(err.message))
    }
    
  
  }
  </script>
  
  <style>
  .jobClass h2{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    min-width: 600px;
    cursor: pointer;
    color: #444;
  }
  .jobClass h2:hover{
    background: #ddd;
  }
  .jobClass a{
    text-decoration: none;
  }
  </style>