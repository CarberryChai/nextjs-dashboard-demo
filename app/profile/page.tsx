export default function Page() {
  async function login(formData: FormData) {
    'use server'
    console.log(formData)
  }
  return (
    <form action={login}>
      <label>
        Email
        <input type='email' name='email' />
      </label>
      <br></br>
      <label>
        Password
        <input type='password' name='password' />
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}
