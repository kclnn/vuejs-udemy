<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server v-for="server in servers" 
                    :index="server.id" 
                    :key="server.id"
                    @click="serverClicked">

            </server>
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue';
    import { eventBus } from '../../main';
    export default {
        data () {
            return {
                servers: [
                    { id: 1, status: 'Normal' },
                    { id: 2, status: 'Critical' },
                    { id: 3, status: 'Unknown' },
                    { id: 4, status: 'Critical' },
                    { id: 5, status: 'Normal '}
                ],
                selectedServerId: -1
            }
        },
        components: {
            Server
        },
        methods: {
            serverClicked (serverId) {
                this.selectedServerId = serverId;
            }
        },
        computed: {
            selectedServer() {
                return (this.servers.find(s => s.id == this.selectedServerId));
            }
        },
        watch: {
            selectedServerId() {
                // Maybe it would be better to store all server info
                // in a parent, but this is not the solution we should
                // use in this exercise (to my understanding at least)
                eventBus.$emit('selectedServerChanged', this.selectedServer);
                console.log(this.selectedServer);
            }
        }
    }
</script>

<style>

</style>
