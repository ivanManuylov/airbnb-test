<template>
  <div class="card__wrapper">
    <div class="card__inner" v-on="{ mouseenter: handleMouseEnter, mouseleave: handleMouseLeave }">
      <heart-icon/>
      <div class="card__image-box">
        <image-component :hover="hover" :pictures="picture" :collection="carousel_collection_multimedia"/>
      </div>
      <div class="card__title-box">
        <div class="card__tags" :style="{color: kicker_text_color}">
          <div class="card__tag" :title="kicker_text">
            {{kicker_text}}
          </div>
        </div>
        <div class="card__title" :title="title">{{title}}</div>
        <div class="card__details">
          {{price_string}}
          <span class="card__detail" :title="summaries" :key="detail" v-for="detail of summaries">
            <span class="card__dot">
              &#183;
            </span>
            {{detail}}
          </span>
        </div>
        <div class="card__language">
          <span v-show="display_rating" class="card__likes">
            <span class="card__rating" :style="{color: '#008489'}">
              {{display_rating}}
              <span class="card__star">
                <svg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='#008489'>
                  <path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/>
                </svg>
              </span>
            </span>
            <span class="card__comment-count">
              ({{review_count}})
            </span>
            <span class="card__dot">
              &#183;
            </span>
          </span>
          {{offered_languages_text}}
        </div>
      </div>
    </div>
  </div>
</template>

<script src="@/scripts/card.js"></script>
<style lang="scss" src="@/styles/components/card.scss"></style>
