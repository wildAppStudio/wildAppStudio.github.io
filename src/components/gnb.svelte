<script>
    import {page} from '$app/stores';
</script>

<div id="topnav" class="sticky top-0 z-50 w-full bg-neutral-200/50, dark:bg-neutral-900/50 backdrop-blur-3xl py-5">
    <div class='container-basic flex justify-between items-center'>
        <a class="flex justify-start gap-x-2.5 items-center" href="/">
            <div class="w-10 h-10 bg-contain bg-[url('/logo-light.png')] dark:bg-[url('/logo-dark.png')]"></div>
            <h1 class="hidden sm:block text-20-bold">야생 앱공방</h1>
        </a>

        <div class="flex justify-end gap-x-10">
            {#if $page.url.toString().indexOf('introduce') === -1}
            <a href="/" class="text-16-selected">제작목록</a>
            {:else}
            <a href="/" class="text-16-unselected">제작목록</a>
            {/if}

            {#if $page.url.toString().indexOf('introduce') !== -1}
            <a href="/introduce" class="text-16-selected">소개</a>
            {:else}
            <a href="/introduce" class="text-16-unselected">소개</a>
            {/if}

            <button on:click={()=> document.documentElement.classList.toggle('dark')}>
                <div class="w-6 h-6 bg-auto bg-no-repeat bg-center bg-[url('/sun.svg')] dark:bg-[url('/moon.svg')]"></div>
            </button>
        </div>

    </div>
</div>