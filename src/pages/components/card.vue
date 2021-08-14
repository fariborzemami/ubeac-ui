<route lang="yaml">
name: Card
meta:
  layout: full
</route>

<template>
  <DemoHeader
    title="Card"
  />
   <u-tabs>
    <u-tab
      :active="true"
      title="API"
    >
      <p 
        class="mt-3 text-start document-section"
      >
        <markdown />
      </p>
    </u-tab>
    <u-tab
      title="Playground"
    >
      <u-live 
        :code="code"
      />
    </u-tab>
    <u-tab
      title="Examples"
    >
      <div class="row">
        <div class="col">
          <h4>Default</h4>
            <u-card
               header="foo"
               text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            >
           </u-card>
        </div>
        <div 
          class="col"
        >
          <h4>Closable</h4>
            <u-card
               header="bar"
               closable
               text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            >
           </u-card>
            <div class="my-3" />
        </div>
        <div class="col">
          <h4>Slot</h4>
            <u-card
              header="baz"
            >
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </div>
              <template #footer>
                <div 
                  class="card-footer"
                >
                <small 
                  class="text-muted">
                    Last update: 2 mins ago
                </small>
                </div>
               </template>
            </u-card>
            <div class="my-3"></div>
        </div>
      </div>
    </u-tab>
  </u-tabs>
</template>

<script setup>
import { reactive } from 'vue'
// import { VueComponent } from '../../../docs/components/primitive/card.md'
// const markdown = VueComponent
const code = reactive(
`<u-card
    header="foo"
    closable
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
 >
 <template #footer>
 <div 
    class="card-footer">
    <small 
      class="text-muted">
        Last update: 2 mins ago
    </small>
  </div>
 </template>
</u-card>
<hr>
<h6>
  Center alignment Header, center body
</h6>
<u-card
    header="bar"
    header-alignment="center"
    body-alignment="center"
    title="Lorem"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
 >
</u-card>
`
)

</script>
