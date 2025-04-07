class TransactionsElements {

    btnDeposit = () => { return '[ng-class="btnClass2"]' }
    typeDeposit = () => { return '.form-control' }
    btnAddDeposit = () => { return 'form.ng-dirty > .btn' }
    msnSucessoDeposit = () => { return '.error' }

    btnWithdrawn = () => { return '[ng-class="btnClass3"]' }
    typeWithdrawn = () => { return '.form-control' }
    btnAddWithdrawn = () => { return 'form.ng-dirty > .btn' }
    msnSucessoWithdrawn = () => { return '.error' }

} export default TransactionsElements