<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    let dispatch = createEventDispatcher();
</script>

<style>
    .modal__body {
        position: absolute;
        top: 10%;
        left: 50%;
        z-index: 1001;
        transform: translateX(-50%) translateY(-25%);
        cursor: auto;
    }

    .modal__bg {
        z-index: 1000;
        background: rgba(0, 0, 0, 0.2);
        cursor: auto;
    }
</style>

<div class="modal__body absolute bg-white p-7 rounded shadow">
    <slot>This is the fallback</slot>
</div>

<div
    class="modal__bg fixed top-0 right-0 bottom-0 left-0"
    on:click={() => dispatch('close')}
/>
