"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Define the organization types
const organizationTypes = [
  { id: "private-limited", label: "Private Limited Company (LTD)" },
  { id: "public-limited", label: "Public Limited Company (PLC)" },
  { id: "sole-proprietorship", label: "Sole Proprietorship" },
  { id: "partnership", label: "Partnership" },
  { id: "limited-liability", label: "Limited Liability Partnership (LLP)" },
  { id: "corporation", label: "Corporation" },
  { id: "cooperative", label: "Cooperative" },
  { id: "non-profit", label: "Non-Profit Organization (NPO)" },
  { id: "social-enterprise", label: "Social Enterprise" },
  { id: "state-owned", label: "State-Owner Enterprise (SOE)" },
  { id: "other", label: "Other..." },
];

// Define the energy sources
const energySources = [
  { value: "coal", label: "Coal" },
  { value: "natural-gas", label: "Natural Gas" },
  { value: "oil", label: "Oil" },
  { value: "nuclear", label: "Nuclear" },
  { value: "solar", label: "Solar" },
  { value: "wind", label: "Wind" },
  { value: "hydro", label: "Hydro" },
  { value: "biomass", label: "Biomass" },
  { value: "geothermal", label: "Geothermal" },
  { value: "mixed", label: "Mixed Sources" },
];

// Define the fuel types
const fuelTypes = [
  { value: "petrol", label: "Petrol/Gasoline" },
  { value: "diesel", label: "Diesel" },
  { value: "electric", label: "Electric" },
  { value: "hybrid", label: "Hybrid" },
  { value: "cng", label: "Compressed Natural Gas (CNG)" },
  { value: "lpg", label: "Liquefied Petroleum Gas (LPG)" },
  { value: "hydrogen", label: "Hydrogen" },
  { value: "biofuel", label: "Biofuel" },
  { value: "mixed", label: "Mixed Fuel Types" },
];

// Define the transportation methods
const transportationMethods = [
  { value: "road", label: "Road Transport" },
  { value: "rail", label: "Rail Transport" },
  { value: "sea", label: "Sea Transport" },
  { value: "air", label: "Air Transport" },
  { value: "pipeline", label: "Pipeline" },
  { value: "mixed", label: "Mixed Methods" },
];

// Removed unused businessSectors variable

// Define the form schema with Zod
const formSchema = z.object({
  // Section 1: Personal/Company Information
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.string().min(5, { message: "Phone number is required" }),
  companyLegalName: z
    .string()
    .min(2, { message: "Company legal name is required" }),
  companyOperatingName: z
    .string()
    .min(2, { message: "Company operating name is required" }),
  website: z
    .string()
    .url({ message: "Please enter a valid URL" })
    .optional()
    .or(z.literal("")),
  headquarterLocation: z
    .string()
    .min(2, { message: "Headquarter location is required" }),
  organizationType: z
    .string()
    .min(1, { message: "Please select an organization type" }),
  businessSector: z.string().min(1, { message: "Business sector is required" }),
  numberOfEmployees: z
    .string()
    .min(1, { message: "Number of employees is required" }),
  businessDescription: z
    .string()
    .max(400, { message: "Description must be 400 words or less" })
    .optional(),

  // Section 2: Carbon Footprint
  carbonFootprintDescription: z.string().optional(),
  electricalConsumption: z
    .string()
    .min(1, { message: "Electrical consumption is required" }),
  energySource: z
    .string()
    .min(1, { message: "Please select an energy source" }),
  renewablePercentage: z.string().optional(),
  companyVehicles: z
    .string()
    .min(1, { message: "Number of vehicles is required" }),
  fuelType: z.string().min(1, { message: "Please select a fuel type" }),
  averageDistance: z
    .string()
    .min(1, { message: "Average distance is required" }),
  flightDistance: z.string().min(1, { message: "Flight distance is required" }),
  trainDistance: z.string().min(1, { message: "Train distance is required" }),

  // Section 3: Supply Chain & Logistics
  supplyChainNumber: z
    .string()
    .min(1, { message: "Supply chain number is required" }),
  goodsVolume: z.string().min(1, { message: "Goods volume is required" }),
  transportationMethod: z
    .string()
    .min(1, { message: "Please select a transportation method" }),

  // Section 4: Finances
  financesDescription: z.string().optional(),
  annualTurnover: z.string().min(1, { message: "Annual turnover is required" }),
  assetsValue: z.string().min(1, { message: "Assets value is required" }),
  // Note: File upload would be handled separately
  financialStatements: z.any().optional(), // For file upload
});

export default function EmissionForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      companyLegalName: "",
      companyOperatingName: "",
      website: "",
      headquarterLocation: "",
      organizationType: "",
      businessSector: "",
      numberOfEmployees: "",
      businessDescription: "",

      carbonFootprintDescription: "",
      electricalConsumption: "",
      energySource: "",
      renewablePercentage: "",
      companyVehicles: "",
      fuelType: "",
      averageDistance: "",
      flightDistance: "",
      trainDistance: "",

      supplyChainNumber: "",
      goodsVolume: "",
      transportationMethod: "",

      financesDescription: "",
      annualTurnover: "",
      assetsValue: "",
      financialStatements: undefined,
    },
    mode: "onChange",
  });

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("Form submitted successfully!");
  }

  // Navigate to the next step
  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await form.trigger(fieldsToValidate as any);
    if (result) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  // Navigate to the previous step
  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  // Get fields that need to be validated for the current step
  const getFieldsForStep = (step: number) => {
    switch (step) {
      case 1:
        return [
          "fullName",
          "email",
          "phoneNumber",
          "companyLegalName",
          "companyOperatingName",
          "website",
          "headquarterLocation",
          "organizationType",
          "businessSector",
          "numberOfEmployees",
          "businessDescription",
        ];
      case 2:
        return [
          "electricalConsumption",
          "energySource",
          "companyVehicles",
          "fuelType",
          "averageDistance",
          "flightDistance",
          "trainDistance",
        ];
      case 3:
        return ["supplyChainNumber", "goodsVolume", "transportationMethod"];
      case 4:
        return ["annualTurnover", "assetsValue"];
      default:
        return [];
    }
  };

  return (
    <div className="container mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Emission Form</h1>
        <p className="text-sm text-gray-600">
          This is a required form to help us track your emissions and give you
          personalized advice.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="rounded-t-md bg-primary px-4 py-2 text-lg font-semibold text-white">
          Section {currentStep} of {totalSteps}
        </h2>
      </div>

      <Card>
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Section 1: Personal/Company Information */}
              <div className={cn(currentStep === 1 ? "block" : "hidden")}>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            className="py-6"
                            placeholder="Enter your name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input
                            className="py-6"
                            placeholder="Enter your email"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            className="py-6"
                            placeholder="Enter your phone number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="companyLegalName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Legal Name</FormLabel>
                        <FormControl>
                          <Input
                            className="py-6"
                            placeholder="Enter company legal name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="companyOperatingName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Operating Name</FormLabel>
                        <FormControl>
                          <Input
                            className="py-6"
                            placeholder="Enter company operating name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website</FormLabel>
                        <FormControl>
                          <Input
                            className="py-6"
                            placeholder="URL"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="headquarterLocation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Headquarter Location</FormLabel>
                        <FormControl>
                          <Input
                            className="py-6"
                            placeholder="Enter headquarter location"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="organizationType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type of Organization</FormLabel>
                        <div className="grid grid-cols-1 space-y-3 md:grid-cols-4">
                          {organizationTypes.map((type) => (
                            <div
                              key={type.id}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                id={type.id}
                                checked={field.value === type.id}
                                onCheckedChange={() => {
                                  form.setValue("organizationType", type.id);
                                }}
                              />
                              <label
                                htmlFor={type.id}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {type.label}
                              </label>
                            </div>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="businessSector"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Sector</FormLabel>
                        <FormControl>
                          <Input
                            className="py-6"
                            placeholder="Choose type"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="numberOfEmployees"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Employees</FormLabel>
                        <FormControl>
                          <Input
                            className="py-6"
                            placeholder="Enter number of employees"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="businessDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Business Description (Max 400 Words)
                        </FormLabel>
                        <FormControl>
                          <Textarea placeholder="Write here..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Section 2: Carbon Footprint */}
              <div className={cn(currentStep === 2 ? "block" : "hidden")}>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="carbonFootprintDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description (Optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Description..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="electricalConsumption"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Total electrical consumption (kWh) annually
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="py-6"
                            placeholder="Enter total"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="energySource"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Energy sources</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {energySources.map((source) => (
                              <SelectItem
                                key={source.value}
                                value={source.value}
                              >
                                {source.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="renewablePercentage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Percentage of Energy Renewable (If Applicable)
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="py-6"
                            placeholder="Percentage"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="companyVehicles"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Company Owned Vehicles</FormLabel>
                        <FormControl>
                          <Input
                            className="py-6"
                            placeholder="Enter Number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="fuelType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type of Fuel used in Vehicles</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {fuelTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="averageDistance"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Average Distance Travelled Per Vehicle Annually
                        </FormLabel>
                        <FormDescription>
                          Specify whether you are using miles or kilometers in
                          your answer
                        </FormDescription>
                        <FormControl>
                          <Input placeholder="Enter Number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="flightDistance"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Annual Business Flight Distance</FormLabel>
                        <FormDescription>
                          Specify whether you are using miles or kilometers in
                          your answer
                        </FormDescription>
                        <FormControl>
                          <Input placeholder="Enter Number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="trainDistance"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Annual Business Train Distance</FormLabel>
                        <FormDescription>
                          Specify whether you are using miles or kilometers in
                          your answer
                        </FormDescription>
                        <FormControl>
                          <Input
                            className="py-6"
                            placeholder="Enter Number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Section 3: Supply Chain & Logistics */}
              <div className={cn(currentStep === 3 ? "block" : "hidden")}>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="supplyChainNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Supply Chain & Logistics</FormLabel>
                        <FormControl>
                          <Input
                            className="py-6"
                            placeholder="Enter Number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="goodsVolume"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Volume of Goods Transportation Method (Tons)
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="py-6"
                            placeholder="Enter Number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="transportationMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Primary Transportation Method</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {transportationMethods.map((method) => (
                              <SelectItem
                                key={method.value}
                                value={method.value}
                              >
                                {method.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Section 4: Finances */}
              <div className={cn(currentStep === 4 ? "block" : "hidden")}>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="financesDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description (Optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Description..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="annualTurnover"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Total Annual Turnover in the Last Financial Year
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="py-6"
                            placeholder="Total amount"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="assetsValue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Total Value of Assets at End of the Last Financial
                          Year
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="py-6"
                            placeholder="Total value"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="financialStatements"
                    render={() => (
                      <FormItem>
                        <FormLabel>Financial Statements</FormLabel>
                        <FormDescription>
                          Income Statement, Balance Sheet, Cash Flow Statement
                        </FormDescription>
                        <div className="mt-2 flex items-center gap-4">
                          <Button
                            type="button"
                            variant="outline"
                            className="h-10"
                          >
                            Add File
                          </Button>
                          <span className="text-sm text-gray-500">
                            No file selected
                          </span>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>

                {currentStep < totalSteps ? (
                  <Button type="button" onClick={nextStep}>
                    Next
                  </Button>
                ) : (
                  <Button type="submit">Submit</Button>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
