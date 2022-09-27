<template>
  <div class="main">
    <MyHeader />
    <div class="searchbar-datefilter">
      <h1>My Blog</h1>
      <input class="searchbar" type="text" placeholder="Search..." v-model="searchPost" />
      <DateFilter :dateFilter="dateFilter" @setDateFilter="setDateFilter"/>
    </div>
    <div class="sidebar-postlist">
      <SideBar :tags="tags" 
      :activeTag="activeTag" 
      @setActiveTag="setActiveTag"/>
      <PostsList :posts="sortedBySearchTagsAndDate"/>
    </div>
    <MyFooter />
  </div>
</template>

<script>
import PostsList from '../components/PostsList'
import postsArray from '../data'
import DateFilter from '../components/DateFilter'
import SideBar from '../components/SideBar'
import MyHeader from '../components/MyHeader.vue'
import MyFooter from '../components/MyFooter.vue'

export default {
  name: 'indexPage',
  components: {
    PostsList,
    DateFilter,
    SideBar,
    MyHeader,
    MyFooter
},
  data() {
    return {
      posts: postsArray,
      searchPost: '',
      tags: [{tagName: 'all', id: 1}, {tagName: 'animals', id: 2}, {tagName: 'real estate', id: 3}, {tagName: 'job', id: 4}, {tagName: 'photo', id: 5}, {tagName: 'family', id: 6}],
      activeTag: 'all',
      dateFilter: 'all'
    }
  },
  computed: {
    sortedBySearch() {
      return this.posts.filter(post => {
        return post.title.toLowerCase().includes(this.searchPost.toLowerCase())
      })
    },
    sortedBySearchAndTags() {
      if (this.activeTag === 'all') {
        return this.sortedBySearch
      }
      else {
        return this.sortedBySearch.filter(item => item.tags.includes(this.activeTag))
      }
    },
    sortedBySearchTagsAndDate() {
      if (this.dateFilter === 'new') {
        return [...this.sortedBySearchAndTags].sort((a, b) => a.date > b.date ? -1 : 1)
      }
      else if (this.dateFilter === 'old') {
        return [...this.sortedBySearchAndTags].sort((a, b) => a.date > b.date ? 1 : -1)
      }
      else {
        return this.sortedBySearchAndTags
      }
    }
  },
  methods: {
    setActiveTag(newActiveTag) {
      this.activeTag = newActiveTag
    },
    setDateFilter(newDateFiler) {
      this.dateFilter = newDateFiler
    }
  }
}
</script>

<style>
.main {
  max-width: 1200px;
  margin: 0 auto;
}
h1 {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  max-width: 1200px;
  color: #2c3e50;
}
.sidebar-postlist {
  display: flex;
  align-items: flex-start;
}
.searchbar-datefilter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}
.searchbar {
  height: 24px;
  width: 400px;
  padding: 8px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
}
</style>