
<template>

    <header>
        <router-link :to= "{
            name: 'principal'
        }" >
        <img class="logo" src="/img/logo2.png" alt="logo">
        </router-link>
    </header>


</template>

<style scoped>

header{
    background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
    padding: 15px;
    /*box-shadow: 0px 6px 18px rgba(214, 40, 30, 0.55);*/
    box-shadow: 0 2px 12px rgba(214, 40, 30, 0.15);
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
}

.logo{
    height: 60px;
    background: transparent ;
}


</style>