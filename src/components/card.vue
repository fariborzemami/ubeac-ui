<template>
  <div
    v-if="visible"
    class="card"
  >
    <div
      v-if="header"
      class="card-header"
      :class="`text-${headerAlignment}`"
    >
      {{ header }}
      <button
        v-if="closable"
        @click="visible = false"
        type="button"
        class="btn-close float-end"
        aria-label="Close"
      />
    </div>
    <div 
      v-if="text || title"
      class="card-body"
      :class="`text-${bodyAlignment}`"
      >
        <h5 
          v-if="title"
          class="card-title"
        >
            {{ title }}
        </h5>
        <p 
          class="card-text"
        >
          {{ text }}
        </p>
    </div>
    <div 
      v-else
      class="card-body"
      :class="`text-${bodyAlignment}`"
      >
       <slot />
    </div>
      <slot 
        v-if="!!$slots.footer"
        name="footer">
        
      </slot>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    footer: {
      type: String,
      default: null
    },
    bodyAlignment: {
      type: String,
      default: 'start'
    },
    headerAlignment: {
      type: String,
      default: 'start'
    },
    closable: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: true
    }
  }
}
</script>

