<template>
  <div>
    <PriceIndex />

    <Alert />

    <h1 class="display-1 text-xs-center" id="title">Gohil Report</h1>

    <main>
      <Links />
    </main>

  </div>
</template>

<script>
  import PriceIndex from '../components/PriceIndex'
  import Alert from '../components/Alert'
  import Links from '../components/Links'

  export default {
    components: {
      PriceIndex,
      Alert,
      Links
    }
  }
</script>

<style scoped>  

#title{
  padding: 5rem 0;
}

</style>
