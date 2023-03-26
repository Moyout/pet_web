<template>
  <div id="Home">
    <div id="head">
      <!-- 热狗 -->
      <div class="hotPet">
        <h2>
          <img class="hot" :src="require('@/assets/images/热门.png')" />热门狗狗
        </h2>
        <carousel hotPetType="dog" @click="changeDetail"></carousel>
      </div>

      <!-- 热猫 -->
      <div class="hotPet">
        <h2>
          <img class="hot" :src="require('@/assets/images/热门.png')" />热门猫猫
        </h2>
        <carousel hotPetType="cat" @click="changeDetail"></carousel>
      </div>
    </div>
    <br />
    <div id="petPhoto">
      <img :src="item" class="photo" v-for="(item,index) in hotPetPhotos" :key="index" />
    </div>
    <h3 class="petTitle">{{currHotPet}}</h3>

    <h4 class="desc">{{currHotPetDescription}}</h4>
  </div>
</template>
<script>
import carousel from "@/components/widgets/carousel.vue";
export default {
  name: "Home",
  components: {
    carousel
  },
  data() {
    return {
      currHotPet: "柯基",
      currHotPetDescription:
        "威尔士柯基犬（welsh corgi pembroke）是一种小型犬,它们的胆子很大,也相当机警,能高度警惕地守护家园,是最受欢迎的小型护卫犬之一。精力旺盛,容易训练,很快适应家居生活,会成为孩子们的好朋友。但易患进行性视网膜脱落,血液失调,臀部发育不良和脊椎疾病。",
      hotPetPhotos: [
        "/images/hotDogs/keji/柯基1.webp",
        "/images/hotDogs/keji/柯基2.webp",
        "/images/hotDogs/keji/柯基3.jpeg",
        "/images/hotDogs/keji/柯基4.webp"
      ]
    };
  },
  methods: {
    changeDetail(item) {
      this.currHotPet = item.title;
      this.currHotPetDescription = item.description;
      this.hotPetPhotos = item.hotPetPhotos;
      console.log(this.currHotPet);
    }
  }
};
</script>
<style scoped>
@import "@/css/views/home.css";
</style>

 