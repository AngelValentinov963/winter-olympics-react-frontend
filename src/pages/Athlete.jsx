import { useState } from "react";
import { Link } from "react-router-dom";
import { registerAthlete } from "../api/athleteApi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Athlete() {

const initialFormData = {
firstName: "",
lastName: "",
country: "",
gender: "MALE",
birthDate: "",
};

const [formData, setFormData] = useState(initialFormData);

const handleChange = (e) => {
    setFormData({
    ...formData,
    [e.target.name]: e.target.value,
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();

    const athlete = {
    ...formData,
    birthDate: formData.birthDate || null
};

console.log("Sending:", athlete);

try {
    await registerAthlete(athlete);

    alert("Successful registration!");

    setFormData(initialFormData);

} catch (error) {
    alert("Error with registration!");

    console.log("STATUS:", error.response?.status);
    console.log("DATA:", JSON.stringify(error.response?.data, null, 2));
    console.log("HEADERS:", error.response?.headers);
    }
};

return (
<div className="container mt-4">

    <h2>Register Athlete</h2>

    <form onSubmit={handleSubmit}>

        <div className="mb-3">
            <input type="text" name="firstName" className="form-control" placeholder="First Name"
                value={formData.firstName} onChange={handleChange} required />
        </div>


        <div className="mb-3">
            <input type="text" name="lastName" className="form-control" placeholder="Last Name"
                value={formData.lastName} onChange={handleChange} required />
        </div>


        <div className="mb-3">
            <input type="text" name="country" className="form-control" placeholder="Country" value={formData.country}
                onChange={handleChange} required />
        </div>


        <div className="mb-3">
            <select name="gender" className="form-select" value={formData.gender} onChange={handleChange}>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
            </select>
        </div>


        <div className="mb-3">

            <DatePicker selected={ formData.birthDate ? new Date(formData.birthDate) : null } onChange={(date)=>
                setFormData({
                ...formData,
                birthDate: date
                ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2,
                "0")}-${String(date.getDate()).padStart(2, "0")}`
                : "",
                })
                }

                dateFormat="yyyy-MM-dd"
                className="form-control"
                placeholderText="Select birth date"

                showYearDropdown
                showMonthDropdown
                dropdownMode="select"
                scrollableYearDropdown
                yearDropdownItemNumber={100}

                maxDate={new Date()}
                />

        </div>


        <button type="submit" className="btn btn-primary">
            Register
        </button>


        <Link to="/" className="btn btn-secondary ms-2">Back</Link>

    </form>

</div>
);
}

export default Athlete;