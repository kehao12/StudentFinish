import { Injectable } from '@angular/core';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
import PNotifyConfirm from 'pnotify/dist/es/PNotifyConfirm';
@Injectable({
  providedIn: 'root'
})
export class PnotifyService {

  constructor() {

    PNotify.defaults.styling = 'bootstrap4';
    PNotify.defaults.icons = 'fontawesome4';
    PNotify.defaults.delay = 1000;
  }
  getPNotify() {
    return PNotify;
  }
  showSuccessInsert(a: string) {
    PNotify.success(a);
  }
  showError(a: string) {
    PNotify.error(a);
  }
  showSuccessDel(a: string) {
    PNotify.notice(a);
  }
  showSuccessUp(a: string) {
    const notice = PNotify.success({
      title: 'Updated Success',
      text: 'You have just updated ' + a.fontcolor('red') + ' successfully!!!',
      icon: 'fa fa-success',
      delay : 1500,
      stack: {
        'dir1': 'down',
        'modal': true,
        'firstpos1': 25
      },
      modules: {
        Buttons: {
          closer: true,
          sticker: false
        },
        History: {
          history: false
        },
      }
    });
  }
  showSuccessIn() {
    const notice = PNotify.success({
      title: 'Inserted Success',
      text: 'You have just inserted a row successfully!!!',
      icon: 'fa fa-check',
      delay : 1500,
      stack: {
        'dir1': 'down',
        'modal': true,
        'firstpos1': 25
      },
      modules: {
        Buttons: {
          closer: true,
          sticker: false
        },
        History: {
          history: false
        },
      }
    });
  }
  showFailUp() {
    const notice = PNotify.error({
      title: 'Updated Fail',
      text: 'Error when You updated a row!!!',
      icon: 'fa fa-times',
      hide: false,
      stack: {
        'dir1': 'down',
        'modal': true,
        'firstpos1': 25
      },
      modules: {
        Confirm: {
          confirm: true
        },
        Buttons: {
          closer: true,
          sticker: false
        },
        History: {
          history: false
        },
      }
    });
  }
}
