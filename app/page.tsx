import Header from "@/components/Header";
import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IoCheckmark } from "react-icons/io5";
import { IoMdTrendingUp } from "react-icons/io";

export default function Home() {
  return (
    <>
      <Header />

      <div className="content-container px-4 py-4">
        <div className="flex justify-center gap-6">
          {/* Account Progress Card */}
          <Card className="min-w-[340px] w-full flex flex-col gap-6">
            <CardHeader>
              <CardTitle className="text-center">Account Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center mb-4">
                {/* Circular Progress */}
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="absolute top-0 left-0" width="96" height="96">
                    <circle cx="48" cy="48" r="40" stroke="#EAECF0" strokeWidth="8" fill="none" />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#3CB2FF"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 40}
                      strokeDashoffset={2 * Math.PI * 40 * (1 - 0.85)}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-2xl font-bold z-10">85%</span>
                </div>
              </div>
              <hr className="my-4" />
              <div className="flex flex-col gap-4">
                <div className="box bg-gray-100 rounded-lg px-3 py-3">
                  <h3 className="font-semibold pb-3 text-sm">Steps Completed</h3>
                  <ul className="flex flex-col gap-1">
                    <li className="flex items-center justify-between gap-2 text-gray-500 text-sm mb-1">
                      <div className="flex gap-2 items-center">
                        <span className="h-2 w-2 rounded-full bg-gray-300 inline-block" />
                        Profile Setup
                      </div>
                      <span className="h-5 w-5 rounded-full bg-[#0A9952] text-white flex justify-center items-center"><IoCheckmark /></span>
                    </li>
                    <li className="flex items-center justify-between gap-2 text-gray-500 text-sm mb-1">
                      <div className="flex gap-2 items-center">
                        <span className="h-2 w-2 rounded-full bg-gray-300 inline-block" />
                        Initial Training
                      </div>
                      <span className="h-5 w-5 rounded-full bg-[#0A9952] text-white flex justify-center items-center"><IoCheckmark /></span>
                    </li>
                    <li className="flex items-center justify-between gap-2 text-gray-500 text-sm mb-1">
                      <div className="flex gap-2 items-center">
                        <span className="h-2 w-2 rounded-full bg-gray-300 inline-block" />
                        Legal Documents
                      </div>
                      <span className="h-5 w-5 rounded-full bg-[#0A9952] text-white flex justify-center items-center"><IoCheckmark /></span>
                    </li>
                  </ul>
                </div>

                <div className="box bg-gray-100 rounded-lg px-3 py-3">
                  <h3 className="font-semibold pb-3 text-sm">Steps Remaining</h3>
                  <ul className="flex flex-col gap-1">
                    <li className="flex items-center justify-between gap-2 text-gray-500 text-sm mb-1">
                      <div className="flex gap-2 items-center">
                        <span className="h-2 w-2 rounded-full bg-gray-300 inline-block" />
                        Profile Setup
                      </div>
                      <span className="h-5 w-5 rounded-full bg-[#0A9952] opacity-30 text-white flex justify-center items-center"><IoCheckmark /></span>
                    </li>
                    <li className="flex items-center justify-between gap-2 text-gray-500 text-sm mb-1">
                      <div className="flex gap-2 items-center">
                        <span className="h-2 w-2 rounded-full bg-gray-300 inline-block" />
                        Initial Training
                      </div>
                      <span className="h-5 w-5 rounded-full bg-[#0A9952] opacity-30 text-white flex justify-center items-center"><IoCheckmark /></span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Franchisees Onboard Card */}
          <div className="flex flex-col gap-7 w-full">
            <Card className="min-w-[340px] flex flex-col gap-6">
              <CardHeader>
                <CardTitle>Total Franchisees Onboard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl font-bold">14</span>
                  <Badge className="bg-transparent border border-[#12B76A] text-[#12B76A] px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <IoMdTrendingUp />
                    7.4%
                  </Badge>
                  <div className="flex ml-2 items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Image key={i} src={`/images/Avatar.png`} alt="avatar" width={24} height={24} className="rounded-full border-2 border-white -ml-2 first:ml-0" />
                    ))}
                    <span className="text-xs text-gray-500 font-semibold">+7</span>
                  </div>
                </div>
                {/* Progress Bar */}
                <div className="flex gap-2 items-center mb-2">
                  <div className="h-2 w-full bg-[#3CB2FF] rounded-full" />
                  <div className="h-2 w-full bg-[#5DD2DD] rounded-full" />
                  <div className="h-2 w-full bg-[#B2E9F7] rounded-full" />
                </div>
                <ul className="flex flex-col gap-3 py-3 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#3CB2FF] inline-block" />
                    Stage 1 (Initial Inquiry)
                    <span className="ml-auto font-bold">02</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#5DD2DD] inline-block" />
                    Stage 2 (Document Submission)
                    <span className="ml-auto font-bold">07</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#B2E9F7] inline-block" />
                    Stage 3 (Training)
                    <span className="ml-auto font-bold">05</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="min-w-[340px] flex flex-col gap-6">
              <CardHeader>
                <CardTitle>Financial Wellbeing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between gap-3 mb-1">
                  <div className="flex flex-col gap-2">
                    <span className="text-3xl font-bold">20</span>
                    <span className="text-gray-500 text-sm">Total Franchisees</span>
                  </div>
                  <Badge className="bg-transparent border border-[#12B76A] text-[#12B76A] px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <IoMdTrendingUp />
                    2.1%
                  </Badge>
                </div>
                <hr className="my-3" />
                <div className="flex gap-4">
                  <div className="bg-[#F9FAFB] rounded-lg p-4 flex-1 text-center">
                    <div className="text- text-[#455468] mb-1">Target</div>
                    <div className="text-xl font-semibold">$500,000</div>
                  </div>
                  <div className="bg-[#F9FAFB] rounded-lg p-4 flex-1 text-center">
                    <div className="text- text-[#455468] mb-1">Current</div>
                    <div className="text-xl font-semibold">$450,000</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-7 w-full">
            <Card className="min-w-[340px] flex flex-col gap-6">
              <CardHeader>
                <CardTitle>Key Insights & Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl font-bold">10%</span>
                  <span className="text-gray-500 text-sm">Sales Growth</span>
                  <Badge className="ml-auto bg-[#F2F4F7] text-[#344054] px-3 py-1 rounded-full text-xs font-semibold">Top Performer</Badge>
                </div>
                <div className="bg-[#F9FAFB] rounded-md p-3 mt-2">
                  <div className="font-semibold text-sm mb-1">Feedback</div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <span className="h-2 w-2 rounded-full bg-gray-300 inline-block" />
                    Franchisees are requesting more detailed training materials.
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="min-w-[340px] flex flex-col gap-6">
              <CardHeader>
                <CardTitle>Key Insights & Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl font-bold">10%</span>
                  <span className="text-gray-500 text-sm">Sales Growth</span>
                  <Badge className="ml-auto bg-[#F2F4F7] text-[#344054] px-3 py-1 rounded-full text-xs font-semibold">Top Performer</Badge>
                </div>
                <div className="bg-[#F9FAFB] rounded-md p-3 mt-2">
                  <div className="font-semibold text-sm mb-1">Feedback</div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <span className="h-2 w-2 rounded-full bg-gray-300 inline-block" />
                    Franchisees are requesting more detailed training materials.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "WeFrameTech",
  description: "Generated by create next app",
};