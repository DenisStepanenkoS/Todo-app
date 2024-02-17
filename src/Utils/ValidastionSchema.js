import * as yup from 'yup';

export const NEW_TASK_VALIDATION_SCHEMA = yup.object().shape({
    newTask: yup.string().required('Введите новую задачу'),
    deadline: yup.string().test('valid-deadline', 'Неверное время', function (value) {
      const currentTime = new Date();
      const inputTime = new Date();
      inputTime.setHours(value[0]+value[1]);
      inputTime.setMinutes(value[3]+value[4]);
      
      return inputTime > currentTime;
      }).required('Введите дедлайн'),
  });
