import { useRouter } from 'next/router'
import Navbar from '../../components/MainView/Navbar/Navbar'

const UserView = () => {
    const router = useRouter()
    const { account } = router.query
    return <div className="h-screen w-screen bg-zinc-200">{account}</div>
}

export default UserView
