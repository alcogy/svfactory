<script lang="ts">
	import type { FileSystem } from '$lib';
    import FileTree from '$lib/components/fileTree.svelte';
    import { Folder } from 'lucide-svelte';
    import { FolderOpen } from 'lucide-svelte';
    import { File } from 'lucide-svelte';

    let { data }: { data: FileSystem } = $props();
    let expand: boolean = $state(true);
    const icon = {
        size: 20,
        color: "#111",
    }
</script>

<ul>
    <li>
        <button class={`name ${data.isDir && 'expandable'}`} onclick={() => expand = !expand}>
            {#if data.isDir && expand}
                <FolderOpen size={icon.size} color={icon.color} />
            {:else if data.isDir && !expand}
                <Folder size={icon.size} color={icon.color} />
            {:else}
                <File size={icon.size} color={icon.color} />
            {/if}
            <p>{data.name}</p>
        </button>
        {#if expand}
            {#each data.children as child}
                <FileTree data={child} />
            {/each}
        {/if}
    </li>
</ul>

<style lang="scss">
    ul {
        margin: 8px 0 0 16px;
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .name {
        display: flex;
        gap: 4px;
        align-items: center;
        background-color: transparent;
        border: 0;
        &.expandable {
            cursor: pointer;
        }
        font-size: 1.0rem;
        & > p {
            margin: 0;
        }
    }
</style>