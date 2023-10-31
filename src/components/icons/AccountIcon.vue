<template>
    <svg-icon type="mdi" :path="path"></svg-icon>
</template>
  
<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccountCowboyHatOutline } from '@mdi/js';

export default {
    name: "my-component",
    components: {
        SvgIcon
    },
    data() {
        return {
            path: mdiAccountCowboyHatOutline,
        }
    }
}
</script>