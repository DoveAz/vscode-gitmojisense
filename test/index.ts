import { EmojiProvider } from "../src/emoji";
import { gitmojis } from "gitmojis";
console.log("🚀 ~ gitmojis:", gitmojis);

const emojiProvider = new EmojiProvider();

// console.log(emojiProvider.emojiMap);

const list = gitmojis.slice();
const safety = list.find((g) => g.name === "safety-vest");
const clown = list.find((g) => g.name === "clown-face");
if (safety && clown) {
    list.splice(list.indexOf(safety), 1);
    list.splice(list.indexOf(clown), 1);
    list.push(safety);
    list.push(clown);
}
console.log("🚀 ~ list:", list);
