export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}

export class InvalidName extends CustomError{ 
    constructor(){
        super(400, "Invalid Username")
    }
}

export class UserExists extends CustomError{
    constructor(){
        super(400, "User already exists")
    }
}

export class InvalidPassword extends CustomError{ 
    constructor(){
        super(400, "Invalid Password")
    }
}

export class UserNotFound extends CustomError{
    constructor(){
        super(404, "User not found")
    }
}

export class Unauthorazed extends CustomError{
    constructor(){
        super(401, "User unauthorazed")
    }
}