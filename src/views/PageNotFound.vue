<!--- =============================== Template =============================== -->
<template>
    <div class="view-container">
        <!-- <div class="mdl-card mdl-shadow--2dp view-card"> -->
			<div class="view-card-title-div">
				<span class="title"><h3>Page Not Found</h3></span>
			</div>
			<div class="mdl-card__supporting-text">
				The page you are trying to get to never existed in this reality, or has migrated to a parallel universe.
			</div>
			<div class="mdl-card__supporting-text">
				Try going back to home page and repeating your action. Or, contact helpdesk for support.
			</div>
		<!-- </div> -->
    </div>
</template>
<!--- ============================= Template Ends ============================ -->

<!--- ================================ Script ================================ -->
<script>
export default {
  name: "PageNotFound"
};
</script>
<!--- ============================== Script Ends ============================= -->

<!--- ================================= Style ================================ -->
<style lang="scss" scoped>
@import '../styles/styles.scss';

.view-card-title-div{
	display:flex;
	flex-direction: row;
    justify-content: center;
}
</style>
<!--- ============================== Style Ends ============================== -->