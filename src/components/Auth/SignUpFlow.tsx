"use client"

import React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useMutation } from "@tanstack/react-query"
import PersonalInfoForm from "./Personal-info-form"
import BusinessInfoForm from "./business-info-fomr"

import { toast } from "sonner"

// Types
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

interface BusinessInfoData {
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
}

// API functions using TanStack Query
const registerUserFn = async (userData: UserRegistrationData) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/user/register`, {
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
}

const createCompanyFn = async (companyData: CompanyData) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/company/create`, {
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
}

export default function SignUpFlow() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
  })

  // User registration mutation
  const userMutation = useMutation({
    mutationFn: registerUserFn,
    onSuccess: (data) => {
      // This will be called when user registration is successful
      // We'll handle the company creation in the onSuccess callback
      if (data && data.id) {
        if (businessData.current) {
          const {
            businessName = "",
            identificationNumber = "",
            businessLicenseNumber = "",
            businessAddress = "",
            businessEntity = "",
            businessDuration = "",
            industryType = "",
            employeeNumber = 0,
            primaryProducts = [],
            annualRevenue = 0,
          } = businessData.current;

          companyMutation.mutate({
            businessName,
            identificationNumber,
            businessLicenseNumber,
            businessAddress,
            businessEntity,
            businessDuration,
            industryType,
            employeeNumber,
            primaryProducts,
            annualRevenue,
            userId: data.id,
          });
        }
      }
    },
    onError: (error) => {
      toast.error(`Registration failed: ${error.message}`)
    },
  })

  // Company creation mutation
  const businessData = React.useRef<BusinessInfoData | null>(null)
  const companyMutation = useMutation({
    mutationFn: createCompanyFn,
    onSuccess: () => {
      toast.success("Registration completed successfully!")

      // Redirect to subscription page after a short delay
      setTimeout(() => {
        router.push("/subscription")
      }, 1500)
    },
    onError: (error) => {
      toast.error(`Company creation failed: ${error.message}`)
    },
  })

  const handlePersonalInfoSubmit = (data: typeof personalInfo) => {
    setPersonalInfo(data)
    setStep(2)
  }

  const handleBusinessInfoSubmit = async (data: BusinessInfoData) => {
    businessData.current = data

    // Start the registration process
    userMutation.mutate({
      ...personalInfo,
      role: "user",
    })
  }

  const handleBackToStep1 = () => {
    setStep(1)
  }

  // Determine if we're in a submitting state
  const isSubmitting = userMutation.isPending || companyMutation.isPending

  // Determine if there's an error
  const error = userMutation.error?.message || companyMutation.error?.message || ""

  return (
    <div className="w-full mx-auto max-w-full">
      {step === 1 ? (
        <PersonalInfoForm onSubmit={handlePersonalInfoSubmit} />
      ) : (
        <BusinessInfoForm onSubmit={handleBusinessInfoSubmit} isSubmitting={isSubmitting} onBack={handleBackToStep1} />
      )}

      {error && <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">{error}</div>}
    </div>
  )
}

