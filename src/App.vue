<!--- =============================== Template =============================== -->
<template>
	<div class="app-container">
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header class="mdl-layout__header" v-if="isShowHeader">
                <div class="mdl-layout__header-row">
                    <span class="mdl-layout-title">{{title}}</span>
                </div>
            </header>
            <div class="mdl-layout__drawer">
                <span class="mdl-layout-title">Pages</span>
                <nav class="mdl-navigation">
                    <span class="label mdl-navigation__link"><router-link to="/login">Login</router-link></span>
                    <span class="label mdl-navigation__link"><router-link to="/register">Sign Up</router-link></span>
                    <span class="label mdl-navigation__link"><router-link to="/send">Send</router-link></span>
                    <span class="label mdl-navigation__link"><router-link to="/received">Received</router-link></span>
                    <span class="label mdl-navigation__link"><router-link to="/">Page Not Found</router-link></span>
                </nav>
            </div>
            <main class="mdl-layout__content">
                <div class="page-content">
                    <router-view/>
                    <div class="view-page-footer">
                        <Footer></Footer>
                    </div>
                </div>
            </main>
        </div>
	</div>
</template>
<!--- ============================= Template Ends ============================ -->

<!--- ================================ Script ================================ -->
<script>
import Footer from "@/components/Footer.vue";

export default {
    name: "App",
    data: function(){
        return {
            title: this.$route.name,
            isShowHeader: this.$route.meta.requiresAuth
        };
    },
    components: {
        Footer
    },
    methods: {
      isReceivedPage() {
        if(this.$route.path == "/received") {
          return true
        } else {
          return false
        }
      }
    }
};
</script>
<!--- ============================== Script Ends ============================= -->

<!--- ================================= Style ================================ -->
<style lang="scss">
@import '/styles/styles.scss';

.view-page-header {
    padding: 10px 15px 10px 0px;
    box-shadow: 0px 1px 3px #0000001F;
    background: #FFF;
}

.page-content{
    height:97vh;
}

.view-page-footer{
    margin-top:75px;
}
</style>
<!--- ============================== Style Ends ============================== -->