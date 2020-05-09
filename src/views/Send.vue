<template>
    <div class="view-container">
		<div class="view-card">
            <div class="view-card-title-div">
				<span class="title"><h3>{{title}}</h3></span>
			</div>
            <div class="view-card-subtitle-div">
				<span class="subtitle">{{subtitle}}</span>
			</div>
            <div class="view-card-input-div">
                <div class="group">
                    <textarea type="textarea" v-model="message" rows="5" required="required"></textarea>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Message</label>
                </div>
            </div>
            <div class="view-card-button-div">
				<button class="btn btn-submit" v-on:click="login">{{buttonLabel}}</button>
			</div>
            <div class="view-card-additional-options-div">
				<span class="label">{{policyLabel}}</span>
			</div>
		</div>
    </div>
</template>

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

<style lang="scss">
@import '../styles/styles.scss';
@import '../styles/components.scss';


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

.view-card-input-div{
	padding:20px 20px;
}

</style>