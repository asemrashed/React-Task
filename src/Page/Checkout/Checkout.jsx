import React, { useContext, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { OrderContext } from "../../ContextAPIs/OrderProvider";
import CartComponent from "../../Shared/CartComponent";
import { useNavigate  } from "react-router-dom";

const Checkout = () => {
    const { cart, qty, setCheckoutData } = useContext(OrderContext);
    const { photo, course_name, discount_price, regular_price } = cart[0] || {};
    const [name, setName] = useState("");
    const [formNo, setFormNo] = useState("");
    const [father_name, setFatherName] = useState("");
    const [father_phone_no, setFatherPhoneNo] = useState("");
    const [school_collage_name, setSchoolCollageName] = useState("");
    const [job_title, setJobTitle] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [present_address, setPresentAddress] = useState("");
    const [permanent_address, setPermanentAddress] = useState("");
    const [nid_no, setNid] = useState("");
    const [phone_no, setPhoneNo] = useState("");
    const [local_guardian_name, setGuardianName] = useState("");
    const [date_of_birth, setDateOfBirth] = useState("");
    const [blood_group, setBloodGroup] = useState("");
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const formData = {
        name,
        formNo,
        father_name,
        father_phone_no,
        school_collage_name,
        job_title,
        email,
        gender,
        present_address,
        permanent_address,
        nid_no,
        phone_no,
        local_guardian_name,
        date_of_birth,
        blood_group,
        course_fee: discount_price,
        discount_course_fee: discount_price,
        total_course_fee: discount_price * qty,
        sub_total_course_fee: discount_price * qty,
        image
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setCheckoutData(formData)
        navigate("/order-details")
    }

    return (
        <div className="  mt-5 border mx-2">
            <div className="bg-[#6f42c1] text-white p-6 text-center mb-5">
                <h2 className='text-5xl font-bold'>Trainee Admission Form</h2>
            </div>
            <form className="bg-white shadow-md rounded-lg p-6">
                {/* Trainee Information Section */}
                <div className="form-section">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="fullName" className="block font-semibold text-base mb-2">Full Name:</label>
                            <input
                                type="text"
                                id="fullName"
                                className="w-full border border-gray-300 rounded-md p-2"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />  
                        </div>
                        <div>
                            <label htmlFor="formNo" className="block font-semibold text-base mb-2">Form no:</label>
                            <input
                                type="text"
                                id="formNo"
                                className="w-full border border-gray-300 rounded-md p-2"
                                value={formNo}
                                onChange={(e) => setFormNo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="parentName" className="block font-semibold text-base mb-2">Father/Mother Name:</label>
                            <input
                                type="text"
                                id="parentName"
                                className="w-full border border-gray-300 rounded-md p-2"
                                value={father_name}
                                onChange={(e) => setFatherName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="fatherPhoneNo" className="block font-semibold text-base mb-2">Father/Mother Phone No:</label>
                            <input
                                type="text"
                                id="fatherPhoneNo"
                                className="w-full border border-gray-300 rounded-md p-2"
                                value={father_phone_no}
                                onChange={(e) => setFatherPhoneNo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="school" className="block font-semibold text-base mb-2">School/College:</label>
                            <input
                                type="text"
                                id="school"
                                className="w-full border border-gray-300 rounded-md p-2"
                                value={school_collage_name}
                                onChange={(e) => setSchoolCollageName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="jobInfo" className="block font-semibold text-base mb-2">Job Information:</label>
                            <input
                                type="text"
                                id="jobInfo"
                                className="w-full border border-gray-300 rounded-md p-2"
                                value={job_title}
                                onChange={(e) => setJobTitle(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="email" className="block font-semibold text-base mb-2">Email:</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border border-gray-300 rounded-md p-2"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="gender" className="block font-semibold text-base mb-2">Gender:</label>
                            <select
                                id="gender"
                                className="w-full border border-gray-300 rounded-md p-2"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <option value="" disabled selected>Select Gender</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                <option value="Others">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="presentAddress" className="block font-semibold text-base mb-2">Present Address:</label>
                            <textarea
                                id="presentAddress"
                                className="w-full border border-gray-300 rounded-md p-2"
                                value={present_address}
                                onChange={(e) => setPresentAddress(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="permanentAddress" className="block font-semibold text-base mb-2">Permanent Address:</label>
                            <textarea
                                id="permanentAddress"
                                className="w-full border border-gray-300 rounded-md p-2"
                                value={permanent_address}
                                onChange={(e) => setPermanentAddress(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="nid" className="block font-semibold text-base mb-2">NID Number:</label>
                            <input
                                type="text"
                                id="nid"
                                className="w-full border border-gray-300 rounded-md p-2"
                                value={nid_no}
                                onChange={(e) => setNid(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="mobile" className="block font-semibold text-base mb-2">Mobile No:</label>
                            <input
                                type="text"
                                id="mobile"
                                className="w-full border border-gray-300 rounded-md p-2"
                                value={phone_no}
                                onChange={(e) => setPhoneNo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="guardianName" className="block font-semibold text-base mb-2">Local Guardian’s Name:</label>
                            <input
                                type="text"
                                id="guardianName"
                                className="w-full border border-gray-300 rounded-md p-2"
                                value={local_guardian_name}
                                onChange={(e) => setGuardianName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="dob" className="block font-semibold text-base mb-2">Date of Birth:</label>
                            <input
                                type="date"
                                id="dob"
                                className="w-full border border-gray-300 rounded-md p-2"
                                value={date_of_birth}
                                onChange={(e) => setDateOfBirth(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="bloodGroup" className="block font-semibold text-base mb-2">Blood Group:</label>
                            <select
                                id="bloodGroup"
                                className="w-full border border-gray-300 rounded-md p-2"
                                value={blood_group}
                                onChange={(e) => setBloodGroup(e.target.value)}
                            >
                                <option value="" disabled selected>Select Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4">
                        <label className="block font-semibold text-base mb-2">Upload Image:</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                </div>

                <div className="m-mt_16px">


                    <div className="pt-p_16px">
                        <div className="lg:flex items-start gap-3">
                            <CartComponent/>
                            <div className="lg:w-[41%] bg-white border-2 ">
                                <div className="px-[30px]">
                                    <h2 className="font-bold text-start text-text_medium pt-2 pb-1 border-b-2 border-black">
                                        Cart Summary
                                    </h2>
                                    <div className="py-3 flex justify-between border-b border-gray-300">
                                        <p className="text-black font-bold">Total Price</p>
                                        <p className="text-black font-bold">

                                        </p>
                                    </div>

                                    <button
                                        onClick={handleSubmit}
                                        className="font-medium text-black mb-2 border-2 hover:bg-[#D2C5A2] duration-300 py-2 px-4  block text-center mx-auto w-full"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

           
        </div>
    );
};

export default Checkout;
