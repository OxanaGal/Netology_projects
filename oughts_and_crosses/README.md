# Дипломная работа по курсу «Основы программирования»

**В качестве дипломной работы запрограммирована игра «крестики-нолики». Визуальное оформление дано, в рамках проекта реализована логика работы игры.**

Игроки по очереди ставят крестики и нолики. Игрок, первый заполнивший диагональ, вертикаль или горизонталь своими символами, выигрывает.

Страница отобржается во вкладке result, отладочная информация во вкладке console.

Image of the game

### Принцип работы игры
Как работает игра:

Когда страница загружается, вызывается функция startGame. Эта функция сообщает, кто ходит первый, затем содается и отрисовывается игровое поле.
Когда игрок кликает на игровом поле, происходит вызов функции click. Ставится метка игрока в этом поле, отрисовается поле на экране. Затем происходит проверка, не выиграл ли игрок. Если выиграл, то появляется поздравление, а если еще нет — передаем ход следующему игроку.

### Внутреннее устройство игры делится на три части:

логическая модель игры
отрисовка логической модели на экране (реализовано в стартовом коде)
реакция на действия игрока (реализовано в стартовом коде)
