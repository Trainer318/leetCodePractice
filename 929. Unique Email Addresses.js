/*
TestCase:
["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
*/

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let nameAndDomainArray = [];
    let nameAndDomainArrayAll = [];
    for (let email of emails) {
        nameAndDomainArray = email.split("@");
        nameAndDomainArray[0] = nameAndDomainArray[0].split(".").join("")
        if(end = nameAndDomainArray[0].indexOf("+")) {
            nameAndDomainArray[0] = nameAndDomainArray[0].substring(0,end);
        }
        if (nameAndDomainArrayAll === undefined || nameAndDomainArrayAll.length == 0) {
            nameAndDomainArrayAll.push(nameAndDomainArray);
        } else {
            let elementPushFlag = true;
            for (let nameAndDomainArrayStored of nameAndDomainArrayAll) {
                if (nameAndDomainArrayStored[1] == nameAndDomainArray[1] && nameAndDomainArrayStored[0] == nameAndDomainArray[0]) {
                    elementPushFlag = false;
                    break;
                }
            }
            if (elementPushFlag) nameAndDomainArrayAll.push(nameAndDomainArray);
        }
    }
    return nameAndDomainArrayAll.length;
};