// //make a function to get issues of a given repository
import fetch from "node-fetch"
import axios from 'axios';
const token = 'TOKEN_VALUE';
//function that uses fetch method
const requestReposissues= (givenAPI)=>{

   fetch(`https://api.github.com/repos/${givenAPI}/issues/2409`,{
    headers: {
        'Accept': 'application/vnd.github.v3+json',
        //'Authorization': `token ${token}`
    }
})
    .then((resp)=>{return resp.json()})
    .then((data)=>{console.log(data)})
    .catch((err)=>{console.log(err)})

}
//requestReposissues('octocat/hello-world')


//same as above using async-await instaed of promises
const fetchRandomUser = () => {
    fetch('https://api.github.com/repos/octocat/hello-world/issues').then(async response => {
      const data = await response.json()
      console.log(data)
      
    })
  }
  
//fetchRandomUser()

//function that uses axios method
const getIssues= ()=>{
let config={
    method: 'get',
    url: 'https://api.github.com/repos/octocat/hello-world/issues/2409',
    headers: {}
}
axios(config)
    .then(resp=>{console.log(resp.data)})
    .catch((err)=>{console.log(err)})
}
getIssues()