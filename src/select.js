// Google Apps Scriptでファイルやフォルダの選択画面を作る（Google Picker API）
// http://eye4brain.sakura.ne.jp/wp/blog/2015/02/13/google-apps-script%E3%81%A7%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%84%E3%83%95%E3%82%A9%E3%83%AB%E3%83%80%E3%81%AE%E9%81%B8%E6%8A%9E%E7%94%BB%E9%9D%A2%E3%82%92%E4%BD%9C%E3%82%8B/

//ファイル選択画面を出すコード
function fileman() {
//  var html = HtmlService.createHtmlOutputFromFile('Picker.html').setWidth(600).setHeight(425);
  var html = HtmlService.createHtmlOutputFromFile('picker.html').setWidth(600).setHeight(425);
  SpreadsheetApp.getUi().showModalDialog(html, 'ファイルの選択');
}
 
//フォルダ選択画面を出すコード
function folderman() {
//  var html = HtmlService.createHtmlOutputFromFile('Picker2.html').setWidth(600).setHeight(425);
  var html = HtmlService.createHtmlOutputFromFile('picker2.html').setWidth(600).setHeight(425);
  SpreadsheetApp.getUi().showModalDialog(html, 'フォルダーの選択');
}
 
//OAuth認証
function getOAuthToken() {
  DriveApp.getRootFolder();　//なにげにこの部分重要！！
  return ScriptApp.getOAuthToken();
}
 
//選択した後にHTML側から呼び出されるコード
function telepon(targetval){
  Browser.msgBox(targetval);
}