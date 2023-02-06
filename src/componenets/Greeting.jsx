export default function Greeting ({name, lastname, emoji} ) {
    return <h2> Hello There! {emoji || "✨"} {name} {lastname}!</h2>
}