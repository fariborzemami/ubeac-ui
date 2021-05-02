<template>
  <Btn variant="primary" type="submit" v-bind="$attrs">
    <slot>Submit</slot>
  </Btn>
</template>
<script>
import Btn from "./Btn";
export default {
  components: { Btn }
};
</script>