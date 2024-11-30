import { Header } from "../component/Header"

const DashboardLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
        <Header />
        {children}
    </div>
  )
}
 export default DashboardLayout