"use client";

import type React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Define the service data structure
type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  content: React.ReactNode;
};

// Sample services data
const services: Service[] = [
  {
    id: "business-strategy",
    title: "Business Strategy",
    description:
      "Creating a business strategy for a business consultation website involves identifying your target market, differentiating your services, and building a sustainable revenue model.",
    features: [
      "Business Strategy",
      "Advanced Analytics",
      "Finances Guidance",
      "Perfect Precision",
    ],
    content: (
      <>
        <h2 className="mb-4 text-2xl font-bold">
          Identify Your Niche and Target Market
        </h2>
        <p className="mb-6">
          The first step in building a successful business consultation company
          is to identify your niche and target market. This involves
          understanding the specific industries or types of businesses you want
          to serve. For example, you might focus on startups, small and
          medium-sized businesses (SMBs), or large enterprises. You could also
          specialize in specific industries like technology, healthcare, or
          retail, or offer expertise in particular business functions such as
          marketing, operations, or finance. Conduct thorough market research to
          understand the pain points, challenges, and goals of your target
          audience. This will help you tailor your services to meet their needs
          and differentiate yourself from competitors.
        </p>

        <h2 className="mb-4 text-2xl font-bold">
          Develop a Unique Value Proposition
        </h2>
        <p className="mb-6">
          Your value proposition is the foundation of your consulting business.
          It should clearly communicate why clients should choose your services
          over others. Highlight what makes your company unique, whether
          it`&lsquo;`s your industry expertise, innovative methodologies, or
          personalized approach. For instance, you could emphasize your use of
          data-driven strategies, your track record of delivering measurable
          results, or your ability to provide affordable solutions for small
          businesses. Make sure your value proposition is integrated into all
          your marketing materials and communicated consistently across your
          website, social media, and client interactions.
        </p>
      </>
    ),
  },
  {
    id: "business-planning",
    title: "Business Planning",
    description:
      "Effective business planning helps organizations define their objectives and develop strategies to achieve them.",
    features: [
      "Strategic Planning",
      "Financial Forecasting",
      "Market Analysis",
      "Risk Assessment",
    ],
    content: (
      <>
        <h2 className="mb-4 text-2xl font-bold">
          Comprehensive Business Planning Services
        </h2>
        <p className="mb-6">
          Our business planning services provide a roadmap for your
          organization`&lsquo;`s future. We work closely with you to understand
          your vision, goals, and challenges, then develop a customized plan
          that addresses your specific needs. Whether you`&lsquo;`re a startup
          looking to establish a solid foundation or an established business
          seeking to pivot or expand, our expert consultants will guide you
          through the process.
        </p>

        <h2 className="mb-4 text-2xl font-bold">
          Key Components of Our Business Planning
        </h2>
        <p className="mb-6">
          We focus on creating actionable plans that include market analysis,
          competitive positioning, operational strategies, and financial
          projections. Our approach integrates both short-term tactical plans
          and long-term strategic vision, ensuring that your day-to-day
          operations align with your ultimate business goals. We also
          incorporate contingency planning to help you navigate unexpected
          challenges and capitalize on emerging opportunities.
        </p>
      </>
    ),
  },
  {
    id: "finances-guidance",
    title: "Finances Guidance",
    description:
      "Expert financial guidance to help businesses optimize their financial performance and achieve sustainable growth.",
    features: [
      "Financial Analysis",
      "Budget Planning",
      "Investment Strategy",
      "Tax Optimization",
    ],
    content: (
      <>
        <h2 className="mb-4 text-2xl font-bold">
          Financial Expertise for Business Success
        </h2>
        <p className="mb-6">
          Our financial guidance services are designed to help businesses of all
          sizes make informed financial decisions. We provide comprehensive
          financial analysis, identify areas for improvement, and develop
          strategies to enhance your financial performance. Our team of
          experienced financial consultants will work with you to understand
          your business objectives and create customized solutions that align
          with your goals.
        </p>

        <h2 className="mb-4 text-2xl font-bold">
          Comprehensive Financial Services
        </h2>
        <p className="mb-6">
          We offer a wide range of financial services, including cash flow
          management, financial forecasting, investment analysis, and risk
          assessment. Our approach is both strategic and practical, focusing on
          actionable recommendations that can be implemented to drive tangible
          results. We also provide ongoing support to help you monitor your
          financial performance and make adjustments as needed to stay on track
          toward your financial goals.
        </p>
      </>
    ),
  },
  {
    id: "business-campaign",
    title: "Business Campaign",
    description:
      "Strategic campaign planning and execution to help businesses reach their target audience and achieve their marketing objectives.",
    features: [
      "Campaign Strategy",
      "Market Research",
      "Content Creation",
      "Performance Analysis",
    ],
    content: (
      <>
        <h2 className="mb-4 text-2xl font-bold">
          Strategic Campaign Development
        </h2>
        <p className="mb-6">
          Our business campaign services help you create and execute effective
          marketing campaigns that drive results. We begin by understanding your
          business objectives, target audience, and competitive landscape. Then,
          we develop a comprehensive campaign strategy that leverages the most
          appropriate channels and messaging to reach your audience and achieve
          your goals.
        </p>

        <h2 className="mb-4 text-2xl font-bold">
          End-to-End Campaign Management
        </h2>
        <p className="mb-6">
          We provide end-to-end campaign management, from initial concept
          development to execution and performance analysis. Our team handles
          all aspects of your campaign, including creative development, media
          planning, content creation, and performance tracking. We continuously
          monitor campaign performance and make data-driven adjustments to
          optimize results and maximize your return on investment.
        </p>
      </>
    ),
  },
  {
    id: "audit-assurance",
    title: "Audit Assurance",
    description:
      "Comprehensive audit services to help businesses ensure compliance, identify risks, and improve operational efficiency.",
    features: [
      "Financial Audits",
      "Compliance Reviews",
      "Risk Assessment",
      "Process Improvement",
    ],
    content: (
      <>
        <h2 className="mb-4 text-2xl font-bold">Thorough Audit Services</h2>
        <p className="mb-6">
          Our audit assurance services provide an independent and objective
          evaluation of your business operations, financial reporting, and
          compliance with relevant regulations. We conduct thorough audits that
          identify potential risks, inefficiencies, and areas for improvement.
          Our approach is collaborative and constructive, focusing on providing
          valuable insights that can help strengthen your business.
        </p>

        <h2 className="mb-4 text-2xl font-bold">
          Comprehensive Audit Approach
        </h2>
        <p className="mb-6">
          We offer a range of audit services, including financial audits,
          operational audits, compliance audits, and IT audits. Our team of
          experienced auditors uses a systematic approach to evaluate your
          business processes, controls, and reporting systems. We provide
          detailed reports that highlight our findings and recommendations,
          along with practical guidance on how to address any issues identified
          during the audit process.
        </p>
      </>
    ),
  },
  {
    id: "research-planning",
    title: "Research Planning",
    description:
      "Strategic research planning to help businesses gather and analyze data to inform decision-making and drive growth.",
    features: [
      "Market Research",
      "Competitive Analysis",
      "Consumer Insights",
      "Data Analytics",
    ],
    content: (
      <>
        <h2 className="mb-4 text-2xl font-bold">
          Data-Driven Research Solutions
        </h2>
        <p className="mb-6">
          Our research planning services help businesses gather and analyze the
          information they need to make informed decisions. We design and
          implement comprehensive research strategies that address your specific
          business questions and objectives. Whether you`&lsquo;`re looking to
          understand market trends, evaluate customer preferences, or assess
          competitive dynamics, our research experts will develop a tailored
          approach to meet your needs.
        </p>

        <h2 className="mb-4 text-2xl font-bold">
          Actionable Research Insights
        </h2>
        <p className="mb-6">
          We go beyond simply collecting data to provide actionable insights
          that can drive your business forward. Our team uses advanced
          analytical techniques to interpret research findings and identify
          meaningful patterns and trends. We present our findings in clear,
          concise reports that highlight key insights and provide specific
          recommendations for how to apply them to your business strategy and
          operations.
        </p>
      </>
    ),
  },
];

interface Props {
  activeTab: string;
}
export default function OurServices({ activeTab }: Props) {
  // const searchParams = useSearchParams()
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get service ID from URL query params (default to first service)
  const serviceId = searchParams.get("service") || activeTab || services[0].id;
  const activeService = services.find((s) => s.id === serviceId) || services[0];

  // Get service ID from URL query params (default to first service)
  // const serviceId = searchParams.get("service") || services[0].id
  // const initialService = services.find((s) => s.id === serviceId) || services[0]
  // const [activeService, setActiveService] = useState(activeTab)

  // useEffect(() => {
  //   setActiveService(initialService) // Update active tab when query param changes
  // }, [initialService])
  return (
    <div className="flex min-h-screen flex-col pt-[20px]">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Sidebar for desktop */}
            <div className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-8">
               <div className="bg-[#E6E6E6] py-5">

                <h2 className="mb-6 text-center text-2xl font-bold">
                  Our Services
                </h2>
                <div className="flex flex-col space-y-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        router.push(`?service=${service.id}`, {
                          scroll: false,
                        });
                      }}
                      className={cn(
                        "mx-10 flex items-center justify-between rounded-lg p-4 transition-colors",
                        activeService.id === service.id
                          ? "bg-green-500 text-white"
                          : "border border-gray-200 bg-white hover:bg-gray-50",
                      )}
                    >
                      <span>{service.title}</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  ))}
                </div>
               </div>

                {/* follow us  */}
                <div className="my-8 bg-[#E6E6E6] p-4">
                  <h3 className="mb-4 text-sm font-medium">Follow us on</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="rounded-full bg-gray-100 p-2 hover:bg-gray-200"
                    >
                      <Facebook className="h-5 w-5 text-green-500" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a
                      href="#"
                      className="rounded-full bg-gray-100 p-2 hover:bg-gray-200"
                    >
                      <Twitter className="h-5 w-5 text-green-500" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a
                      href="#"
                      className="rounded-full bg-gray-100 p-2 hover:bg-gray-200"
                    >
                      <Linkedin className="h-5 w-5 text-green-500" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                      href="#"
                      className="rounded-full bg-gray-100 p-2 hover:bg-gray-200"
                    >
                      <Instagram className="h-5 w-5 text-green-500" />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </div>
                </div>

                {/* CTA Section */}

                <div
                  className="flex min-h-[483px] flex-col justify-end p-2"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/asset/serviceContact.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h2 className="mb-4 text-3xl font-bold text-white md:text-[32px]">
                    Ready To Get Expert Our Services
                  </h2>
                  <Button
                    size="lg"
                    className="mb-6 max-w-[90px] bg-green-500 text-white hover:bg-green-600"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>

            {/* Tabs for mobile */}
            <div className="mb-6 w-full lg:hidden">
              <Tabs
                defaultValue={activeService.id}
                value={activeService.id}
                onValueChange={(value) => {
                  router.push(`?service=${value}`, { scroll: false });
                }}
              >
                <TabsList className="h-14 w-full flex-nowrap justify-start overflow-x-auto">
                  {services.map((service) => (
                    <TabsTrigger
                      key={service.id}
                      value={service.id}
                      className="whitespace-nowrap data-[state=active]:bg-green-500 data-[state=active]:text-white"
                    >
                      {service.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Content area */}
            <div className="lg:col-span-9">
              <div className="mb-8">
                <Image
                  src="/asset/ourService.png"
                  alt="Business professionals reviewing documents"
                  width={800} // Adjust width as needed
                  height={451} // Adjust height as needed
                  className="h-[300px] w-full rounded-lg object-cover lg:h-[551px]"
                />
              </div>

              <div className="mb-8">
                <h1 className="mb-4 text-3xl font-bold">
                  {activeService.title}
                </h1>
                <p className="mb-6 text-gray-700">
                  {activeService.description}
                </p>

                <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {activeService.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center rounded-lg border p-4"
                    >
                      <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                        <svg
                          className="h-4 w-4 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="prose max-w-none">{activeService.content}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
