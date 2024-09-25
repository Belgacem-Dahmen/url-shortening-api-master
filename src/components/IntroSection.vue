<template>
  <div class="intro">
    <div class="intro_text">
      <h1 class="intro_text-header">More than just shorter links</h1>
      <p class="intro_text-paragraph">
        Build your brand's recognition and get detailed insights on how your
        links are performing.
      </p>
      <button class="intro_text-button">Get Started</button>
    </div>
    <div class="intro_img">
      <img
        class="intro_image-svg"
        src="../assets/images/illustration-working.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.intro {
  margin-top: 150px;
  display: flex;
  padding-right: 40%;
  overflow: hidden;
}

.intro_text-header {
  font-size: 76px;
  line-height: 5rem;
}

.intro_text-paragraph {
  font-size: 22px;
  padding-right: 75px;
  color: var(--grayish-violet);
}
.intro_text-button {
  margin-top: 30px;
  border-radius: 25px;
  border: none;
  color: white;
  background-color: var(--cyan);
  padding: 10px 30px;
}
.intro_image {
  position: relative;
}

.intro_image-svg {
  position: absolute;
  top: 175px;
  right: 175px;
}
</style>
