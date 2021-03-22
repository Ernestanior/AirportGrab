<template>
  <div class="tab_item" @click="tabClick">
    <div v-if="!isActive">
      <slot name="icon"></slot>
    </div>
    <div v-else>
      <slot name="icon_active"></slot>
    </div>
    <div :style="ActiveStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TabItem',
    props: {
      path: {
        type: String,
        default: '/home'
      },
      activeColor: {
        type: String,
        default: "#1653c4"
      }
    },
    data() {
      return {
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      ActiveStyle() {
        return this.isActive ? { color: this.activeColor } : {}
      }
    },
    methods: {
      tabClick() {
        if (this.path == "/order") {
          if (this.$store.state.user.email) {
            this.$router.replace(this.path);
          }
          else {
            this.$model({
              show: true,
              title: "Hint",
              content: "Please login first",
              confirmButton: true,
              cancelButton: true,
              confirmCallBack: () => {
                this.$router.replace("/mine").catch(err => {
                  if (
                    err.name !== 'NavigationDuplicated' &&
                    !err.message.includes('Avoided redundant navigation to current location')
                  ) {
                    logError(err);
                  }
                });;
              },
              cancelCallBack: () => {
                console.log("cancel");
              }
            });
          }
        }
        else {
          this.$router.replace(this.path).catch(err => {
            // Ignore the vuex err regarding  navigating to the page they are already on.
            if (
              err.name !== 'NavigationDuplicated' &&
              !err.message.includes('Avoided redundant navigation to current location')
            ) {
              // But print any other errors to the console
              logError(err);
            }
          });
        }
        // console.log(this.$router.options.routes);
        // console.log(this.$route);
      }
    },
  }
</script>

<style>
  .active {
    color: #1653c4;
  }

  .tab_item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: .8rem;
    font-weight: 500;
  }

  .tab_item img {
    margin-top: .3rem;
    width: 1.92rem;
    height: 1.92rem;
  }
</style>