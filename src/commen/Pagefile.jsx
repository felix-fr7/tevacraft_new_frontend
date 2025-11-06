import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';

// --- Data Arrays ---
const languages = [
    "Afrikaans", "Albanian", "Arabic", "Armenian", "Bengali", "Bosnian", "Bulgarian",
    "Catalan", "Chinese (Simplified)", "Chinese (Traditional)", "Croatian", "Czech",
    "Danish", "Dutch", "English", "Estonian", "Finnish", "French", "German", "Greek",
    "Gujarati", "Hebrew", "Hindi", "Hungarian", "Indonesian", "Italian", "Japanese",
    "Kannada", "Kazakh", "Korean", "Latvian", "Lithuanian", "Malay", "Malayalam",
    "Marathi", "Mongolian", "Nepali", "Norwegian", "Pashto", "Persian", "Polish",
    "Portuguese", "Punjabi", "Romanian", "Russian", "Serbian", "Sinhala", "Slovak",
    "Slovenian", "Spanish", "Swahili", "Swedish", "Tamil", "Telugu", "Thai", "Turkish",
    "Ukrainian", "Urdu", "Uzbek", "Vietnamese"
];

const domains = ["Technical", "Educational", "Medical", "Legal", "Finance", "IT"];
const expertise = ["Translation", "Proofreading", "Editing", "Localization"];

// --- Main Component ---
const App = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState({ text: "", type: "" }); // type: 'success' or 'error'

    // The backend endpoint defined in index.js
    const API_ENDPOINT = "https://api.tevacraft.in/api/submit-enrollment";

    const onSubmit = async (data) => {
        setIsLoading(true);
        setStatusMessage({ text: "", type: "" });

        try {
            // 1. Create a FormData object to handle file and other fields
            const formData = new FormData();

            // Append all non-file fields
            for (const key in data) {
                if (key === 'resume') {
                    // Skip file for now
                    continue;
                }
                
                // Handle multi-select fields (checkbox arrays) by joining them into a comma-separated string
                if (Array.isArray(data[key])) {
                    formData.append(key, data[key].join(','));
                } else {
                    formData.append(key, data[key]);
                }
            }

            // Append the file
            if (data.resume && data.resume[0]) {
                formData.append('resume', data.resume[0]);
            } else {
                // This path should ideally be caught by the required validation in useForm, but it's kept for robustness.
                throw new Error("Resume file is missing.");
            }

            // 2. Send data to backend using axios
            const response = await axios.post(API_ENDPOINT, formData, {
                headers: {
                    // Axios automatically sets Content-Type to multipart/form-data boundary
                    // when passing a FormData object. We don't set it manually here.
                },
            });

            // 3. Handle success
            setStatusMessage({ 
                text: response.data.message || "Enrollment submitted successfully!", 
                type: 'success' 
            });
            reset(); // Clear the form on successful submission

        } catch (error) {
            console.error("Submission Error:", error);
            const message = error.response 
                ? error.response.data.message || 'Server error. Please try again.'
                : error.message || 'Network error.';
            
            // 4. Handle error
            setStatusMessage({ 
                text: `Error: ${message}`, 
                type: 'error' 
            });
        } finally {
            setIsLoading(false);
            // Clear message after 5 seconds
            setTimeout(() => {
                setStatusMessage({ text: "", type: "" });
            }, 5000);
        }
    };

    return (
        <div className="mainform">
            {/* =======================================================
             INLINE CSS FOR PAGEFILE COMPONENT
             =======================================================
             */}
            <style>{`
                /* ======================================================= */
                /* Base Variables & Structure - TEAL COLOR SCHEME */
                /* ======================================================= */
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
                
                :root {
                    --primary-color: #00BCD4; /* Cyan/Teal Primary Color */
                    --primary-dark: #0097A7; /* Darker Teal for Hover */
                    --dark-text: #333;
                    --light-text: #f9f9f9;
                    --error-red: #e74c3c;
                    --success-green: #4CAF50;
                    --input-border: #ccc;
                    --focus-ring: rgba(0, 188, 212, 0.4); 
                    --bg-light: #f4f7f6;
                    --form-max-width: 600px;
                }
                
                /* --- Main Container --- */
                .mainform {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 40px 20px;
                    background-color: var(--bg-light);
                    min-height: 100vh;
                    font-family: 'Inter', sans-serif;
                }
                
                .powerheading {
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-bottom: 30px;
                    color: var(--primary-dark);
                    text-align: center;
                }

                .status-container {
                    margin-bottom: 20px;
                    min-height: 20px; /* Prevent CLS */
                    width: 100%;
                    max-width: var(--form-max-width);
                }

                .status-message {
                    font-weight: 600;
                    text-align: center;
                    padding: 10px;
                    border-radius: 6px;
                    transition: opacity 0.3s;
                }

                .status-success {
                    color: var(--success-green);
                    border: 1px solid var(--success-green);
                    background-color: #e8f5e9;
                }

                .status-error {
                    color: var(--error-red);
                    border: 1px solid var(--error-red);
                    background-color: #ffebee;
                }
                
                /* --- Form Container: FORCED SINGLE COLUMN --- */
                .form {
                    width: 100%;
                    max-width: var(--form-max-width);
                    background: white;
                    padding: 30px;
                    border-radius: 12px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    display: grid;
                    grid-template-columns: 1fr; 
                    gap: 15px;
                }
                
                /* --- Input/Select/Label Styles --- */
                .form input:not([type="checkbox"]), 
                .form select, 
                .form button {
                    width: 100%;
                    padding: 12px;
                    border: 1px solid var(--input-border);
                    border-radius: 8px;
                    font-size: 1rem;
                    color: var(--dark-text);
                    transition: border-color 0.3s, box-shadow 0.3s;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                }
                
                .form input:not([type="checkbox"]):focus, 
                .form select:focus {
                    border-color: var(--primary-color);
                    box-shadow: 0 0 0 2px var(--focus-ring);
                    outline: none;
                }
                
                .form label:not(.checkbox-item) {
                    font-weight: 600;
                    margin-top: 10px;
                    margin-bottom: 5px;
                    display: block;
                    grid-column: span 1; 
                    color: var(--dark-text);
                }
                
                /* --- Checkbox Groups --- */
                .checkbox-group {
                    border: 1px solid var(--input-border);
                    padding: 10px;
                    border-radius: 8px;
                    background-color: #fff;
                    max-height: 200px;
                    overflow-y: auto;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }
                
                .checkbox-item {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    font-weight: normal;
                    padding: 5px 0;
                    width: calc(33.33% - 10px); 
                    margin: 0;
                }
                
                .checkbox-item input[type="checkbox"] {
                    margin-right: 8px;
                    transform: scale(1.1);
                    accent-color: var(--primary-color);
                }
                
                /* --- Submit Button --- */
                .form button[type="submit"] {
                    background-color: var(--primary-color);
                    color: var(--light-text);
                    font-weight: 700;
                    cursor: pointer;
                    margin-top: 20px;
                    transition: background-color 0.3s, transform 0.2s, opacity 0.3s;
                }
                
                .form button[type="submit"]:hover:not(:disabled) {
                    background-color: var(--primary-dark);
                    transform: translateY(-1px);
                }
                
                .form button[type="submit"]:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                /* --- Error Messages --- */
                .error {
                    color: var(--error-red);
                    font-size: 0.9rem;
                    margin-top: -10px;
                    margin-bottom: 5px;
                    font-weight: 500;
                }
                
                /* ======================================================= */
                /* ENHANCED MEDIA QUERIES (Responsiveness) */
                /* ======================================================= */
                
                @media (max-width: 768px) {
                    .checkbox-item {
                        width: calc(50% - 5px); 
                    }
                }
                
                @media (max-width: 480px) {
                    .mainform {
                        padding: 20px 10px;
                    }
                    .form {
                        padding: 15px;
                    }
                    .powerheading {
                        font-size: 1.75rem;
                        margin-bottom: 20px;
                    }
                    .checkbox-item {
                        width: 100%; 
                    }
                }
            `}</style>
            
            <h2 className="powerheading">Enrolment Form</h2>
            
            <div className="status-container">
                {statusMessage.text && (
                    <div 
                        className={`status-message status-${statusMessage.type}`}
                        role="status"
                    >
                        {statusMessage.text}
                    </div>
                )}
            </div>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                
                {/* Email */}
                <input 
                    placeholder="Enter your email" 
                    type="email" 
                    disabled={isLoading}
                    {...register("email", { 
                        required: "Email is required", 
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email address"
                        }
                    })} 
                />
                {errors.email && <span className="error">{errors.email.message}</span>}

                {/* First Name */}
                <input 
                    placeholder="First Name" 
                    type="text" 
                    disabled={isLoading}
                    {...register("firstname", { required: "First Name is required" })} 
                />
                {errors.firstname && <span className="error">{errors.firstname.message}</span>}

                {/* Last Name */}
                <input 
                    placeholder="Last Name" 
                    type="text" 
                    disabled={isLoading}
                    {...register("lastname", { required: "Last Name is required" })} 
                />
                {errors.lastname && <span className="error">{errors.lastname.message}</span>}

                {/* Gender */}
                <select {...register("gender", { required: "Gender is required" })} disabled={isLoading}>
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
                {errors.gender && <span className="error">{errors.gender.message}</span>}

                {/* DOB */}
                <input 
                    type="date" 
                    disabled={isLoading}
                    {...register("dob", { required: "Date of Birth is required" })} 
                />
                {errors.dob && <span className="error">{errors.dob.message}</span>}

                {/* Phone */}
                <input 
                    type="tel" 
                    placeholder="Phone" 
                    disabled={isLoading}
                    {...register("phone", { 
                        required: "Phone number is required",
                        pattern: {
                            value: /^\+?[0-9]{10,14}$/,
                            message: "Invalid phone number format"
                        }
                    })} 
                />
                {errors.phone && <span className="error">{errors.phone.message}</span>}

                {/* Education */}
                <select {...register("education", { required: "Education is required" })} disabled={isLoading}>
                    <option value="">Select Education</option>
                    <option value="High School">High School</option>
                    <option value="Bachelor's">Bachelor's</option>
                    <option value="Master's">Master's</option>
                    <option value="PhD">PhD</option>
                </select>
                {errors.education && <span className="error">{errors.education.message}</span>}

                {/* Experience */}
                <label>Experience (in years) *</label>
                <input 
                    type="number" 
                    placeholder="Experience in Years" 
                    disabled={isLoading}
                    {...register("experience", { 
                        required: "Experience is required",
                        min: { value: 0, message: "Experience cannot be negative" }
                    })} 
                />
                {errors.experience && <span className="error">{errors.experience.message}</span>}

                {/* Source Language */}
                <label>Source Language(s) *</label>
                <div className="checkbox-group scrollbar">
                    {languages.map((lang) => (
                        <label key={lang} className="checkbox-item">
                            <input 
                                type="checkbox" 
                                value={lang} 
                                disabled={isLoading}
                                {...register("sourcelanguage", { required: "Select at least one Source Language" })} 
                            /> {lang}
                        </label>
                    ))}
                </div>
                {errors.sourcelanguage && <span className="error">{errors.sourcelanguage.message}</span>}

                {/* Target Language */}
                <label>Target Language(s) *</label>
                <div className="checkbox-group scrollbar">
                    {languages.map((lang) => (
                        <label key={lang} className="checkbox-item">
                            <input 
                                type="checkbox" 
                                value={lang} 
                                disabled={isLoading}
                                {...register("targetlanguage", { required: "Select at least one Target Language" })} 
                            /> {lang}
                        </label>
                    ))}
                </div>
                {errors.targetlanguage && <span className="error">{errors.targetlanguage.message}</span>}

                {/* Domain */}
                <label>Domain *</label>
                <div className="checkbox-group">
                    {domains.map((d) => (
                        <label key={d} className="checkbox-item">
                            <input 
                                type="checkbox" 
                                value={d} 
                                disabled={isLoading}
                                {...register("domain", { required: "Select at least one Domain" })} 
                            /> {d}
                        </label>
                    ))}
                </div>
                {errors.domain && <span className="error">{errors.domain.message}</span>}

                {/* Expertise */}
                <label>Expertise *</label>
                <div className="checkbox-group">
                    {expertise.map((e) => (
                        <label key={e} className="checkbox-item">
                            <input 
                                type="checkbox" 
                                value={e} 
                                disabled={isLoading}
                                {...register("expertise", { required: "Select at least one Expertise" })} 
                            /> {e}
                        </label>
                    ))}
                </div>
                {errors.expertise && <span className="error">{errors.expertise.message}</span>}


                {/* Resume Upload */}
                <label>Upload Resume (Max 15MB) *</label>
                <input 
                    type="file" 
                    accept=".pdf,.doc,.docx" 
                    disabled={isLoading}
                    {...register("resume", { 
                        required: "Resume file is required",
                        validate: {
                            // Client-side 15MB file size validation
                            maxSize: (fileList) => {
                                const file = fileList[0];
                                const MAX_SIZE_BYTES = 15 * 1024 * 1024; // 15 MB
                                
                                if (file && file.size > MAX_SIZE_BYTES) {
                                    const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
                                    return `File size must be less than 15MB. Your file is ${fileSizeMB}MB.`;
                                }
                                return true;
                            }
                        }
                    })} 
                />
                {errors.resume && <span className="error">{errors.resume.message}</span>}

                {/* Submit Button */}
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Submitting..." : "Submit Enrolment"}
                </button>
            </form>
        </div>
    );
};

export default App;