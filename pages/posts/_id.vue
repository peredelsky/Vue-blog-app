<template>
        <div class="post">
            <MyHeader />
            <div class="links">
                <nuxt-link class="homepage-link" to='/'><span class="breadcrumbs">Main Page</span></nuxt-link>
                <span class="breadcrumbs active">{{ title }}</span>
            </div>
            <h1>{{ title }}</h1>
            <p>{{ date }}</p>
            <img :src="img" />
            <p class="articleText">{{text}}</p>
            <span class="tag" v-for="tag in tags">{{tag}}</span>
            <MyFooter />
        </div>
</template>
<script>
    import postsArray from '../../data'
    import MyHeader from '../../components/MyHeader.vue'
    import MyFooter from '../../components/MyFooter.vue';
    export default {
    computed: {
        id() {
            return Number(this.$route.params.id - 1);
        },
        title() {
            return postsArray[this.id] ? postsArray[this.id].title : "";
        },
        date() {
            return postsArray[this.id] ? postsArray[this.id].date : "";
        },
        img() {
            return postsArray[this.id] ? postsArray[this.id].img : "";
        },
        text() {
            return postsArray[this.id] ? postsArray[this.id].des : "";
        },
        tags() {
            return postsArray[this.id] ? postsArray[this.id].tags : "";
        }
    },
    components: { MyHeader, MyFooter }
}
</script>
<style scoped>
    .post {
    max-width: 1200px;
    margin: 0 auto;
    }
    .post img {
        max-width: 600px;
    }
    .articleText {
        max-width: 800px;
        line-height: 150%;
        margin-bottom: 32px;
    }

    .tag {
        padding: 8px 10px 8px 10px;
        border-radius: 12px;
        border: 1px solid gray;
        margin-right: 12px;
    }
    .breadcrumbs {
        margin-right: 18px;
        cursor: pointer;
        color: gray;
    }
    .active {
        color: black;
        text-decoration: underline;
        cursor: default;
    }
    .homepage-link {
        text-decoration: none;

    }
    .links {
        margin-bottom: 8px;
    }
</style>