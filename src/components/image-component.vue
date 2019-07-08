<template>
  <div class="image__wrapper" :class="{image__wrapper_hover: hover}">
    <div class="image__shadow" :class="{image__shadow_hover: hover}"/>
    <div class="image" :class="{image_hover: hover}" :style="{backgroundImage: `url('${pictures.picture}')` }" />
      <transition
        v-if="hover"
        appear
        @after-enter="enter"
        @after-leave="leave"
        name="fade"
        mode="in-out"
        class="image_collections"
        tag="ul"
        :class="{image_collections_hover: hover}"
      >
        <ul class="image__collections" :class="{image__collections_hover: hover && active}">
          <li class="image__collection" :class="{image__collection_hover: list[index].isActive}" :key="item.picture.id" v-for="(item, index) of collection" :style="{backgroundImage: `url('${item.picture.poster}')` }" />
        </ul>
      </transition>
  </div>
</template>
<script src="@/scripts/image.js"></script>
<style lang="scss" src="@/styles/components/image.scss"></style>
