import { TodoForm } from "../component/TodoForm"

const DashboardLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
        <TodoForm />
        {children}
    </div>
  )
}
 export default DashboardLayout