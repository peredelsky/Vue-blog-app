<template>
    <div class="sidebar">
        <button class="tag" 
        :class="{active: activeTag === tag.tagName}" 
        v-for="tag in tags" 
        :key="tag.id" 
        @click="setActiveTag">{{tag.tagName}}</button>
        
    </div>
</template>
<script>
export default {
    props: {
        tags: Array,
        activeTag: String
    },
    data() {
        return {
            newActiveTag: ''
        }
    },
    methods: {
        setActiveTag(e) {
            this.newActiveTag = e.path[0].innerText
            this.$emit('setActiveTag', this.newActiveTag)
        }
    }
}
</script>
<style scoped>
    .sidebar {
        background-color: #c9c9c9;
        height: auto;
        width: 100px; 
        padding: 12px;
        border-radius: 8px;
    }
    .tag {
        background-color: white;
        border: none;
        padding: 10px;
        padding-left: 12px;
        list-style-type: none;
        border-radius: 8px;
        margin-right: 8px;
        margin-bottom: 6px;
        margin-top: 8px;
        width: 100%;
        cursor: pointer;
    }
    .active {
        background-color: #333;
        color: white;
    }
</style>