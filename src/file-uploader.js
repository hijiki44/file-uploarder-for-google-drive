//var ui = SpreadsheetApp.getUi();
var ui = DocumentApp.getUi();

function onOpen(e){
    ui.createMenu('サンプル メニュー').addItem('ダイアログ表示', 'showAlert').addToUi();
}

function showAlert(){
    var result = ui.alert(
        'サンプルダイアログ',
        '処理を続けますか？',
        ui.ButtonSet.YES_NO);

    if(result == ui.Button.YES){
        ui.alert('「はい」ボタンが押されました。');
    }else{
        ui.alert('「いいえ」ボタンが押されました。');
    }
}
