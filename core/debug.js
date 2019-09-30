var debugIsEnabled = false;
function emailLogs() {
    var recipient = Session.getActiveUser().getEmail();
    var subject = "Itegratron debug";
    var body = Logger.getLog();
    MailApp.sendEmail(recipient, subject, body);
}
