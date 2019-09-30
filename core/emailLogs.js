function emailLogs() {
    var recipient = "manuhank@gmail.com";
    var subject = "Itegratron debug";
    var body = Logger.getLog();
    MailApp.sendEmail(recipient, subject, body);
}
