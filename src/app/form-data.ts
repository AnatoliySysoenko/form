export const FORM_PLACEHOLDERS = {
  name: 'Введите логин',
  password: 'Введите пароль',
  email: 'Укажите Email',
  site: 'Укажите сайт',
  age: 'Установите возраст',
  role: 'Выберите роль из списка'
};
export const FORM_LABELS = {
  name: 'Логин:',
  password: 'Пароль:',
  email: 'Email:',
  site: 'Сайт:',
  age: 'Возраст:',
  role: 'Роль:'
};
export const FORM_SUCCESS = {
  name: 'Имя принято!',
  password: 'Пароль принят!',
  email: 'Email принят!',
  site: 'сайт принят!',
  age: 'Возраст принят!',
  role: 'Роль выбрана'
};

export const FORM_ERRORS = {
  name: '',
  password: '',
  email: '',
  site: '',
  age: '',
  role: ''
};

export const FORM_VALIDATION_MESSAGES = {
  name: {
    required: 'Имя обязательно',
    minlength: 'Имя должно содержать не менее 4 символов',
    maxlength: 'Имя должно содержать не более 15 символов',
  },
  password: {
    required: 'Пароль обязателен',
    minlength: 'Пароль должен содержать не менее 7 символов',
    maxlength: 'Пароль должен содержать не более 25 символов',
  },
  email: {
    required: 'Email обязателен',
    emailValidator: 'Не правильный формат Email'
  },
  site: {
    required: 'Сайт обязателен',
    urlNotAllowed: 'Не правильный формат адреса сайта',
    pending: 'Идет проверка...'
  },
  age: {
    required: 'Возраст обязателен',
    rangeValidator: 'Значение должно быть число в диапазоне 1..122',
    minRange: 'Значение должно быть не меньше 1',
    maxRange: 'Значение должно быть не больше 122'
  },
  role: {
    required: 'Роль обязательна',
  },
};

export const FORM_ROLES = ['Гость', 'Модератор', 'Администратор'];
