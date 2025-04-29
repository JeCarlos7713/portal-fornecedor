

type PropsUserData = {
    name    : string
}
const UserData = ({name}: PropsUserData) => {
  return (
    <section className='flex gap-5 justify-between items-center'>
        <div className="w-[40px] h-[40px] bg-[#DEDEDE] rounded-full flex justify-center items-center text-[1.2rem]">
            {
                name.split(" ").length > 1 ? name.split(" ")[0].charAt(0).toUpperCase() + name.split(" ")[1].charAt(0).toUpperCase() : name.split(" ")[0].charAt(0).toUpperCase()
            }
        </div>
        <div className="name text-[0.9rem]">
            <h2>{name}</h2>
        </div>
    </section>
  )
}

export default UserData