<template>
  <div class="testDrag">
    <h1 style="text-align: center;">拖动到指定div</h1>
    <template>
      <div class="drag-content">
        <draggable class="project-content">
          <div
            class="select-item"   
             draggable="true"         
            @dragstart="drag($event)"
            v-for="pjdt in projectdatas"
            :key="pjdt.id"
          >{{pjdt.name}}</div>
        </draggable>
        <div class="people-content">
          <div
            class="drag-div"
            v-for="(ppindex,ppdt) in peopledata"
            :key="ppdt.id"
            @drop="drop($event)"            
            @dragover="allowDrop($event)"
          >
            <div class="select-project-item">
              <label class="drag-people-label">{{ppindex.name}}：</label>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import draggable from "vuedraggable";
let dom = "";
export default {
  name: "testDrag",
  components: {
    draggable
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      tags: [
        {
          id: 1,
          name: "第一个"
        },
        {
          id: 2,
          name: "第二个"
        }
      ],
      projectdatas: [
        {
          id: 1,
          name: "葡萄"
        },
        {
          id: 2,
          name: "芒果"
        },
        {
          id: 3,
          name: "木瓜"
        },
        {
          id: 4,
          name: "榴莲"
        }
      ],
      peopledata: [
        {
          id: 1,
          name: "first"
        },
        {
          id: 2,
          name: "second"
        },
        {
          id: 3,
          name: "third "
        },
        {
          id: 3,
          name: "four"
        }
      ]
    };
  },
  methods: {
    drag(event) {
      dom = event.currentTarget;
      console.log(dom);
    },
    drop(event) {
      event.preventDefault();
      console.log("我是target");
      console.log(event.srcElement.className);
      if (event.srcElement.className == "drag-div") {
        event.srcElement.className = 'selected'
        event.target.appendChild(dom);
        console.log(dom);
      } else if (event.srcElement.className == "selected"){
        alert("该位置已被占用");
      }else{
        return false
      }
    },
    allowDrop(event) {
      event.preventDefault();
      //preventDefault() 方法阻止元素发生默认的行为（例如，当点击提交按钮时阻止对表单的提交）
    }
  }
};
</script>
<style lang="scss" scoped>
.select-item {
  background-color: #5bc0de;
  display: inline-block;
  text-align: center;
  border-radius: 3px;
  margin-right: 10px;
  cursor: pointer;
  padding: 6px 20px;
  color: #fff;
}

.cursored {
  cursor: default;
}

.project-content,
.people-content {
  margin: 30px 50px;
}

.people-content {
  margin-top: 30px;
}

.drag-div {
  border: 1px solid #5bc0de;
  background: #fff;
  padding: 10px;
  margin-bottom: 10px;
  width: 800px;
  cursor: pointer;
}

.select-project-item {
  display: inline-block;
  text-align: center;
  border-radius: 3px;
}

.drag-people-label {
  margin-bottom: 0;
  padding-right: 10px;
}
.selected{
  border: 1px solid #5bc0de;
  background: #f60;
  padding: 10px;
  margin-bottom: 10px;
  width: 800px;
  cursor: pointer;
}
</style>