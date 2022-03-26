<header class="header">
  <img class="header__logo" src="images/ic-logo.svg" alt="logo" />
  <h3 class="header__title">TODO</h3>
  <img class="header__settings" src="images/ic-settings.svg" alt="settings" />
</header>

<style lang="scss">
.header {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
  align-items: center;
  border-radius: 5px 5px 0 0;
  background-color: #eb5651;
  padding: 0 20px;

  &__logo {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
  
  &__title {
    flex: 1 1 auto;
    color: white;
    margin-left: 2px;
  }

  &__settings {
    cursor: pointer;
  }
}
</style>
