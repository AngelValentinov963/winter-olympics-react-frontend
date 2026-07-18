import { useState } from "react"
import { Link } from "react-router-dom"
import Footer from "../components/Footer.jsx"

const initialFormData = {
  username: "",
  email: "",
  password: "",
}

export default function RegisterUserPage() {

  const [formData, setFormData] = useState(initialFormData)
  const [submitted, setSubmitted] = useState(false)


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // await registerUser(formData)

      console.log("Registering user:", formData)

      setSubmitted(true)
      setFormData(initialFormData)

      // After successful Keycloak registration
      window.location.href = "/register-athlete"

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <main className="mx-auto max-w-xl px-6 py-12">

        <h1 className="mb-2 text-3xl font-bold text-foreground">
          Create Account
        </h1>

        <p className="mb-8 text-muted-foreground">
          Register a new user account for the Winter Olympics management system.
        </p>


        {submitted && (
          <div className="mb-6 rounded-lg border border-primary/30 bg-accent px-4 py-3 text-sm font-medium text-accent-foreground">
            Account created successfully.
          </div>
        )}


        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-xl border border-border bg-card p-6 shadow-sm"
        >


          <div>
            <label
              htmlFor="username"
              className="mb-1.5 block text-sm font-medium text-card-foreground"
            >
              Username
            </label>

            <input
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>


          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-card-foreground"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>


          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-medium text-card-foreground"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>


          <div className="flex items-center gap-3 pt-2">

            <button
              type="submit"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Register
            </button>


            <Link
              to="/"
              className="rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-muted"
            >
              Back
            </Link>

          </div>


        </form>

      </main>

      <Footer />
    </>
  )
}