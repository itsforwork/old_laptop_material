const axios = require("axios")

const getfun1 = () => {
    axios.get('https://api.apilayer.com/fixer/latest?apikey=iG4QESDWXjOp3Jb8Ya9zIAMwTgAN44wW').then((res) => {
        const rate = res.data.rates
        console.log(rate)
    })

}
//getfun1('USD', 'EUR')


//axios using promise
const getfun2 = (from, to) => {
    let config = {
        method: 'get',
        url: 'https://api.apilayer.com/fixer/latest',
        headers: {
            'apikey': 'iG4QESDWXjOp3Jb8Ya9zIAMwTgAN44wW'
        }
    };
    console.log('waiting')
    axios(config)
        .then((res) => {
            console.log((res.data.rates));
        })
    console.log('waiting....')

}
//getfun2('USD', 'EUR')


//axios using async-await
const getfun3 = async () => {
    let config = {
        method: 'get',
        url: 'https://api.apilayer.com/fixer/latest',
        headers: {
            'apikey': 'iG4QESDWXjOp3Jb8Ya9zIAMwTgAN44wW'
        }
    };
    console.log('waiting')
    const res = await axios(config)

    console.log(res.data.rates);

    console.log('waiting....')

}
//getfun3()


const getfun4 = async () => {
    let config = {
        //we can give ye details here too, or direct axious me bhi 
      //  method: 'get',
      //  url: 'https://api.apilayer.com/fixer/latest',
        headers: {
            'apikey': 'iG4QESDWXjOp3Jb8Ya9zIAMwTgAN44wW'
        }
    };
    //phele ye chalega
    console.log('waiting')

    //then it will wait for this to complete
    const res = await axios.get('https://api.apilayer.com/fixer/latest',config)
    console.log(res.data.rates);

    //uske baad ye chalega
    console.log('waiting....')
   

}
getfun4()



