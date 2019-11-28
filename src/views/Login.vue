<template>
  <div class="login">
    <HeaderJustTitle class="login__header">Вход</HeaderJustTitle>
    <div class="login__content">
      <div class="login__input-group">
        <span class="login__span">Номер счета:</span>
        <input
          class="login__input"
          title="Введите номер счета"
          v-model="accountNumber"
          @keypress="onlyNumber"
          :class="{
            'input-error': v.accountNumber.$invalid && v.accountNumber.$dirty,
            'input-success': !v.accountNumber.$invalid
          }"
          maxlength="20"
        />
        <div
          class="error"
          v-if="!v.accountNumber.required && v.accountNumber.$dirty"
        >
          Поле обязательно.
        </div>
        <div
          class="error"
          v-if="!v.accountNumber.minLength && v.accountNumber.$dirty"
        >
          Нужно ввести 20 цифр.
        </div>
      </div>
      <div class="login__input-group">
        <span class="login__span">Сумма платежа:</span>
        <input
          class="login__input"
          title="Введите сумму платежа"
          v-model="amount"
          @keypress="onlyNumber"
          :class="{
            'input-error': v.amount.$invalid && v.amount.$dirty,
            'input-success': !v.amount.$invalid
          }"
          maxlength="20"
        />
        <label>&nbsp;&nbsp;руб.</label>
        <div class="error" v-if="!v.amount.required && v.amount.$dirty">
          Поле обязательно.
        </div>
        <div class="error" v-if="!v.amount.minValue && v.amount.$dirty">
          Сумма должна быть больше или равна 100.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { required, minLength, email, } from 'vuelidate/lib/validators';

type ComplexObjectLogin = {
  commit: any;
  dispatch: any;
};

export default Vue.extend({
  name: "Login",

  components: {
    HeaderJustTitle: () => import("@/components/Header/HeaderJustTitle.vue")
  },

  data() {
    return {
      login: null,
      password: null,
    };
  },

  validations: {
    login: {
      type: String,
      required,
    },
    password: {
      type: String,
      required,
    },
  },

  methods: {
    submit() {
      (this as any).$v.$touch();
      if (!(this as any).$v.$invalid) {
        (this as any).$emit("next");
      }
    },

    patternPhone(model: String, initial: String) {
      if (model == "phone") {
        initial = initial.replace(
          /[^0-9]/,
          initial.substring(0, initial.length - 2)
        );
        initial = initial.replace(/[0-9]{3}$/, " - ");
        console.log(initial);
        return initial;
      } else {
        return initial;
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.login {
  height: 100%;

  &__content {
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > * + * {
      margin-top: 25px;
    }
  }
}
</style>
