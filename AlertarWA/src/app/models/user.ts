// Create model User   
export class User {
    /**
     *
     */
    constructor(username: string, password: string, fullname: string, token: string) {
            this._username = username;
            this._password = password;
            this._fullname = fullname;
            this._token = token;
    }
    private _username: string;
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }
    private _password: string;
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    private _fullname: string;
    public get fullname(): string {
        return this._fullname;
    }
    public set fullname(value: string) {
        this._fullname = value;
    }
    private _token: string;
    public get token(): string {
        return this._token;
    }
    public set token(value: string) {
        this._token = value;
    }
}