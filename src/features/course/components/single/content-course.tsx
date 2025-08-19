"use client"
import { Separator } from '@/features/globals/ui/components/separator';
import React from 'react'
import DescriptionCourse from './description-course';

const tabs = [
    { id: "overview", label: "Visão Geral", content: <DescriptionCourse /> },
    { id: "questions", label: "Duvidas", content: "Aqui vai as configs." },
]
const ContentCourse = () => {
    const [activeTab, setActiveTab] = React.useState(tabs[0].id);
    return (
        <div className='mt-6'>
            <div className="flex">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 text-lg font-medium cursor-pointer ${activeTab === tab.id
                                ? "border-b-2 border-white text-white"
                                : "text-muted-foreground hover:text-white"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <Separator />

            <div className="p-4">
                {tabs.map(
                    (tab) =>
                        activeTab === tab.id && (
                            <div key={tab.id} className="animate-fadeIn">
                                {tab.content}
                            </div>
                        )
                )}
            </div>
        </div>
    )
}

export default ContentCourse