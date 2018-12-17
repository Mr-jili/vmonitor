<template>
<Content :style="{margin: '20px',background:'#fff', minHeight: '260px'}">
  <transition name="fade" mode="out-in">
    <router-view/>
  </transition>
</Content>
</template>
