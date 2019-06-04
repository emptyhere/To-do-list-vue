<template>
  <div id="app">
    <ItemList> </ItemList>
    <AddItem> </AddItem>
  </div>
</template>

<script>
import Vue from 'vue';

import AddItem from '../AddItem/AddItem';
import ItemList from '../ItemList/ItemList';

export default {
  components:{
    AddItem,
    ItemList
  }
}
</script>

