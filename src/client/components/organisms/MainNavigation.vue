<template>
    <div class="main-navigation">
        <AppButton @click="registraion">登録</AppButton>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import AppButton from "@client/components/atoms/AppButton.vue";

export default Vue.extend({
    components: { AppButton },
    methods: {
        registraion() {
            this.$store.dispatch("dialog/openRegistrationForm");
        },
    },
});
</script>
<style lang="scss" scoped>
.main-navigation {
    width: 100%;
    height: 50px;
    @include display-flex($justify: flex-start);
    padding: 5px 0px 5px 10px;
}
</style>
