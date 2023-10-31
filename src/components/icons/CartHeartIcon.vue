<template>
    <svg-icon type="mdi" :path="path" style="color:#eee;width:100px;--sx: 5; --sy: 5;"></svg-icon>
</template>
  
<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCartHeart } from '@mdi/js';

export default {
    name: "my-component",
    components: {
        SvgIcon
    },
    data() {
        return {
            path: mdiCartHeart,
        }
    }
}
</script>
  