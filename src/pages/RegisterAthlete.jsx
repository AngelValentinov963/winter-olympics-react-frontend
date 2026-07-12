import { useState } from "react"
import { Link } from "react-router-dom"
import Footer from "../components/Footer.jsx"
import { registerAthlete } from "../api/athleteApi"

const initialFormData = {
  firstName: "",
  lastName: "",
  country: "",
  gender: "MALE",
  birthDate: "",
}

export default function RegisterAthlete() {
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

    const athlete = {
      ...formData,
      birthDate: formData.birthDate || null,
    }

    console.log("Sending:", athlete)

    try {
      await registerAthlete(athlete)

      alert("Successful registration!")

      setSubmitted(true)
      setFormData(initialFormData)

    } catch (error) {
      alert("Error with registration!")

      console.log("STATUS:", error.response?.status)
      console.log("DATA:", JSON.stringify(error.response?.data, null, 2))
      console.log("HEADERS:", error.response?.headers)
    }
  }


  return (
    <>
      <main className="mx-auto max-w-xl px-6 py-12">

        <h1 className="mb-2 text-3xl font-bold text-foreground">
          Register Athlete
        </h1>

        <p className="mb-8 text-muted-foreground">
          Add a new athlete to the Winter Olympics management system.
        </p>


        {submitted && (
          <div className="mb-6 rounded-lg border border-primary/30 bg-accent px-4 py-3 text-sm font-medium text-accent-foreground">
            Athlete registered successfully.
          </div>
        )}


        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-xl border border-border bg-card p-6 shadow-sm"
        >

          <div>
            <label
              htmlFor="firstName"
              className="mb-1.5 block text-sm font-medium text-card-foreground"
            >
              First Name
            </label>

            <input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>


          <div>
            <label
              htmlFor="lastName"
              className="mb-1.5 block text-sm font-medium text-card-foreground"
            >
              Last Name
            </label>

            <input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>


          <div>
            <label
              htmlFor="country"
              className="mb-1.5 block text-sm font-medium text-card-foreground"
            >
              Country
            </label>

            <input
              id="country"
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>


          <div>
            <label
              htmlFor="gender"
              className="mb-1.5 block text-sm font-medium text-card-foreground"
            >
              Gender
            </label>

            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
            >
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
          </div>


          <div>
            <label
              htmlFor="birthDate"
              className="mb-1.5 block text-sm font-medium text-card-foreground"
            >
              Birth Date
            </label>

            <input
              id="birthDate"
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              max={new Date().toISOString().split("T")[0]}
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