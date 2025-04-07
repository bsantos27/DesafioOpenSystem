class RegisterElements {
      
    btnAddCustomer = () => { return '[ng-class="btnClass1"]' }
    inputFirstName = () => { return ':nth-child(1) > .form-control' }
    inputLastName = () => { return ':nth-child(2) > .form-control' }
    inputCode = () => { return ':nth-child(3) > .form-control' }
    btnAdd = () => { return '.btn.btn-default' }

} export default RegisterElements