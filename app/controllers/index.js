import Controller from '@ember/controller';
import {empty} from '@ember/object/computed';

export default Controller.extend({

  responseMessage: '',
  taskTitle: '',
  taskDescription: '',
  isDisabled: empty('taskTitle') && empty('taskDescription'),

  actions: {
    saveTaskData() {
      const title = this.get('taskTitle');
      const description = this.get('taskDescription');
      const newTask = this.store.createRecord('task', {title, description});
      newTask.save().then(response => {
        this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
        this.set('taskTitle', '');
        this.set('taskDescription', '');
      });
    }
  }
});
