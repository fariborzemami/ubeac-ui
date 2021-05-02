<script>
import { h } from "vue";

export default {
  props: {
    columns: {
      type: [Number, String],
      default: 1
    },
    elements: {
      type: Array
    }
  },
  render() {
    let colClass = "col-sm-" + 12 / this.columns;
    let cols = [];
    this.elements.forEach(element => {
      let col = h(
        "div",
        {
          class: [colClass, 'mb-3']
        },
        [element]
      );
      cols.push(col);
    });
    return h(
      "div",
      {
        class: [{ row: true }, { "align-items-start": true }]
      },
      [cols]
    );
  }
};
</script>