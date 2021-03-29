<script lang="ts">
    export let label: string;
    export let active: boolean;
    export let onClick: () => void;
    export let classes: string | undefined = undefined;
    export let type: string = 'button';
</script>

<button
    {type}
    on:click={onClick}
    class={active
        ? `w-1/2 bg-blue-400 text-white py-2 transition-colors ease-in-out duration-200 hover:bg-blue-600 ${classes}`
        : `w-1/2 bg-gray-200 py-2 transition-colors ease-in-out duration-200 hover:bg-gray-300 ${classes}`}
>
    {label}
</button>
