<template>
    <div>
      <span 
      :class="{active: button.filter === dateFilter}" 
      class="button" 
      v-for="button in buttons" 
      :key="button.label"
      @click="setDateFilter(button.filter)"
      >{{button.label}}</span>  
    </div>
</template>
<script>
export default {
    props: {
        dateFilter: String
    },
    data() {
        return {
            newDateFilter: '',
            buttons: [{label: 'Show All', filter: 'all'}, {label: 'Show Old', filter: 'old'}, {label: 'Show New', filter: 'new'}]
        }
    },
    methods: {
        setDateFilter(filter) {
            this.newDateFilter = filter
            this.$emit('setDateFilter', this.newDateFilter)
            console.log(filter)
            console.log(this.newDateFilter)
        }
    }
}
</script>
<style scoped>
    .button {
        margin-left: 32px;
        cursor: pointer;
    }
    .active {
        text-decoration: underline;
        font-weight: 600;
    }
</style>