const breakpoint = {
  computed: {
    breakpoint() {
      return this.$vuetify.breakpoint.name;
    },
    isMobile() {
      return this.$vuetify.breakpoint.name === 'xs';
    },
    isTablet() {
      return this.$vuetify.breakpoint.name === 'sm';
    },
    islaptop() {
      return this.$vuetify.breakpoint.name === 'md';
    },
    isDesktop() {
      return (
        this.$vuetify.breakpoint.name === 'lg' ||
        this.$vuetify.breakpoint.name === 'xl'
      );
    },
    // eslint-disable-next-line consistent-return
    imageHeight() {
      // eslint-disable-next-line default-case
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '220px';
        case 'sm':
          return '400px';
        case 'md':
          return '500px';
        case 'lg':
          return '600px';
        case 'xl':
          return '800px';
      }
    }
  }
};
exports.breakpoint = breakpoint;
