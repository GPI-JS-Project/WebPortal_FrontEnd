<template>
    <SearchingPages />
</template>
  
<script>
import { defineAsyncComponent } from 'vue';
const SearchingPages = defineAsyncComponent(() =>
    import('@/components/C_SearchingPage.vue')
);
export default {
    name: "SearchingPage",
    components: {
        SearchingPages
    }

}
</script>
  