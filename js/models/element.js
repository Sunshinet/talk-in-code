import * as validator from "validator";

export default class Element {
    constructor(author, content, likes) {
        this.author = author;
        this.content = content;
        this.likes = likes;
        this.errors = null;
    }

    get author() {
        return this._author;
    }

    set author(val) {
        let message = null;
        if (typeof val === "undefined" || val === null) {
            message = "Author must contain username!";
        }
        if (message) {
            this.addError(message);
        } else {
            this._author = val;
        }
    }

    get content() {
        return this._content;
    }

    set content(val) {
        let message = null;
        if (typeof val !== "string" || val.length < 3) {
            message = "Post content must be text with more than 3 symbols!";
        } else {
            val
                .replace(/&/g, "&amp;")
                .replace(/>/g, "&gt;")
                .replace(/</g, "&lt;")
                .replace(/"/g, "&quot;");
        }

        if (message) {
            this.addError(message);
        } else {
            this._content = val;
        }
    }

    get likes() {
        return this._likes;
    }

    set likes(val) {
        // validate
        this._likes = val;
    }

    // creates and adds errors to the errors property
    addError(message) {
        if (!this.errors) {
            this.errors = [];
        }

        this.errors.push(message);
        console.log(this.errors);
        return this;
    }
}