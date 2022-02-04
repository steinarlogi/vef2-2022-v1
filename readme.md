# Verkefni 1 í vefforritun 2

Linkur að vefsíðunni er [hér](https://mystifying-swartz-d6a71c.netlify.app/)

node build.js er keyrt af netlify þegar því er deployas á netlify.
build.js sér um að lesa skrárnar úr möppunni data og búa til html skrár fyrir hverja og eina

Til þess að keyra forritið locally er hægt að byrja á því að keyra node build.js
og svo keyra npm run sync til þess að fá browsersync í gang og fara inn á slóðina localhost:3000/dist

Til þess að keyra testin er hægt að keyra npm run test

Til þess að keyra eslint er hægt að keyra npm run lintjs

Til þess að keyra stylelint er hægt að keyra npm run lintcss
