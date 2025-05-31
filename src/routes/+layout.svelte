<script lang="ts">
    import '../app.css';
    let { children } = $props();
</script>

<div class="wrap">
    <header>
        <h1>SV Factory</h1>
    </header>
    <main>
        {@render children()}
    </main>
</div>
<style lang="scss">
    .wrap {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    header {
        width: 100%;
        height: 48px;
        background-color: #054;
        display: flex;
        align-items: center;
        padding: 0 24px;
        & h1 {
            font-size: 1.3rem;
            margin: 0;
        }
    }
    main {
        flex: 1;
    }
</style>