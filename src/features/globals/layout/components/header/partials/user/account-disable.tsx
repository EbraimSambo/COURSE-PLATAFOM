import { Button } from "@/features/globals/ui/components/button"
import { RiGithubLine, RiGitlabLine, RiGoogleLine, RiMailLine } from "@remixicon/react"


interface Props {
    provider: "github" | "google" | "gitlab" | "credentials"
}
const AccountDisable = ({ provider }: Props) => {
    switch (provider) {
        case "github":
            return <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <RiGithubLine className='size-12' />
                    <div className="">
                        <h2 className="">GitHub</h2>
                        <p className="text-xs">Implemente Github</p>
                    </div>
                </div>
                <div className="">
                    <Button className='rounded-full' >Habilitar</Button>
                </div>
            </div>
        case "google":
            return <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <RiGoogleLine className='size-12' />
                    <div className="">
                        <h2 className="">Google</h2>
                        <p className="text-xs">Implemente Github</p>
                    </div>
                </div>
                <div className="">
                    <Button className='rounded-full'  >Habilitar</Button>
                </div>
            </div>
        case "gitlab":
            return (<div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <RiGitlabLine className='size-12' />
                    <div className="">
                        <h2 className="">Gitlab</h2>
                        <p className="text-xs">Implemente Gitlab</p>
                    </div>
                </div>
                <div className="">
                    <Button className='rounded-full' >Habilitar</Button>
                </div>
            </div>)
        case "credentials":
            return (<div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <RiMailLine className='size-12' />
                    <div className="">
                        <h2 className="">Email e Senha</h2>
                        <p className="text-xs">Implemente Gitlab</p>
                    </div>
                </div>
                <div className="">
                    <Button className='rounded-full'  >Habilitar</Button>
                </div>
            </div>)
    }
}

export default AccountDisable