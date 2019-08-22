<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="handleMouseleave">
      <dt class="lab">全部分类</dt>
      <dd class="item"
          v-for="(item,index) in menu"
          :key="index"
          @mouseenter="handleMouseenter"
      >
        <i :class="item.type"/>{{item.name}}
        <span class="arrow"/>
      </dd>
    </dl>
    <div class="detail" v-if="kind"
    @mouseenter="handleDetailEnter"
    @mouseleave="handleDetailLeave">
      <template
        v-for="(item,index) in curdetail.child"
      >
        <h4 :key="index">{{item.title}}</h4>
        <span
          v-for="(v,inx) in item.child "
          :key="inx"
        >
          {{v}}
        </span>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        kind: '',
        menu: [{
          type: 'food',
          name: '美食',
          child: [{
            title: '美食',
            child: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐']
          }]
        }, {
          type: 'takeout',
          name: '外卖',
          child: [{
            title: '外卖',
            child: ['美团外卖']
          }]
        }, {
          type: 'hotel',
          name: '酒店',
          child: [{
            title: '酒店星级',
            child: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
          }]
        }]
      }
    },
    computed: {
      curdetail: function () {
        return this.menu.filter(e => e.type === this.kind)[0];
      }
    },
    methods: {
      handleMouseleave: function () {
        let me = this
        me._timer = setTimeout(() => {
          me.kind = ''
        }, 200)
      },
      handleMouseenter: function (e) {
        let me = this
        me.kind = e.target.querySelector('i').className;
      },
      handleDetailEnter:function () {
        clearTimeout(this._timer)
      },
      handleDetailLeave:function () {
        this.kind=''
      }
    }

  }
</script>

<style scoped>
  .item {
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    font-size: 16px;

  }

  .item:hover {
    background-color: #d4dedf;
  }
</style>
