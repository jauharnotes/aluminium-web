<template>
  <div class="o-circle c-container__circle o-circle__sign--failure">
    <div class="o-circle__sign"></div>
  </div>
</template>

<style scoped>
/*=======================
           O-Circle
    =========================*/

.o-circle {
  display: flex;
  width: 10.555rem;
  height: 10.555rem;
  justify-content: center;
  align-items: flex-start;
  border-radius: 50%;
  animation: circle-appearance 0.8s ease-in-out 1 forwards,
    set-overflow 0.1s 1.1s forwards;
}

/*=======================
        C-Circle Sign
    =========================*/

.o-circle__sign {
  position: relative;
  opacity: 0;
  background: #fff;
  animation-duration: 0.8s;
  animation-delay: 0.2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

.o-circle__sign::before,
.o-circle__sign::after {
  content: "";
  position: absolute;
  background: inherit;
}

.o-circle__sign::after {
  left: 100%;
  top: 0%;
  width: 500%;
  height: 95%;
  transform: translateY(4%) rotate(0deg);
  border-radius: 0;
  opacity: 0;
  animation: set-shaddow 0s 1.13s ease-in-out forwards;
  z-index: -1;
}

/*=======================
          Sign Failure
    =========================*/

.o-circle__sign--failure {
  background: rgb(236, 78, 75);
}

.o-circle__sign--failure .o-circle__sign {
  width: 1rem;
  height: 7rem;
  transform: translateY(25%) rotate(45deg) scale(0.1);
  border-radius: 50% 50% 50% 50% / 10%;
  animation-name: failure-sign-appearance;
}

.o-circle__sign--failure .o-circle__sign::before {
  top: 50%;
  width: 100%;
  height: 100%;
  transform: translateY(-50%) rotate(90deg);
  border-radius: inherit;
}

/*--shadow--*/
.o-circle__sign--failure .o-circle__sign::after {
  background: rgba(175, 57, 55, 0.8);
}

/*-----------------------
          @Keyframes
    --------------------------*/

/*CIRCLE*/
@keyframes circle-appearance {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.5);
  }

  60% {
    transform: scale(1);
  }

  100% {
    transform: scale(1);
  }
}

/*SIGN*/
@keyframes failure-sign-appearance {
  50% {
    opacity: 1;
    transform: translateY(25%) rotate(45deg) scale(1.7);
  }

  100% {
    opacity: 1;
    transform: translateY(25%) rotate(45deg) scale(1);
  }
}

@keyframes success-sign-appearance {
  50% {
    opacity: 1;
    transform: translateX(130%) translateY(35%) rotate(45deg) scale(1.7);
  }

  100% {
    opacity: 1;
    transform: translateX(130%) translateY(35%) rotate(45deg) scale(1);
  }
}

@keyframes set-shaddow {
  to {
    opacity: 1;
  }
}

@keyframes set-overflow {
  to {
    overflow: hidden;
  }
}

/*+++++++++++++++++++
        @Media Queries
    +++++++++++++++++++++*/

@media screen and (min-width: 1300px) {
  HTML {
    font-size: 1.5625em;
  } /* 25 / 16 = 1.5625 */
}
</style>
