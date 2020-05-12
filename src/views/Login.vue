<!--- =============================== Template =============================== -->
<template>
    <div class="view-container">
		<div class="mdl-card mdl-shadow--2dp view-card">
			<div class="view-card-avatar-div">
				<img class="view-card-avatar" src="../assets/anonymous.png">
			</div>
			<div class="view-card-title-div">
				<span class="title"><h3>{{title}}</h3></span>
			</div>
			<div class="view-card-subtitle-div">
				<span class="subtitle">{{subtitle}}</span>
			</div>
			<div class="view-card-input-div">
				<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
					<input class="mdl-textfield__input" type="text" v-model="username" id="username" pattern="[A-Z,a-z, ]*">
					<label class="mdl-textfield__label" for="username">User name</label>
					<span class="mdl-textfield__error">Letters and spaces only</span>
				</div>
			</div>
			<div class="view-card-input-div">
				<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
					<input class="mdl-textfield__input" type="text" v-model="password" id="password">
					<label class="mdl-textfield__label" for="password">Password</label>
				</div>
			</div>
			<div class="view-card-button-div">
				<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" v-on:click="login">{{buttonLabel}}</button>
			</div>
			<div class="view-card-additional-options-div">
				<span class="label"><router-link to="/">{{forgotPasswordLabel}}</router-link></span>
			</div>
			<div class="view-card-additional-options-div">
				<span class="label"><router-link to="/register">{{registerLabel}}</router-link></span>
			</div>
		</div>
    </div>
</template>
<!--- ============================= Template Ends ============================ -->

<!--- ================================ Script ================================ -->
<script>
export default {
	name: "Login",
	data: function() {
		return {
			"username":"",
			"password":"",
			"title": "It Wasn't Me",
			"subtitle": "Receive anonymous compliments from your friends and send anonymous messages to your friends for free.",
			"buttonLabel": "Login",
			"forgotPasswordLabel": "Forgot Password?",
			"registerLabel": "Don't Have an Account? Register"
		}
	},
	methods: {
		login: function(event){
			alert(this.username + "" + this.password);
			if (event) {
				alert(event.target.tagName)
			}
		}
	}
};
</script>
<!--- ============================== Script Ends ============================= -->

<!--- ================================= Style ================================ -->
<style lang="scss" scoped>
@import '../styles/styles.scss';
// @import '../styles/components.scss';

//To override the defaults
.view-card{
    min-height: initial;
    width: initial;
	margin:5px;
	padding: 20px 10px;
}

.view-card-avatar-div,
.view-card-title-div,
.view-card-subtitle-div,
.view-card-input-div,
.view-card-button-div,
.view-card-additional-options-div{
	display:flex;
	flex-direction: row;
    justify-content: center;
}

.view-card-avatar{
	height:100px;
}

.subtitle{
	text-align: center;
	padding:10px 20px;
}

.view-card-subtitle-div,
.view-card-button-div,
.view-card-additional-options-div{
	padding:5px 0px;
}

</style>
<!--- ============================== Style Ends ============================== -->