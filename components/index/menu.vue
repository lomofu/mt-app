<template>
  <div class="m-menu">
    <transition name="transfer">
      <dl class="nav" @mouseleave="handleMouseleave">
        <dt class="lab">全部分类</dt>
        <dd class="item"
            v-for="(item,index) in menu"
            :key="index"
            @mouseenter="handleMouseenter"
        >
          <i :class="item.type"/>{{item.title}}
          <span class="arrow"/>
        </dd>
      </dl>
      <div class="detail">
        <template v-for="(item,index) in curdetail.child">
          <h4 :key="index">{{item.title}}</h4>
          <span v-for="(i,inx) in item.child" :key="inx">
            {{i}}
          </span>
        </template>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "menu",
    data() {
      return {
        kind: '',
        menu: [{
          type: 'food',
          title: '美食',
          child: [{
            title: '小吃',
            child: ['汉堡', '冰淇淋', '自助餐']
          }]
        },
          {
            type: 'food',
            title: '美食',
            child: [{
              title: '小吃',
              child: ['汉堡', '冰淇淋', '自助餐']
            }]
          },
          {
            type: 'food',
            title: '美食'
          },
          {
            type: 'food',
            title: '美食'
          },
          {
            type: 'food',
            title: '美食'
          },
          {
            type: 'food',
            title: '美食'
          }]
      }
    },
    computed: {
      curdetail: () => {
        // console.log(this.menu)
        return this.menu.filter(item => item.type ===this.kind)[0]
      }
    },
    methods: {
      handleMouseleave: () => {
        let me = this
        me._timer = setTimeout(() => {
          me.kind = ''
        }, 150)
      },
      handleMouseenter: (e) => {
        let me = this
        console.log(e.target);
        me.kind = e.target.querySelector('i').className;
      }
    }

  }
</script>

<style scoped>
  .lab {
    margin-bottom: 10px;
  }

  .nav {
    background-color: #d8c5af;
    color: white;
    font-size: 20px;
    font-weight: bold;
    width: 90%;
    margin-left: 10%;
    text-shadow: 0 0 20px #00000021;
    box-shadow: 0 0 20px 0px #0000001c;
    background: linear-gradient(left, #a7937f, #e1d0bb);
    background: -webkit-gradient(linear, left bottom, right top, from(#b09d89), to(#f6e5d0));
    margin-top: -45px;
  }

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
