export default function({$axios, redirect}) {
    $axios.onRequest(config => {
        console.log('Fazendo request para: ', config.url)
    })

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if(code == 400){

        }
    })
}