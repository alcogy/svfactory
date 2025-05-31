<script lang="ts">
    let { value = { path: '' }, placeholder = '' } : { value: { path: string }, placeholder?: string } = $props();

</script>
<input type="text" bind:value={value.path}>

<style lang="scss">
input {
    background-color: #333;
    border: 1px solid #555;
    padding: 8px;
    border-radius: 4px;
    width: 320px;
}
</style>