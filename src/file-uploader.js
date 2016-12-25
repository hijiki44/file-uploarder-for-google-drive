// https://keitaoriginal.com/apps-script-file-upload/
function doGet() {
  return HtmlService.createHtmlOutputFromFile('form')
      .setSandboxMode(HtmlService.SandboxMode.NATIVE);
}
var folderId = "";
function processForm(formObject) {
  Logger.log("start processForm");
  //var formBlob = formObject.files;
  //Logger.log(formObject.files);
  Logger.log(formObject.file);
  //var formBlob = formObject.files;
  var formBlob = formObject.file;
  var folder = DriveApp.getFolderById(folderId);
  var driveFile = folder.createFile(formBlob);
  Logger.log("end processForm");
  return driveFile.getUrl();
}

// 複数選択： http://www.skuare.net/test/jMultipleFileUpLoad.html
// JS で File API を呼び出してファイルを読み取る： https://www.html5rocks.com/ja/tutorials/file/dndfiles/
// Forms： https://developers.google.com/apps-script/guides/html/communication
