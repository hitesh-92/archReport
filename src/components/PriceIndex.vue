<template>
    <section>
        <p><span><i>BTC/USD:</i></span>{{price|priceDecimal}}</p>
    </section>
</template>

<script>
export default {
    data(){
        return{
            price: null
        }
    },
    mounted(){
        // axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        // .then(response => (this.info = response))
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(r => r.json())
        .then(res => this.price = res.bpi.USD.rate_float)
    },
    filters: {
        priceDecimal (value) {
        return value.toFixed(2)
    }
},
}
</script>

<style scoped>
    i{
        margin: 0.5rem 1rem
    }
</style>
