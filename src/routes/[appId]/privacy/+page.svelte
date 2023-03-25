<script>
    import {each} from 'svelte/internal';

    export let data;
    const {app} = data;
</script>

<svelte:head>
    <title>{app.privacy.title}</title>
</svelte:head>

<div class="container max-w-full">
    <div class="sticky top-0 w-full backdrop-blur-3xl bg-neutral-200/30 dark:bg-neutral-900/30 border-b divider-sub-color py-4 px-4">
        <h2 class="text-xl text-neutral-900 dark:text-neutral-200">{app.privacy.title}</h2>
    </div>

    <div class="mb-16">
        <p class="text-base text-neutral-600 dark:text-neutral-400 p-4">{app.privacy.description}</p>
    </div>

    {#each app.privacy.policy as policy}

    <div class="mb-16">
        <h3 class="text-2xl font-semibold text-neutral-900 dark:text-neutral-200 px-4">{policy.title}</h3>
        {#if policy.description !== ""}
        <p class="text-base text-neutral-900 dark:text-neutral-400 p-4 mb-1">{policy.description}</p>
        {/if}
        
        {#if policy.detailPolicy.length !== 0}
        {#each policy.detailPolicy as detailPolicy}
        <h4 class="text-lg text-bold text-neutral-900 dark:text-neutral-200 px-4">{detailPolicy.title}</h4>
        <p class="text-base text-neutral-600 dark:text-neutral-400 px-4 mb-5">{detailPolicy.description}</p>
            
        {/each}
        {/if}

        {#if policy.detail.length !== 0}
            {#each policy.detail as detail}
                <p class="text-base text-neutral-600 dark:text-neutral-400 px-4 py-1">{detail.description}</p>
            {/each}
        {/if}
    </div>
        
    {/each}
</div>