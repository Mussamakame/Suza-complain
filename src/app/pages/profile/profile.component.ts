import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

}

window.document.addEventListener('DOMContentLoaded', function() {
  const btnEdit = document.querySelector('#btn-edit');
  const btnSave = document.querySelector('#btn-save');
  const inputs = document.querySelectorAll('input');

  btnEdit?.addEventListener('click', function () {
    btnEdit.setAttribute('disabled', 'true')
    btnSave?.removeAttribute('disabled');
    inputs.forEach(input => {
      input.removeAttribute('disabled');
    });

    btnSave?.addEventListener('click', function() {
      alert('Information Successfully Saved');
      btnSave.setAttribute('disabled', 'true');
      inputs.forEach(input => {
        input.setAttribute('disabled', 'true');
      });
      btnEdit.removeAttribute('disabled');
    });
  });

});