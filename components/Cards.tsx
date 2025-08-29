'use client'

import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IoCheckmark } from "react-icons/io5";
import { IoMdTrendingUp } from "react-icons/io";

const Cards = () => {
    return (
        <>
            <div className="flex justify-center items-center gap-6">
                <Card className="min-w-[340px] h-full w-full flex flex-col gap-6">
                    <CardHeader>
                        <CardTitle className="text-center">Account Progress</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-center items-center mb-4">
                            {/* Circular Progress */}
                            <div className="relative w-32 h-32 flex items-center justify-center">
                                <svg className="absolute top-0 left-0 -rotate-90" width="128" height="128">
                                    <circle
                                        cx="64"
                                        cy="64"
                                        r="54"
                                        stroke="#E5E7EB"
                                        strokeWidth="10"
                                        fill="none"
                                    />
                                    <circle
                                        cx="64"
                                        cy="64"
                                        r="54"
                                        stroke="#3CB2FF"
                                        strokeWidth="10"
                                        fill="none"
                                        strokeDasharray={2 * Math.PI * 54}
                                        strokeDashoffset={2 * Math.PI * 54 * (1 - 0.85)}
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <span className="text-xl font-bold z-10">85%</span>
                            </div>
                        </div>
                        <hr className="my-4" />
                        <div className="flex flex-col gap-7 mt-10">
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

                <div className="flex flex-col gap-5 w-full">
                    <Card className="min-w-[200px] flex flex-col">
                        <CardHeader>
                            <CardTitle>Total Franchisees Onboard</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between gap-2 mb-2">
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl font-bold">14</span>
                                    <Badge className="bg-transparent border border-[#12B76A] text-[#12B76A] px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                        <IoMdTrendingUp />
                                        7.4%
                                    </Badge>
                                </div>
                                <div className="flex ml-2 items-center">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Image key={i} src={`/images/Avatar.png`} alt="avatar" width={24} height={24} className="rounded-full border-2 border-white -ml-2 first:ml-0" />
                                    ))}
                                    <span className="text-xs text-gray-500 font-semibold">+7</span>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center mb-2">
                                <div className="h-2 w-full bg-[#3CB2FF] rounded-full" />
                                <div className="h-2 w-full bg-[#5DD2DD] rounded-full" />
                                <div className="h-2 w-full bg-[#B2E9F7] rounded-full" />
                            </div>
                            <ul className="flex flex-col gap-3 pt-6 text-sm">
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

                    <Card className="min-w-[200px] flex flex-col gap-6">
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
                            <hr className="my-5" />
                            <div className="flex gap-4">
                                <div className="bg-[#F9FAFB] rounded-lg p-4 flex-1 text-center">
                                    <div className="text-xs text-[#455468] mb-1">Target</div>
                                    <div className="font-semibold">$500,000</div>
                                </div>
                                <div className="bg-[#F9FAFB] rounded-lg p-4 flex-1 text-center">
                                    <div className="text-xs text-[#455468] mb-1">Current</div>
                                    <div className="font-semibold">$450,000</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col gap-5 w-full">
                    <Card className="min-w-[200px] h-full flex flex-col">
                        <CardHeader>
                            <CardTitle>Key Insights & Feedback</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between gap-2">
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold">10%</span>
                                    <span className="text-gray-500 text-sm">Sales Growth</span>
                                </div>

                                <div className="flex flex-col gap-2 items-center">
                                    <Image className="w-[36px] h-[36px]" width={400} height={400} src="/images/Avatar-2.png" alt="" />
                                    <Badge className="bg-[#D5F2FF80]/50 text-[#279DD4] border border-[#BAE9FF] px-3 py-1 rounded-full text-sm font-semibold">Top Performer</Badge>
                                </div>
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

                    <Card className="min-w-[200px] h-full flex flex-col">
                        <CardHeader>
                            <CardTitle>Prospect Leads</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="flex flex-col gap-2">
                                <li className="flex items-center text-sm bg-gray-100 rounded-lg px-3 py-3 justify-between">
                                    <div className="flex gap-2 items-center">
                                        <Image width={200} height={200} className="w-[36px] h-[36px] rounded-full" src="/images/Avatar-3.png" alt="avatar" />
                                        <p>Wade Warren</p>
                                    </div>
                                    <div>
                                        <p>Stage: Initial Inquiry</p>
                                    </div>
                                </li>
                                <li className="flex items-center text-sm bg-gray-100 rounded-lg px-3 py-3 justify-between">
                                    <div className="flex gap-2 items-center">
                                        <Image width={200} height={200} className="w-[36px] h-[36px] rounded-full" src="/images/Avatar-3.png" alt="avatar" />
                                        <p>Ava Wright</p>
                                    </div>
                                    <div>
                                        <p>Stage: Initial Inquiry</p>
                                    </div>
                                </li>
                                <li className="flex items-center text-sm bg-gray-100 rounded-lg px-3 py-3 justify-between">
                                    <div className="flex gap-2 items-center">
                                        <Image width={200} height={200} className="w-[36px] h-[36px] rounded-full" src="/images/Avatar-3.png" alt="avatar" />
                                        <p>Cody Fisher</p>
                                    </div>
                                    <div>
                                        <p>Stage: Initial Inquiry</p>
                                    </div>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Cards
