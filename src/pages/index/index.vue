<!--
 * @Author: 农村高富帅
 * @Date: 2023-10-31 17:32:46
 * @LastEditors: 农村高富帅
 * @LastEditTime: 2023-11-01 21:20:31
 * @FilePath: /guess/src/pages/index/index.vue
 * @Description: 首页
 * @mail: gaozemin0509@gmail.com
-->
<template>
  <view class="index page">
    <view class="play-view option">
      <text>开始游戏</text>
      <image :src="playImg" svg="true"></image>
    </view>
    <view class="bottom-view">
      <view class="create-view option">
        <text> 创建房间</text>
        <image :src="addImg" svg="true"></image>
      </view>
      <view class="add-view option">
        <text>加入房间</text>
        <image :src="createimg" svg="true"></image>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";
import "./index.scss";
import { View } from "@tarojs/components";
// import addImg from "../../assets/images/add.svg";
import createimg from "../../assets/images/create.svg";
import addImg from "../../assets/images/add.svg";
import playImg from "../../assets/images/play.svg";
</script>


