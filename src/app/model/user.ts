export class User {
    private username: string = "";
    private password: string = "";
    private displayName: string = "";

    constructor(username: string, password: string, displayName: string) {
        this.username = username;
        this.password = password;
        this.displayName = displayName;
    }

    public getUsername() {
        return this.username;
    }

    public getPassword() {
        return this.password;
    }

    public getDisplayName() {
        return this.displayName;
    }
}
