<template>
  <div
    class="dropdown"
    @click="toggleRiskLevels"
    :style="[
      { '--options-height': optionsHeight + 'px' },
      { '--option-height': optionHeight + 'px' },
      { '--main-el-border-radius': borderRadius },
      { '--dropdown-width': width + 'px' },
      { '--dropdown-background-color': backgroundColor },
      { '--dropdown-border': border },
      { '--dropdown-hover-background-color': hoverBackgroundColor },
      { '--dropdown-default-text-color': textColor }
    ]"
  >
    <span class="text">
      {{ (config.prefix ? config.prefix : "") + " "
      }}{{ config.placeholder ? config.placeholder : "" }}
    </span>
    <i class="angle-down"></i>
    <div v-if="isBottomSectionToggled" class="options">
      <div
        v-for="option in configOptions"
        :key="option.value + new Date().getTime()"
        class="option"
        @click="setCurrentSelectedOption(option);"
      >
        {{ option.value }}
      </div>
    </div>
  </div>
</template>
<script>
// Taken from https://vuejsexamples.com/a-highly-customizable-and-easy-to-use-elegant-dropdown-component/

export default {
  name: "DropdownMenu",
  data() {
    return {
      isBottomSectionToggled: false,
      optionsHeight: 0,
      optionHeight: 40,
      width: 100,
      configOptions: [],
      backgroundColor: "#fff",
      hoverBackgroundColor: "#eee",
      border: "1px solid  #e4e9ee",
      borderRadius: 0,
      textColor: "#373c43"
    };
  },
  components: {},
  props: ["config"],
  computed: {},
  methods: {
    toggleRiskLevels() {
      this.isBottomSectionToggled = !this.isBottomSectionToggled;
    },
    setCurrentSelectedOption(option) {
      this.$emit("setSelectedOption", option);
    },
    setConfigData() {
      this.configOptions = this.config.options;
      this.width = this.config.width;
      this.placeholder = this.config.placeholder;
      if (this.config.backgroundColor) {
        this.backgroundColor = this.config.backgroundColor;
      }
      if (this.config.border) {
        this.border = this.config.border;
      }
      if (this.config.hoverBackgroundColor) {
        this.hoverBackgroundColor = this.config.hoverBackgroundColor;
      }
      if (this.config.textColor) {
        this.textColor = this.config.textColor;
      }
      if (this.config.borderRadius) {
        this.borderRadius = this.config.borderRadius;
      }
    },
    setOptionsHeight() {
      this.optionsHeight = this.optionHeight * this.configOptions.length;
    }
  },
  created() {
    this.setConfigData();
    this.setOptionsHeight();
  },
  beforeUdate() {
    // this.setOptionsHeight();
  },
  mounted() {}
};
</script>
