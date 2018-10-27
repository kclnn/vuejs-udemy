<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="server === null">Select a server.</p>
        <p v-else>Server {{ server.id }} status: {{ server.status }}
            <button @click="server.status = 'Normal'">Reset server</button>
        </p>
    </div>

</template>

<script>
    import { eventBus } from '../../main';
    export default {
        data () {
            return {
                server: null
            };
        },
        created () {
            eventBus.$on('selectedServerChanged', 
                (server) => { this.server = server; });
        }
    }
</script>

<style>

</style>
