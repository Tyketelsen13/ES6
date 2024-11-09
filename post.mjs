export default class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
    publish() {
        console.log(`You just published: ${this.title}`);
    }
}