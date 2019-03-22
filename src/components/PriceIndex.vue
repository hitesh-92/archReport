<template>
    <section>
        <p><span>BTC/USD</span>: <span :style="color">{{curr_price}}</span></p>
    </section>
</template>

<script>
export default {
    data(){
        return{
            curr_price: null,
            old_price: undefined,
            color: {color: 'rgb(114, 130, 139)'}
        }
    },
    mounted(){

        function getRate(){
            return new Promise((resolve, reject) => {
            fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(r => r.json())
            .then(r => {
                const price = r.bpi.USD.rate_float
                resolve(price)
            })
            .catch(e => reject(e))
            })
        }

        getRate().then(rate => this.curr_price = rate)

        setInterval(() => {
            getRate().then(rate => {

                if(rate == undefined) return

                //old_rate starts off as undefined, 1st call will chage to null then use to switch colors
                if (this.old_price === undefined) this.old_price = null
                else {
                    if (rate === this.curr_price) this.color.color = 'rgb(177, 177, 177)'
                    else rate > this.old_price ? this.color.color='rgb(53, 110, 0)' : this.color.color='rgb(114, 11, 11)'
                }
                console.log(Date.now())
                this.old_price = this.curr_price
                this.curr_price = rate
            })
        }, 10000)
    }
}
</script>

<style scoped>
    p{
        margin: 0.5rem 1rem;
        font-size: 0.9rem;
    }

    .red{color: rgb(114, 11, 11)}
</style>
