<template>
    <div class="view-container">
		<div class="view-card" v-for="item in items" :key="item.message">
            <div class="view-card-message-div">
				<span class="message">{{item.message}}</span>
			</div>
            <div class="view-card-date-div">
				<span class="date">{{item.date}}</span>
			</div>
		</div>
    </div>
</template>

<script>
export default {
  name: "Received",
  data: function() {
		return {
            "items": [
                {
                    "message":"Hello Deepak. How are you?  It's been a long time since we met. Eager to meet you after the lockdown. Guess whos' this?",
                    "date": "- 6 May 2020, 10:30 PM"
                },
                {
                    "message":"Hello Deepak. How are you?  It's been a long time since we met. Eager to meet you after the lockdown. Guess whos' this?",
                    "date": "- 6 May 2020, 10:30 PM"
                },
                {
                    "message":"Hello Deepak. How are you?  It's been a long time since we met. Eager to meet you after the lockdown. Guess whos' this?",
                    "date": "- 6 May 2020, 10:30 PM"
                },
                {
                    "message":"Hello Deepak. How are you?  It's been a long time since we met. Eager to meet you after the lockdown. Guess whos' this?",
                    "date": "- 6 May 2020, 10:30 PM"
                },
                {
                    "message":"Hello Deepak. How are you?  It's been a long time since we met. Eager to meet you after the lockdown. Guess whos' this?",
                    "date": "- 6 May 2020, 10:30 PM"
                }
            ]
		}
	}
};
</script>

<style lang="scss">
@import '../styles/styles.scss';

.view-card-message-div,
.view-card-date-div {
    display:flex;
	flex-direction: row;
}

.view-card-message-div{
    justify-content: flex-start;
}
.view-card-date-div {
    justify-content: flex-end;
}


</style>