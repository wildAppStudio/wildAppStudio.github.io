<script>
    export let id;
    export let image;
    export let title;
    export let description;
</script>

<div class="background-card px-4 drop-shadow-md">
    <div class="flex justify-start py-4 gap-x-5 items-center border-b divider-sub-color">
        <img class="w-20 h-20 rounded-xl" src="{image}" alt="{title}">
        <div>
            <h3 class="text-20-bold">{title}</h3>
            <p class="text-16-sub">{description}</p>
        </div>
    </div>
    <div class="flex justify-end items-center py-4">
        <a class="text-16-link" href="/{id}">더보기</a>
    </div>
</div>