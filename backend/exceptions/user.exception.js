const userException = {};

userException.signedUserException = function (message){
    this.name = "SignedUserException";
    this.message = message;
}

module.exports = userException;