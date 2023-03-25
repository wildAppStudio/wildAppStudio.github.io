<script>
    import Footer from "../../components/footer.svelte";
    import Gnb from "../../components/gnb.svelte";

    export let data;
    const {app} = data;

</script>

<Gnb />
<div class="container-basic">
    <div class="flex justify-start items-center py-5 border-b divider-main-color mb-12">
        {#if app.info.title !== 'Error'}
        <a class="text-16-link" href="/">제작 목록</a>
        <svg class="stroke-neutral-900 dark:stroke-neutral-200 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
          
        <a class="text-16-link" href="/{app.id}">{app.info.title}</a>
        {:else}
        <a class="text-16-link" href="/">뒤로가기</a>
        {/if}
    </div>

    <div class="flex justify-start items-center gap-x-5 my-4">
        <img class="w-20 h-20 rounded-xl drop-shadow-lg" src="{app.info.image}" alt="{app.id}">
        <div>
            <h1 class="text-20-bold">{app.info.title}</h1>
            <p class="text-16-sub">{app.info.description}</p>
        </div>
    </div>
    
    <div class="mt-9">
        <h4 class="text-20-bold pb-3">제작 History</h4>

        {#each app.history.reverse() as item}
            <div class="py-4">
                <div class="flex justify-start gap-x-3 items-center">
                    <p class="text-20">{item.version}</p>
                    <p class="text-16-sub">{item.date}</p>
                </div>
                <p class="text-16-sub">{item.description}</p>
            </div>
        {/each}
    </div>
</div>

<Footer />