'use client'

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoFilterSharp } from "react-icons/io5";

const documents = [
    {
        name: "Tech requirements.pdf",
        type: "Legal",
        icon: <Image width={40} height={40} src="/images/Pdf-icon.png" alt="pdf" />,
        size: "200 KB",
        ai: true,
        dashboard: true,
        stage: "Full",
    },
    {
        name: "Dashboard screenshot.jpg",
        type: "Vendors & Assets",
        icon: <Image width={40} height={40} src="/images/Pdf-icon.png" alt="pdf" />,
        size: "720 KB",
        ai: true,
        dashboard: true,
        stage: "Onboarding",
    },
    {
        name: "Dashboard prototype recording.mp4",
        type: "Technology",
        icon: <Image width={40} height={40} src="/images/File-icon.png" alt="pdf" />,
        size: "16 MB",
        ai: false,
        dashboard: true,
        stage: "Franchisee",
    },
    {
        name: "Financial Overview",
        type: "Financial",
        icon: <Image width={40} height={40} src="/images/File-icon.png" alt="pdf" />,
        size: "4.2 MB",
        ai: true,
        dashboard: true,
        stage: "Prospect",
    },
    {
        name: "UX Design Guidelines.docx",
        type: "Legal",
        icon: <Image width={40} height={40} src="/images/File-icon.png" alt="pdf" />,
        size: "400 KB",
        ai: true,
        dashboard: false,
        stage: "Onboarding",
    },
    {
        name: "Dashboard interaction.aep",
        type: "Legal",
        icon: <Image width={40} height={40} src="/images/Pdf-icon.png" alt="pdf" />,
        size: "12 MB",
        ai: true,
        dashboard: true,
        stage: "Onboarding",
    },
    {
        name: "Briefing call recording.mp3",
        type: "Financial",
        icon: <Image width={40} height={40} src="/images/Pdf-icon.png" alt="pdf" />,
        size: "18.6 MB",
        ai: false,
        dashboard: true,
        stage: "Prospect",
    },
];

const typeColors: Record<string, string> = {
    Legal: "bg-blue-100 text-blue-700",
    "Vendors & Assets": "bg-green-100 text-green-700",
    Technology: "bg-orange-100 text-orange-700",
    Financial: "bg-pink-100 text-pink-700",
};

const stageOptions = ["Full", "Onboarding", "Franchisee", "Prospect"];

export default function Table() {
    return (
        <div className="w-full border border-[#EAECF0] rounded-lg bg-white my-5">
            <div className="border-b border-[#EAECF0] px-6 py-4 flex items-center w-full justify-between">
                <div className="flex flex-col gap-1">
                    <h2 className="text-lg font-semibold">My Uploads</h2>
                    <p className="text-sm text-gray-500">Documents that are uploaded by you.</p>
                </div>
                <HiOutlineDotsVertical size={20} />
            </div>
            <div className="flex items-center justify-between px-6 py-4">
                <Input placeholder="Search here.." className="w-72 h-9 text-sm" />
                <Button variant="outline" className="flex items-center cursor-pointer hover:bg-gray-100 gap-2 px-3 py-2 text-sm font-medium">
                    <IoFilterSharp />
                    Filters
                </Button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-3 py-3 text-left align-middle">
                                <Checkbox />
                            </th>
                            <th className="px-3 py-3 text-left font-medium text-gray-700">Document Name</th>
                            <th className="px-3 py-3 text-left font-medium text-gray-700">Document Type</th>
                            <th className="px-3 py-3 text-center font-medium text-gray-700">AI App Inclusion</th>
                            <th className="px-3 py-3 text-center font-medium text-gray-700">Dashboard Inclusion</th>
                            <th className="px-3 py-3 text-left font-medium text-gray-700">Stage Access</th>
                            <th className="px-3 py-3 text-center font-medium text-gray-700"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {documents.map((doc, i) => (
                            <tr key={i} className="border-t border-gray-100 hover:bg-gray-50">
                                <td className="px-3 py-3 align-middle">
                                    <Checkbox />
                                </td>
                                <td className="px-3 py-3 flex items-center gap-2 align-middle">
                                    {doc.icon}
                                    <div className="flex flex-col">
                                        <div className="font-medium cursor-pointer hover:underline">{doc.name}</div>
                                        <div className="text-xs text-[#475467]">{doc.size}</div>
                                    </div>
                                </td>
                                <td className="px-3 py-3 align-middle">
                                    <Badge className={`${typeColors[doc.type]} px-2 py-1 rounded-full text-xs font-medium`}>
                                        {doc.type}
                                    </Badge>
                                </td>
                                <td className="px-3 py-3 text-center align-middle">
                                    <Switch checked={doc.ai} className="data-[state=checked]:bg-blue-500 cursor-pointer" />
                                </td>
                                <td className="px-3 py-3 text-center align-middle">
                                    <Switch checked={doc.dashboard} className="data-[state=checked]:bg-blue-500 cursor-pointer" />
                                </td>
                                <td className="px-3 py-3 align-middle">
                                    <Select defaultValue={doc.stage}>
                                        <SelectTrigger className="w-32 h-8 text-sm">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {stageOptions.map((stage) => (
                                                <SelectItem key={stage} value={stage}>
                                                    {stage}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </td>
                                <td className="px-3 py-3 text-center align-middle">
                                    <div className="flex gap-2 justify-center">
                                        <button className="text-[#475467] cursor-pointer hover:underline text-sm font-medium">Delete</button>
                                        <button className="text-[#279DD4] cursor-pointer hover:underline text-sm font-medium">Edit</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
