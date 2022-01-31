export default function CreateAccount() {
  return <form>
      <h1>Create an account</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="password" placeholder="password" />
      <input type="text" name="password" placeholder="repeat password" />
      <button>Create</button>
  </form>;
}
