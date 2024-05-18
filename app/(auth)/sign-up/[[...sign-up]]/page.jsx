import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return(
    <section className=" min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="h-full flex items-center justify-center w-full">
          <SignUp path="/sign-up" />
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}