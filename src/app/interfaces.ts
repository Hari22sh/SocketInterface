export interface userLogin {
    userName:string,
    password:string
}


export interface signUp {
    userName : string,
    password :string
}

export interface usersList {
    userName: string,
    email:string,
    password:string
    socketId : string
    // Add other user properties as needed
}

export interface selectedUser {
    currentUser:string,
    selectedUser : string
}