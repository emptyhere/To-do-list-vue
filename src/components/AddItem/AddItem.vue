<template>
        <div>
            <input type="text"
             v-model="newItemValue">
            <button @click='addItem'>Add</button>
        </div>
</template>

<script>
export default{

 methods:{
   addItem(){
     this.$store.commit('addItem');
   }
 },

 computed:{
  newItemValue: {
      get () {
        return this.$store.state.newItemValue
      },
      set (value) {
        this.$store.commit('updateMessage', value)
      }
    }
 }

}
</script>

