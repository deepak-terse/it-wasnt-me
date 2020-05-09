<template>
	<div class="app-container">
		<div class="view-page-header">
            <span>Messages</span>
        </div>
		<router-view />
	</div>
</template>

<script>

export default {
  name: "App"
};
</script>

<style lang="scss">
@import '/styles/styles.scss';

.view-page-header {
    padding: 10px 15px 10px 0px;
    box-shadow: 0px 1px 3px #0000001F;
    background: #FFF;
}
</style>