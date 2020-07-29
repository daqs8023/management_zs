<template>
  <div class="drag">
    <div class="col">
      <h3>第一部分</h3>
      <draggable :list="list1" class="list-group" draggable=".item" group="a" :move="getdata">
        <div
          class="list-group-item item"
          v-for="element in list1"
          :key="element.name"
        >{{ element.name }}</div>
      </draggable>
    </div>

    <div class="col">
      <h3>第二部分</h3>
      <draggable :list="list2" class="list-group" draggable=".item" group="a">
        <div
          class="list-group-item item"
          v-for="element in list2"
          :key="element.name"
        >{{ element.name }}</div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
let id = 1;
export default {
  name: "Drag",
  order: 14,
  components: {
    draggable
  },
  data() {
    return {
      list1: [
        { name: "John 1", id: 0 },
        { name: "Joao 2", id: 1 },
        { name: "Jean 3", id: 2 }
      ],
      list2: [
        { name: "Jonny 4", id: 3 },
        { name: "Guisepe 5", id: 4 }
      ]
    };
  },
  // updated() {
  //   for (let i in this.list1) {
  //     console.log("list1:" + this.list1[i].name);
  //   }
  //   for (let i in this.list2) {
  //     console.log("list2:" + this.list2[i].name);
  //   }    
  // },
  methods: {
    getdata(evt){
      console.log(evt.draggedContext.element.id)
    }
  }
};
</script>
<style lang="scss" scoped>
.drag {
  width: 100%;
  margin: 20px auto;
  display: flex;
  .col {
    width: 46%;
    margin: 10px 2%;
    background: #eee;
    h3 {
      width: 100%;
      height: 30px;
      line-height: 30px;
      background: #666;
      text-align: center;
      color: #fff;
    }
    .list-group-item {
      width: 100%;
      height: 50px;
      line-height: 50px;
      background: rgb(129, 158, 255);
      margin: 10px auto;
      cursor: pointer;
    }
  }
}
</style>

