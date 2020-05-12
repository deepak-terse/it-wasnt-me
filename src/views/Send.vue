<!--- =============================== Template =============================== -->
<template>
    <div class="view-container">
		<div class="mdl-card mdl-shadow--2dp view-card">
            <div class="view-card-title-div">
				<span class="title"><h3>{{title}}</h3></span>
			</div>
            <div class="view-card-subtitle-div">
				<span class="subtitle">{{subtitle}}</span>
			</div>
            <div class="view-card-input-div">
				<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
					<textarea class="mdl-textfield__input" v-model="message" type="text" rows="3" maxrows="6" id="message"></textarea>
					<label class="mdl-textfield__label" for="message">Message</label>
				</div>
            </div>
            <div class="view-card-button-div">
				<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" v-on:click="login">{{buttonLabel}}</button>
			</div>
            <div class="view-card-additional-options-div">
				<span class="label">{{policyLabel}}</span>
			</div>
		</div>
    </div>
</template>
<!--- ============================= Template Ends ============================ -->

<!--- ================================ Script ================================ -->
<script>
export default {
    name: "Send",
    data: function() {
		return {
			"message":"",
            "title": "Say Something...",
            "subtitle": "Say what do you think about Deepak or leave a feedback for him anonymously using the form below...",
            "buttonLabel": "Send Message",
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
// @import '../styles/components.scss';

//To override the defaults
.view-card{
    min-height: initial;
    width: initial;
    margin:5px;
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

.subtitle, .label{
	text-align: center;
	padding:10px 20px;
}

.view-card-subtitle-div,
.view-card-button-div,
.view-card-additional-options-div{
	padding:5px 0px;
}	

.label{
	font-size: 12px;
    line-height: 16px;
}

</style>
<!--- ============================== Style Ends ============================== -->