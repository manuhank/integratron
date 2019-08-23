function exportJSON(objeto){
 var JSONString = JSON.stringify(objeto);
 var JSONOutput = ContentService.createTextOutput(JSONString);
 JSONOutput.setMimeType(ContentService.MimeType.JSON);
 return JSONOutput
}