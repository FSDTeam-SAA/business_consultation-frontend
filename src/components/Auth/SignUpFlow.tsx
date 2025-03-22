"use client"

import { useState } from "react"
import BusinessInfoForm from "./business-info-fomr"
import PersonalInfoForm from "./Personal-info-form"
// import { toast } from 'react-toastify';


// API functions for user registration and company creation

interface UserRegistrationData {
    fullName: string
    phoneNumber: string
    email: string
    password: string
    role: string
  }
  
  interface CompanyData {
    businessName: string
    identificationNumber: string
    businessLicenseNumber: string
    businessAddress: string
    businessEntity: string
    businessDuration: string
    industryType: string
    employeeNumber: number
    primaryProducts: string[]
    annualRevenue: number
    userId: string
  }
  
  export async function registerUser(userData: UserRegistrationData) {
    try {
      const response = await fetch("https://okasmacys1.onrender.com/api/auth/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
  
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to register user")
      }
  
      return await response.json()
    } catch (error) {
      console.error("Error registering user:", error)
      throw error
    }
  }
  
  export async function createCompany(companyData: CompanyData) {
    try {
      const response = await fetch("https://okasmacys1.onrender.com/api/company/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(companyData),
      })
  
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to create company")
      }
  
      return await response.json()
    } catch (error) {
      console.error("Error creating company:", error)
      throw error
    }
  }
  
  

export default function SignUpFlow() {
  const [step, setStep] = useState(1)
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
  })
  const [userId, setUserId] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handlePersonalInfoSubmit = (data: typeof personalInfo) => {
    setPersonalInfo(data)
    setStep(2)
  }

  const handleBusinessInfoSubmit = async (businessData: any) => {
    setIsSubmitting(true)
    setError("")

    try {
      // First register the user
      const userResponse = await registerUser({
        ...personalInfo,
        role: "user",
      })

      if (!userResponse.id) {
        throw new Error("Failed to register user")
      }

      setUserId(userResponse.id)

      // Then create the company with the userId from the first response
      const companyResponse = await createCompany({
        ...businessData,
        userId: userResponse.id,
      })

      // Handle successful registration
      
      alert("Registration completed successfully!")
    // toast.success("Registration completed successfully!")
    } catch (err) {
      console.error("Registration error:", err)
      setError("An error occurred during registration. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackToStep1 = () => {
    setStep(1)
  }

  return (
    <div className="w-full  mx-auto max-w-full">
      {step === 1 ? (
        <PersonalInfoForm onSubmit={handlePersonalInfoSubmit} />
      ) : (
       
         <BusinessInfoForm onSubmit={handleBusinessInfoSubmit} isSubmitting={isSubmitting} onBack={handleBackToStep1}/>
       
      )}

      {error && <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">{error}</div>}
    </div>
  )
}

