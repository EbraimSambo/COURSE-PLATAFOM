"use client"
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
} from "@/features/globals/ui/components/dialog"
import { Database, Palette, UserIcon } from 'lucide-react'
import TabsSettings from './tabs-settings'
import AppearanceTab from './appearance-tab'
import UserTab from './user-tab'
import DataAssting from './data-sessting'

interface Props{
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    isOpen: boolean,
}

const SettingDialog = ({isOpen,setIsOpen}:Props) => {
    const [activeTab, setActiveTab] = React.useState('account')

    const tabs = [
        { id: 'account', label: 'Conta', icon: <UserIcon className="mr-2 h-4 w-4" /> },
        { id: 'appearance', label: 'Aparência', icon: <Palette className="mr-2 h-4 w-4" /> },
        { id: 'data', label: 'Seus dados', icon: <Database className="mr-2 h-4 w-4" /> },
    ]

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="w-full sm:max-w-[794px] h-[500px] p-0 [&>button]:hidden rounded-4xl bg-background ">
                <DialogHeader>
                    <div className="grid grid-cols-4 gap-6 p-4">
                        <TabsSettings activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />

                        <div className="col-span-3">
                            {activeTab === 'account' && (
                                <UserTab />
                            )}
                            {activeTab === 'appearance' && (
                              <AppearanceTab />
                            )}
                            {activeTab === 'behavior' && (
                                <div>
                                    <h3 className="text-lg font-medium">Configurações de Comportamento</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Ajuste as preferências de comportamento do sistema.
                                    </p>
                                </div>
                            )}
                            {activeTab === 'data' && (
                                <DataAssting />
                            )}
                        </div>
                    </div>

                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default SettingDialog
