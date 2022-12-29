// Q5. Write a program find domain name from given email string
function extractDomain(email) {
    const atSignIndex = email.indexOf('@');
    const domainPart = email.slice(atSignIndex + 1);
    const dotIndex = domainPart.indexOf('.');
    const domain = domainPart.slice(0, dotIndex);
    return domain;
}
console.log(extractDomain('admin@gmail.com'));  // Output: 'gmail'