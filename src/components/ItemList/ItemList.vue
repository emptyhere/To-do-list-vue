    <template>  
        <ul>
            <li v-for='(value, index) in items'
            :key='index'
            :class="{'completedIsTrue':items[index].completed,
            'completedIsFalse':!items[index].completed}">
            <input type="checkbox"
            @click='completeItem(index);'>
                <button
                title="Ctrl + click to show/hide, click to apply changes." 
                @click.exact='editItem(index)'
                @click.ctrl.exact='showEditItem(index)'>
                edit
            </button>
                <input type="text"
                :value='lookupEdit(index)'
                @input="updateEdit(index, $event.target.value)"
                v-if="items[index].isShowed"
                placeholder="Enter text">
                    {{ value.text }}
            <button @click='deleteItem(index)'>delete</button>
            </li>
        </ul>
    </template>

    <script>
    export default {
        methods:{
            deleteItem(index){
                 this.$store.dispatch('deleteItem', index)
            },

            editItem(index){
                this.$store.dispatch('editItem', index)
            },

            showEditItem(index){
                this.$store.dispatch('showEditItem', index)
            },

            completeItem(index){
                this.$store.dispatch('completeItem', index)
            },

            lookupEdit(index) {
                return this.$store.state.items[index].editItemValue;
            },

            updateEdit(index, value) {
                this.$store.dispatch("setEditVal", { index, value }); 
            }
        },
        computed:{
            items(){
                return this.$store.state.items
            }
             
        }
    }
    </script>
    