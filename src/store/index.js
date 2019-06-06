import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        items:[],
        history:[],
        newItemValue:'',
        genetareId:0
    },
    getters:{

    },
    mutations:{
        addItem(state){
            if(state.newItemValue === ''){
                return console.log('no');
            }
            state.items.push({
                 id: ++state.genetareId,
                 text: state.newItemValue.trim(),
                 editItemValue: state.newItemValue,
                 isShowed: false,
                 firstValue: state.newItemValue,
                 createdAt: new Date().toLocaleString(),
                 historyOfChanges:['No changes'],
                 historySetting:[{ isHistoryItemShowed: true}],
                 isDeleted: false,
                 trigger: false,
                 completed: false
             });
             state.newItemValue = '';
          },

          updateMessage (state, value) {
            state.newItemValue = value;
          },

          deleteItem(state, index){
            state.items[index].isDeleted = !state.items[index].isDeleted; 
            state.items.splice(index, 1);
          },

          editItem(state, index){
            if(state.items[index].editItemValue === ''){
                return
            };
            state.items[index].text=state.items[index].editItemValue.trim();

            if(!state.items[index].trigger){
            state.items[index].historyOfChanges.splice(0,1);
            state.items[index].trigger = true;
            };

            state.items[index].historyOfChanges
            .push(state.items[index].text);
            },

            showEditItem(state, index){
                state.items[index].isShowed = !state.items[index].isShowed;
            },

            completeItem(state, index){
                state.items[index].completed = !state.items[index].completed;
            },

            setEditVal(state, {index, value}){
                state.items[index].editItemValue = value;
            },

            addToHistory(state){
                if (state.items.length>0){
                state.history=state.history.concat(state.items.slice());
                
                /*remove duplicates*/
                let uniq = {};
                state.history = state.history.filter(obj => 
                !uniq[obj.id] && (uniq[obj.id] = true))
                 }

                else{
                  console.log('nothing to add');
                }
              },

              showHistoryItem(state, index){
                state.history[index].historySetting[0].isHistoryItemShowed 
                = ! state.history[index].historySetting[0].isHistoryItemShowed;
              }

    },
    actions:{
        deleteItem({commit}, index){
            commit('deleteItem', index)
        },

        editItem({commit}, index){
            commit('editItem', index)
        },

        showEditItem({commit}, index){
            commit('showEditItem', index)
        },

        completeItem({commit}, index){
            commit('completeItem', index)
        },
        
        setEditVal({commit}, {index, value}){
            commit('setEditVal', {index, value})
        },

        addToHistory({commit}){
            commit('addToHistory')
        },

        showHistoryItem({commit}, index){
            commit('showHistoryItem', index)
        }


    },
    strict: process.env.NODE_ENV !== 'production'
});