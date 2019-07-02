<template>
  <div class="card__wrapper">
    <div class="card__inner" v-on="{ mouseenter: handleMouseEnter, mouseleave: handleMouseLeave }">
      <HeartIcon v-bind:active="false" />
      <div class="card__image-box">
        {{hover}}
        <ImageComponent v-bind:hover="hover" v-bind:pictures="item.picture" />
      </div>
      <div class="card__title-box">
        <div class="card__tags" v-bind:style="{color: item.kicker_text_color}">
          <div class="card__tag">
            {{item.kicker_text}}
          </div>
        </div>
        <div class="card__title">{{item.title}}</div>
        <div class="card__details">
          {{item.price_string}}
          <span class="card__detail" v-bind:key="detail" v-for="detail of item.summaries">
            <span class="card__dot">
              &#183;
            </span>
            {{detail}}
          </span>
        </div>
        <div class="card__language">
          {{item.offered_languages_text}}
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./card.js"></script>
<style lang="scss" src="@/styles/components/card.scss"></style>
