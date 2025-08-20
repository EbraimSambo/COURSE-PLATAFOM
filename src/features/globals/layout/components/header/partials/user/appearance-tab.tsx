import { Switch } from '@/features/globals/ui/components/switch'
import { Computer, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'

const AppearanceTab = () => {
    const { setTheme,theme } = useTheme()
    return (
        <div>
            <div>
                <h3 className="text-lg font-medium">Configurações de Aparência</h3>
                <p className="text-sm text-muted-foreground">
                    Personalize o tema e aparência da interface.
                </p>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <button
                        className={`cursor-pointer ${theme == "light" && "dark:bg-muted-foreground/15 bg-muted-foreground/15"} flex items-center justify-center flex-col gap-2 border rounded-2xl p-2`}
                        onClick={() => setTheme("light")}>
                        <Sun />
                        <span className=''>Claro</span>
                    </button>
                    <button
                          className={`cursor-pointer ${theme == "dark" && "dark:bg-muted-foreground/15 bg-muted-foreground/15"} flex items-center justify-center flex-col gap-2 border rounded-2xl p-2`}
                        onClick={() => setTheme("dark")}>
                        <Moon />
                        <span className=''>Dark</span>
                    </button>
                    <button
                          className={`cursor-pointer ${theme == "system" && "dark:bg-muted-foreground/15 bg-muted-foreground/15"} flex items-center justify-center flex-col gap-2 border rounded-2xl p-2`}
                        onClick={() => setTheme("system")}>
                        <Computer />
                        <span className=''>Sistema</span>
                    </button>
                </div>
                <div className="space-y-4 mt-8">
                    {Array.from({length: 3}).map((_,index)=>(
                        <div className="flex items-center justify-between" key={index}>
                            <p className="text-xs">Mostrar sua mensagem em Markdown</p>
                            <Switch />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AppearanceTab
