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
				<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" v-on:click="login">
					{{buttonLabel}}
				</button>
			</div>
			<div class="view-card-additional-options-div">
				<span class="loginLabel"><router-link to="/login">{{loginLabel}}</router-link></span>
			</div>
			<div class="view-card-additional-options-div">
				<span class="policylabel">{{policyLabel}}</span>
			</div>
		</div>
    </div>
</template>
<!--- ============================= Template Ends ============================ -->

<!--- ================================ Script ================================ -->
<script>
export default {
	name: "SignUp",
	data: function() {
		return {
			"username":"",
			"password":"",
			"title": "It Wasn't Me",
			"subtitle": "Receive anonymous compliments from your friends and send anonymous messages to your friends for free.",
			"buttonLabel": "Register",
			"loginLabel": "Already Have an Account? Login",
			"policyLabel": "By using this service, you agree to our Privacy Policy, Terms of Service and any related policies. (Check Disclaimer)"
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

.view-card-avatar-div{
	padding-top:30px;
}
.view-card-avatar{
	height:100px;
}

.subtitle, .loginLabel, .policylabel{
	text-align: center;
}

.view-card-subtitle-div,
.view-card-button-div,
.view-card-additional-options-div{
	padding:5px;
}

.policylabel{
	font-size: 12px;
    line-height: 16px;
}

</style>
<!--- ============================== Style Ends ============================== -->