<template>
  <nav class="menu-main">
    <ul class="menu-main__wrap">
      <li class="menu-main__item">
        <router-link 
          class="menu-main__link"
          to="/personal-area"
        >
          Личный кабинет
        </router-link>
      </li>
      <li class="menu-main__item">
        <router-link 
          class="menu-main__link"
          to="/payments"
        >
          Платежи
        </router-link>
      </li>
      <li class="menu-main__item">
        <router-link 
          class="menu-main__link"
          to="/payments-history"
        >
          История платежей
        </router-link>
      </li>
      <li class="menu-main__item">
        <router-link 
          class="menu-main__link"
          to="/settings"
        >
          Настройки
        </router-link>
      </li>
      <li class="menu-main__item menu-main__divider">
        <button class="menu-main__link">Выйти</button>
      </li>
    </ul>   
  </nav>
</template>
<script>
export default {
  name: 'MenuMain'

}
</script>
