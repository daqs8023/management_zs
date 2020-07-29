<template>
    <div class="tinymceEditor">
        <tinymce-text id="tinymce" @release="release"></tinymce-text>
    </div>
</template>
<script>
import TinymceText from '../../components/tinymce-editor.vue';
export default {
    name: "TinymceEditor",
    components: {
        TinymceText
    },
    data() {
        return {
        }
    },
    methods: {
        release(content){
            console.log(content);
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
