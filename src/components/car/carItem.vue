<template>
  <div class="car-item">
    <div class="car-goods-info" v-for="good in pureCar" :key="good.goodid">
      <span class="good-check"><input type="radio" checked></span>
      <img class="good-img" :src="good.img" alt="">
      <div class="good-box">
        <div class="good-info">
          <span class="good-title">{{good.title}}</span>
          <span class="good-price">￥{{good.price}}</span>
        </div>
        <label class="good-num-box">
           <button class="add" @click="addGood({goodid:good.goodid,title:good.title,price:good.price,img:good.img})">+</button><span class="goods-num">{{good.num}}</span><button class="reduce" @click="reduceGood({goodid:good.goodid})">-</button> 
        </label>
      </div>
    </div>
    <div class="all">
      <div class="all-info">
        <span class="all-num">总计:￥{{all_price_num.price}}</span>=<span class="all-price">商品金额:￥{{all_price_num.price}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations } from 'vuex'
export default {
  name: 'carItem',
  data () {
    return {
     
    }
  },
  computed:{
    //...mapState(['car'])
    ...mapGetters(['pureCar','all_price_num'])
  },
  methods:{
    ...mapMutations(['addGood','reduceGood'])
  },
  // mounted(){
  //   console.log(this.$store.getters.pureCar)
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.good-img{
  flex:1;
}
.car-goods-info{
  width:100%;
  height:1.23rem;
  display:flex;
  justify-content:space-around;
}
.good-check{
  display:inline-block;
  width:0.5rem;
  height:1.23rem;
  text-align:center;
  line-height:1.23rem;
}
.good-img{
  width:0.76rem;
  height:1.03rem;
  margin-right:0.16rem;
  padding-top:0.13rem;
}
.good-box{
  width:2.18rem;
  height:1.03rem;
  margin-right:0.15rem;
  padding-top:0.13rem;
   display:flex;
  justify-content:space-between;
}
.good-info{
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
}
.good-title{
  width:1.1rem;
  font-size:0.12rem;
  color:#666;
}
.good-price{
  color:#d0253b;
  font-size:0.14rem;
}
.good-num-box{
  line-height:1.03rem;
}
.add,.reduce{
  width:0.25rem;
  height:0.25rem;
  background:#fff;
  border:1px solid #ccc;
}
.goods-num{
  display:inline-block;
  width:0.3rem;
  text-align:center;
}
.all{
  padding:15px 0px;
  width:100%;
  height:0.42rem;
  display: flex;
  justify-content: space-around;
  background:rgba(0,0,0,.1);
}
.all-info{
  width:100%;
  height:0.4rem;
  background:#fff;
  line-height:0.4rem;
 padding-left:0.2rem;
}
</style>
