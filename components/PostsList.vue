<template>
    <div class="main-div">
        <div class="post" v-for="post in posts" :key="post.title">
            <p>{{post.date}}</p>
            <h3>{{post.title}}</h3>
            <img class="img" :src="post.img" alt="">
            <span class="tag" v-for="item in post.tags" :key="item.id">{{item}}</span>
            <nuxt-link class="button-link" :to="`/posts/${post.id}`"><button class="button">See more</button></nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        posts: Array
    }
}
</script>

<style scoped>
    .main-div {
        display: flex;
        flex-wrap: wrap;
    }
    .post {
        border: solid 1px #cccccc;
        padding: 6px 20px 20px 14px;
        border-radius: 12px;
        align-self: flex-start;
        margin: 0px 0 24px 30px;
        max-width: 250px;
    }
    .post img {
        width: 250px;
        height: 150px;
        display: block;
    }
    .tag {
        padding: 6px 10px 6px 10px;
        border-radius: 12px;
        border: 1px solid gray;
        margin-right: 8px;
        margin-bottom: 8px;
        margin-top: 12px;
        display: inline-block;
        font-size: 14px;
    }
    .button {
        display: block;
        padding: 8px 12px 8px 12px;
        margin-top: 16px;
        width: 100%;
        height: 40px;
        font-size: 14px;
        
    }
    .button-link {
        text-decoration: none;
    }
</style>