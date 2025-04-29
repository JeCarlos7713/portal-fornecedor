import { List } from "@chakra-ui/react"
import Logo from "../Logo/Logo"
import UserData from "../UserData/UserData"

const Sidebar = () => {
  return (
    <section className="content w-[250px] p-[15px] mt-[15px] flex justify-center items-center flex-col">
        
        <div className="w-full mb-10 flex justify-center items-center">
            <Logo />
        </div>
        
        <div className="user-data w-[150px]">
            <UserData name="Jean Carlos" />
        </div>

        <div className="list">
          <List.Root>
            <List.Item>1</List.Item>
          </List.Root>
        </div>

    </section>
  )
}

export default Sidebar