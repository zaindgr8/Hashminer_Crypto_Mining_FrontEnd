import {UserButton} from "@clerk/clerk-react"

const ProtectedPage = ()=>{
    return (
      <>
        <div className="border-2 p-5">
          <UserButton/>
        </div>
      </>
    );
}

export default ProtectedPage