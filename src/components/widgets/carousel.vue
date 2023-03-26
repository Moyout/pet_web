<template>
  <div id="carousel">
    <ul id="carUl">
      <li class="carLi" v-for="(item,index) in imgs" :key="index">
        <img
          :src="item.src"
          :class="{carImg:item.show,carImgHide:!item.show}"
          @mouseover="stopTimer()"
          @mouseout="startTimer()"
          @click="onTap(item)"
        />

        <h3 id="title" v-if="item.show">{{item.title}}</h3>
      </li>
    </ul>
    <ul id="indUl">
      <li class="indLi" v-for="(item,index) in imgs" :key="index">
        <div
          :class="{indicator:currIndex==index?false:true,activeInd:currIndex==index?true:false}"
          @click="switchImgByIndex(index)"
        ></div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "carousel",
  props: ["hotPetType"],
  created() {
    // timer = setInterval(this.changeImg, 2000);
    this.startTimer();
    // console.log(this.hotPetType);
    // console.log(this.type);
  },
  mounted() {
    this.axios
      .get(
        this.hotPetType == "dog"
          ? "http://localhost:3000/HotDogs"
          : "http://localhost:3000/HotCats"
      )
      .then(res => {
        this.imgs = res.data;
      });
  },
  data() {
    return {
      timer: "",
      type: this.hotPetType,
      currIndex: 0,
      imgs: [{}, {}, {}, {}, {}]
    };
  },
  methods: {
    changeImg() {
      this.currIndex++;
      if (this.currIndex == this.imgs.length) {
        this.currIndex = 0;
      }
      this.setImgShow();
    },
    switchImgByIndex(index) {
      //   console.log(index);
      this.currIndex = index;
      this.setImgShow();
    },
    setImgShow() {
      //   console.log(this.imgs);

      this.imgs.forEach(item => {
        item.show = false;
        this.imgs[this.currIndex].show = true;
      });
    },
    startTimer() {
      this.timer = setInterval(this.changeImg, 2000);
    },
    stopTimer() {
      clearInterval(this.timer);
    },
    onTap(item) {
      // console.log(title);
      // alert("asdad");
      var em = this.$parent.changeDetail(item);
      // console.log(em);
    }
  }
};
</script>

<style scoped>
@import url("@/css/widgets/carousel.css");
</style>