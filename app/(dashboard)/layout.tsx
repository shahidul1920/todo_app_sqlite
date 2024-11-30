import { Header } from "../component/Header"

const metadata = {
    title: "bla bla",
    description: "bla bla",
}

const DashboardLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
        <Header />
        {children}
    </div>
  )
}
 export default DashboardLayout