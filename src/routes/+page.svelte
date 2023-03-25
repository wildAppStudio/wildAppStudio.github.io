<script>
    import Footer from "../components/footer.svelte";
    import Gnb from "../components/gnb.svelte";
    import AppCard from "../components/appCard.svelte";

    export let data;
</script>

<svelte:head>
    <title>야생 앱공방</title>
</svelte:head>

<Gnb />

<div class="container-basic mt-7">
    <div class="mb-10">
        <h2 class="text-20-bold">제작 목록</h2>
        <p class="text-16-sub">만들었다고 자랑하려고 만들거나 실험해보려고 만든 실제 또는 가상 서비스 목록</p> 
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        {#each data.app as item}
        <AppCard id={item.id}
                 image={item.info.image}
                 title={item.info.title}
                 description={item.info.description} />
        {/each}
    </div>
</div>

<Footer />