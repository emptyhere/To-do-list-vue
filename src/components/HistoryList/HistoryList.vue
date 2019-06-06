<template>
        <div>
          <button @click="addToHistory">Save to history</button>
          <ul>
            <li v-for="(value, index) in history"
             :key='index'>
             <button @click="showHistoryItem(index)">show/hide</button>
             <div
             v-if="history[index].historySetting[0].isHistoryItemShowed">
                <div>{{`Current value: ${value.text}`}}</div> 
                <div>{{`Current id: ${value.id}`}}</div>
                <div>{{`First value: ${value.firstValue}`}}</div>
                <div>{{`Created at: ${value.createdAt}`}}</div>
                <div>{{`Is deleted: ${value.isDeleted}`}}</div>
                <div>{{`Is completed: ${value.completed}`}}</div>
                <div>{{`Changes: ${value.historyOfChanges}`}}</div>
             </div>
            </li>
          </ul>
        </div>
</template>

<script>
export default{
    methods:{
      addToHistory(){
          this.$store.dispatch('addToHistory')
      },
      showHistoryItem(index){
          this.$store.dispatch('showHistoryItem', index)
      }
    },
    computed:{
        history(){
           return this.$store.state.history
        }
    }

}
</script>