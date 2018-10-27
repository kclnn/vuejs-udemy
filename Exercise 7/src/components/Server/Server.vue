<template>
    <li class="list-group-item" role="button" @click="$emit('click', index)">
        Server #{{ index }}
    </li>
</template>

<script>
export default {
    data () {
        return {
        };
    },
    props: ['index']
}
</script>

<style>

</style>