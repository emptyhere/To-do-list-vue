<template>
  <div id="app">
    <ItemList> </ItemList>
    <AddItem> </AddItem>
    <HistoryList> </HistoryList>
  </div>
</template>

<script>
import Vue from 'vue';

import AddItem from '../AddItem/AddItem';
import ItemList from '../ItemList/ItemList';
import HistoryList from '../HistoryList/HistoryList';

export default {
  components:{
    AddItem,
    ItemList,
    HistoryList
  }
}
</script>

