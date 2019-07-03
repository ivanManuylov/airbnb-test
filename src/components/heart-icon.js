export default {
    data() {
      return {
          active: false,
      }
    },
    name: 'HeartIcon',
    methods: {
        toggleClick() {
            this.active = !this.active;
        }
    },
    computed: {
        classObject() {
            return {
                'heart-icon_active': this.active,
                'heart-icon': true,
            }
        }
    }
};
