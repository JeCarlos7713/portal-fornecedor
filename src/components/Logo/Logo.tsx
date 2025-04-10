import { useEffect, useState } from 'react'
import logo from './../../assets/Supplier+.svg'

type LogoProps = {
    width: string
}
const Logo = ({ width }: LogoProps) => {
    const [wLogo, setWLogo] = useState<string>("w-10")

    useEffect(() => {
        setWLogo(`w-${width}`)
    }, [width])

    return <img src={logo} alt='Logo Supplier+' className={wLogo} />
}

export default Logo