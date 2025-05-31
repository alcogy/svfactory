<script lang="ts">
	import type { FileSystem } from '$lib';
    import FileTree from '$lib/components/fileTree.svelte';

    let files: FileSystem | null = $state(null);
    let path: string = $state('/home/user/Works/fa');

    async function readDirectory() {
        const res = await fetch('/', {
            method: 'post',
            body: JSON.stringify({ path: path }),
        });
        files = await res.json();
    }
</script>

<input type="text" bind:value={path}>
<button onclick={readDirectory}>Read</button>

{#if files}
    <FileTree data={files} />
{/if}
