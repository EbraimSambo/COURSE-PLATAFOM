import { Button } from '@/features/globals/ui/components/button'
import React from 'react'

interface Props {
    tabs: {
        id: string;
        label: string;
        icon: React.JSX.Element;
    }[],
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
    activeTab: string
}
const TabsSettings = ({ activeTab, setActiveTab, tabs }: Props) => {
    return (
        <div className='space-y-4'>
            <h2 className="pl-2">Configurações</h2>
            <div className="space-y-4">
                {tabs.map((tab) => (
                    <Button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full  justify-start transition-colors gap-1 cursor-pointer
                        ${activeTab === tab.id
                                ? 'bg-slate-500/30 hover:bg-gray-500/40 text-black dark:text-white justify-start dark:bg-gray-500/30 dark:hover:bg-gray-500/20'
                                : 'bg-transparent hover:bg-gray-500/30 justify-start text-black dark:text-white dark:hover:bg-gray-500/30'
                            }`}
                    >
                        {tab.icon}
                        <span>{tab.label}</span>
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default TabsSettings
