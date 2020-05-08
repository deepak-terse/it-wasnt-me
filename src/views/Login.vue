<template>
    <div class="view-container">
		<div class="view-card">
			<div class="view-card-avatar-div">
				<img class="view-card-avatar" src="../assets/anonymous.png">
			</div>
			<div class="view-card-title-div">
				<span class="title"><h3>{{title}}</h3></span>
			</div>
			<div class="view-card-subtitle-div">
				<span class="subtitle">
					{{subtitle}}
				</span>
			</div>
			<div class="view-card-input-div">
				<!-- <input  placeholder="Username"> -->
				<div class="group">
					<input type="text" v-model="username" required="required" />
					<span class="highlight"></span>
					<span class="bar"></span>
					<label>Username</label>
				</div>
			</div>
			<div class="view-card-input-div">
				<!-- <input v-model="password" placeholder="Password"> -->
				<div class="group">
					<input type="password" v-model="username" required="required" />
					<span class="highlight"></span>
					<span class="bar"></span>
					<label>Password</label>
				</div>
			</div>
			<div class="view-card-button-div">
				<button class="btn btn-submit" v-on:click="login">Login</button>
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

<script>
export default {
	name: "Login",
	data: function() {
		return {
			"username":"",
			"password":"",
			"title": "It Wasn't Me",
			"subtitle": "Receive anonymous compliments from your friends and send anonymous messages to your friends for free.",
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

<style lang="scss">
@import '../styles.scss';
@import '../material.scss';

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

.view-card-input-div{
	padding:20px 20px;
}

</style>