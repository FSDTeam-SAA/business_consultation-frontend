"use client";
import { MapPin, Factory, Mail, Phone } from "lucide-react";

import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Chart, ChartLegend, ChartLegendItem } from "@/components/ui/chart";
import { CustomProgress } from "./custom-progress";
import React, { useEffect } from "react";

interface EnergySource {
  source: string;
  value: number;
}
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";

// Energy Sources Data
const energySourcesData = [
  { name: "Traditional Grid", value: 20, color: "#10b981" },
  { name: "Geothermal", value: 10, color: "#ec4899" },
  { name: "Solar", value: 10, color: "#3b82f6" },
  { name: "Biomass", value: 10, color: "#22c55e" },
  { name: "Wind", value: 10, color: "#8b5cf6" },
  { name: "Battery Storage System", value: 10, color: "#f97316" },
  { name: "Hydroelectricity", value: 10, color: "#6366f1" },
  { name: "Others", value: 10, color: "#000000" },
];

// Fuel Types Data
const fuelTypesData = [
  { name: "Petrol", value: 30, color: "#10b981" },
  { name: "Diesel", value: 10, color: "#3b82f6" },
  { name: "Electric", value: 10, color: "#8b5cf6" },
  { name: "Hybrid", value: 5, color: "#6366f1" },
  { name: "Others", value: 25, color: "#ec4899" },
  { name: "Biofuel", value: 20, color: "#f97316" },
];

export default function CompanyDashboard() {
  // State for active slice
  const [activeEnergyIndex, setActiveEnergyIndex] = React.useState<
    number | undefined
  >(undefined);
  const [activeFuelIndex, setActiveFuelIndex] = React.useState<
    number | undefined
  >(undefined);
  const [token, setToken] = React.useState<string | null>(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("authToken");
    const lstoredToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    } else setToken(lstoredToken);
  }, []);

  const { user } = useAuth();
  console.log(user);

  const { data } = useQuery({
    queryKey: ["companydetails"],
    // enabled: token !== null, // Only run query when token is available
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/emissions/by-user`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      if (!res.ok) {
        throw new Error("Failed to fetch companies");
      }
      // setCompanies(res.json())
      return res.json();
    },
  });

  // Function to render the active shape with enhanced appearance

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderActiveShape = (props: any) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
    } = props;

    return (
      <g>
        <text
          x={cx}
          y={cy}
          dy={8}
          textAnchor="middle"
          fill={fill}
          className="-translate-y-[47%] font-bold"
        >
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 10}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };
  console.log(data?.data[0]);
  return (
    <div className="flex w-full flex-col gap-6">
      {/* Company Header */}
      <Card className="bg-[#033618] text-white">
        <CardContent className="flex items-center gap-4 p-6">
          {/* <Avatar className="h-24 w-24 border-4 border-white">
            <AvatarImage
              src="/placeholder.svg?height=96&width=96"
              alt="Company Logo"
            />
            <AvatarFallback className="text-black">CN</AvatarFallback>
          </Avatar> */}
          <div className="space-y-4">
            <h1 className="mb-4 text-2xl font-bold md:text-3xl">
              {data?.data[0]?.basic_information?.full_name || "Company Name"}
            </h1>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4" />
              <span>
                {data?.data[0]?.basic_information.email &&
                  data?.data[0]?.basic_information.email}
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4" />
              <span>
                {" "}
                {data?.data[0]?.basic_information.phone_number &&
                  data?.data[0]?.basic_information.phone_number}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Factory className="h-4 w-4" />
              <span>
                {data?.data[0]?.basic_information.company_operating_name &&
                  data?.data[0]?.basic_information.company_operating_name}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              <span>
                {" "}
                {data?.data[0]?.basic_information.headquarter_location &&
                  data?.data[0]?.basic_information.headquarter_location}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Energy Sources Chart */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium text-emerald-500">
              Energy Sources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Chart className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={energySourcesData}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={80}
                    paddingAngle={1}
                    dataKey="value"
                    activeIndex={activeEnergyIndex}
                    activeShape={renderActiveShape}
                    onMouseEnter={(_, index) => setActiveEnergyIndex(index)}
                    label={({ value }) => `${value}%`}
                    labelLine={false}
                  >
                    {energySourcesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </Chart>
            <ChartLegend className="mt-4 grid grid-cols-2 gap-2">
              {energySourcesData.map((entry, index) => (
                <ChartLegendItem
                  key={index}
                  color={entry.color}
                  label={entry.name}
                />
              ))}
            </ChartLegend>
          </CardContent>
        </Card>

        {/* Type of Fuel Used in Vehicles */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium text-emerald-500">
              Type of Fuel Used in Vehicles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Chart className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={fuelTypesData}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={80}
                    paddingAngle={1}
                    dataKey="value"
                    activeIndex={activeFuelIndex}
                    activeShape={renderActiveShape}
                    onMouseEnter={(_, index) => setActiveFuelIndex(index)}
                    label={({ value }) => `${value}%`}
                    labelLine={false}
                  >
                    {fuelTypesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </Chart>
            <ChartLegend className="mt-4 grid grid-cols-2 gap-2">
              {fuelTypesData.map((entry, index) => (
                <ChartLegendItem
                  key={index}
                  color={entry.color}
                  label={entry.name}
                />
              ))}
            </ChartLegend>
          </CardContent>
        </Card>
      </div>

      {/* Percentage of Energy Renewable */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-medium text-emerald-500">
            Percentage of Energy Renewable
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-10">
          <CustomProgress value={90} color="#10b981" label="90%" />
          <CustomProgress value={70} color="#3b82f6" label="70%" />
          <CustomProgress value={80} color="#818cf8" label="80%" />
          <CustomProgress value={50} color="#a855f7" label="50%" />
          <CustomProgress value={65} color="#ec4899" label="65%" />
          <CustomProgress value={60} color="#22c55e" label="60%" />
          <CustomProgress value={70} color="#f97316" label="70%" />
          <CustomProgress value={40} color="#064e3b" label="40%" />
        </CardContent>
      </Card>
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Business Sector */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Business Sector
            </CardTitle>
          </CardHeader>
          <CardContent>
            {data?.data[0]?.basic_information.business_sector?.map(
              (source: {
                _id: string;
                sector: string;
                carbon_emission_percentage: number;
              }) => (
                <div key={source._id} className="space-y-1">
                  <p>{source.sector}s</p>
                </div>
              ),
            )}
          </CardContent>
        </Card>

        {/* Energy Sources */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Energy Sources
            </CardTitle>
          </CardHeader>
          <CardContent>
            {data?.data[0]?.carbon_footprint?.energy_sources?.map(
              (source: EnergySource, i: number) => {
                return (
                  <div key={i} className="space-y-1">
                    <p>{source.source}</p>
                  </div>
                );
              },
            )}
          </CardContent>
        </Card>

        {/* Average Business Flight Distance */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Average Business Flight Distance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">50 miles</p>
          </CardContent>
        </Card>

        {/* Number of Company owned vehicles */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Number of Company owned vehicles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">95</p>
          </CardContent>
        </Card>

        {/* Total Electrical Consumption */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Total Electrical Consumption
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">79%</p>
          </CardContent>
        </Card>

        {/* Number of Employees */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Number of Employees
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">100</p>
          </CardContent>
        </Card>

        {/* Volume of Goods Transportation Method */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Volume of Goods Transportation Method (Tons)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">10</p>
          </CardContent>
        </Card>

        {/* Average Distance Travelled per Vehicle Annually */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Average Distance Travelled per Vehicle Annually
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">40 miles</p>
          </CardContent>
        </Card>

        {/* Total Annual Turnover in the last Financial Year */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Total Annual Turnover in the last Financial Year
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">10</p>
          </CardContent>
        </Card>

        {/* Total Annual Turnover in the last Financial Year (duplicate in original) */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Total Annual Turnover in the last Financial Year
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">10</p>
          </CardContent>
        </Card>

        {/* Annual Business Train Distance */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Annual Business Train Distance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">45 miles</p>
          </CardContent>
        </Card>

        {/* Supply Chain & Logistics */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Supply Chain & Logistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">10</p>
          </CardContent>
        </Card>

        {/* Type of Organization */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Type of Organization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <p>Private Limited Company (Ltd)</p>
              <p>sole Proprietorship</p>
            </div>
          </CardContent>
        </Card>

        {/* Total Value of Assets at End of The Last Financial Year */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Total Value of Assets at End of The Last Financial Year
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">10</p>
          </CardContent>
        </Card>

        {/* Primary Transportation Method */}
        {/* <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Primary Transportation Method
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <p>Traditional Grid</p>
              <p>Solar</p>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
}
