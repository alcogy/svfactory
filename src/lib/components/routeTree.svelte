<script lang="ts">
	import type { Routes, RouteState } from '$lib';
    import RouteTree from '$lib/components/routeTree.svelte';
    import { FolderOpen } from 'lucide-svelte';

    let { data, rs }: { data: Routes, rs: RouteState } = $props();
</script>


<div class="wrap">
    <button class={`name ${data.id === rs.selected?.id && 'on'}`} onclick={() => rs.selected = data}>
        <FolderOpen size={20} color="#eee" />
        <p>{data.name}</p>
    </button>
    
    {#each data.children as child}
        {#if child.isDir}
            <RouteTree data={child} rs={rs} />
        {/if}
    {/each}
</div>


<style lang="scss">
    .wrap {
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        padding-left: 16px;
    }
    .name {
        display: flex;
        gap: 4px;
        align-items: center;
        background-color: transparent;
        border: 0;
        cursor: pointer;
        padding: 5px;
        &.on {
            background-color: #555;
        }
        font-size: 1.0rem;
        & > p {
            margin: 0;
        }
    }
</style>