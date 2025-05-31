<script lang="ts">
	import type { RouteState } from '$lib';
    import RouteTree from '$lib/components/routeTree.svelte';
	import Textfield from '$lib/components/ui/textfield.svelte';
    import { File } from 'lucide-svelte';

    let errorMessge: string = $state('');
    
    let routesState = $state<RouteState>({
        path: '',
        routes: null,
        selected: null,
    });

    async function readDirectory() {
        try {
            const res = await fetch('/', {
                method: 'post',
                body: JSON.stringify({ path: routesState.path }),
            });
            if (res.status !== 200) throw 'server error';
            routesState.routes = await res.json();
        } catch(e) {
            console.error(e);
            routesState.routes = null;
            routesState.selected = null;
            errorMessge = 'Directory could not read.';
        } 
    }
</script>

<div class="forms">
    <Textfield value={routesState} placeholder="Enter the root directory path." />
    <button onclick={readDirectory}>Read</button>
</div>

<div class="wrap">
    <div class="tree">
        {#if routesState.routes !== null}
            <RouteTree data={routesState.routes} rs={routesState} />
        {:else if errorMessge !== ''}
            <p>{errorMessge}</p>
        {/if}
    </div>
    <div class="panel">
        {#if routesState.selected !== null}
        <h3>{routesState.selected.name}</h3>
        {#each routesState.selected.files as page}
            <p><File size={20} color="#fff" />{page}</p>
        {/each}
        {/if}
    </div>
</div>

<style lang="scss">
    .forms {
        margin: 16px;
        & button {
            background-color: #387;
            border: 0;
            border-radius: 4px;
            padding: 8px 16px;
            cursor: pointer;
        }
    }
    .wrap {
        display: flex;
        gap: 32px;
        & > div {
            flex: 1;
        }
    }
    .panel {
        background-color: #444;
        width: 360px;
        padding: 16px;
    }
</style>