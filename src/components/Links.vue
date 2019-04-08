<template>
    <section id="columns">
        <LeftColumn />
        <CenterColumn />
        <RightColumn />
    </section>
</template>

<script>
import LeftColumn from './columns/Left'
import RightColumn from './columns/Right'
import CenterColumn from './columns/Center'

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
    padding: 1rem 0;
}

#columns div{
    transition: 0.6s ease-in-out;
    margin: 0rem 0.5rem;
    padding: 0.35rem 0.5rem;
    border: 1px solid white;
}

#columns div:hover{
    background-color: rgb(255, 232, 232);
    text-shadow: 1px 1px 1px rgb(162, 184, 255);
}

#columns div a{
    text-decoration: none;
}

/* MAIN NEW COLOR */
.new{
    background-color: rgb(242, 255, 241)
}

.older {
    background-color: rgb(255, 243, 221)
}

</style>
