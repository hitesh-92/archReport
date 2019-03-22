<template>
    <section id="columns">
        <LeftColumn />
        <CenterColumn />
        <RightColumn />
    </section>
</template>

<script>
import LeftColumn from './Left'
import RightColumn from './Right'
import CenterColumn from './Center'

export default {
    components:{
        LeftColumn,
        CenterColumn,
        RightColumn
    }
}
</script>

<style>
#columns{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

#columns div{
    transition: 0.6s ease-in-out;
    margin: 0rem 0.5rem;
    padding: 0.35rem 0.5rem;
    border: 1px solid white;
}

#columns div:hover{
    background-color: rgb(255, 232, 232);
    text-shadow: 1px 1px 1px rgb(162, 184, 255)
}

#columns div a{
    text-decoration: none;
}
</style>
