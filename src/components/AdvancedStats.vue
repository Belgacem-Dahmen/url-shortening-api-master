<template>
  <div class="advancedStats">
    <div class="advancedStats_top">
      <h1 class="advancedStats_top-header">Advanced Statistics</h1>
      <p class="advancedStats_top-paragraph">
        Track how your links are performing across the web with our advanced
        statistics dashboard
      </p>
    </div>
    <div class="advancedStats_bottom">
      <div class="card">
        <div class="card_icon">
          <img
            class="card_icon-img"
            src="../assets/images/icon-brand-recognition.svg"
            alt=""
          />
        </div>
        <h2 class="card_header">Brand Recognition</h2>
        <p class="card_paragraph">
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </p>
      </div>
      <div class="card mt-2">
        <div class="card_icon">
          <img
            class="card_icon-img"
            src="../assets/images/icon-detailed-records.svg"
            alt=""
          />
        </div>
        <h2 class="card_header">Detailed Records</h2>
        <p class="card_paragraph">
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </div>
      <div class="card mt-4">
        <div class="card_icon">
          <img
            class="card_icon-img"
            src="../assets/images/icon-fully-customizable.svg"
            alt=""
          />
        </div>
        <h2 class="card_header">Fully Customizable</h2>
        <p class="card_paragraph">
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style scoped>
.advancedStats {
  padding: 10%;
  background-color: rgb(236, 234, 234);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}

.advancedStats_top {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.advancedStats_top-paragraph {
  padding: 0 550px;
  color: var(--very-dark-blue);
}

.advancedStats_bottom {
  display: flex;
  gap: 30px;
}
.card {
  background-color: white;
  max-width: 375px;
  height: 300px;
  padding: 30px 40px;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card_icon {
  background-color: var(--very-dark-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  max-width: fit-content;
  padding: 20px;
  position: absolute;
  top: -40px;
}
.card_header {
  margin-bottom: 20px;
  font-size: 22px;
}
.card_paragraph {
  font-size: 16.5px;
  line-height: 1.75em;
  color: var(--very-dark-blue);
}

.mt-2 {
  margin-top: 40px;
}
.mt-4 {
  margin-top: 80px;
}
</style>
