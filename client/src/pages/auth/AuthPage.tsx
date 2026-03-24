import { useParams } from "react-router-dom"
import { AuthView } from "@daveyplate/better-auth-ui"

export default function AuthPage() {
  const { pathname } = useParams()

  return (
    <main className="p-6 flex flex-col justify-center items-center min-h-[80vh] gap-6 text-center">
      <div className="bg-orange-500/10 border border-orange-500/50 text-orange-200 px-6 py-4 rounded-lg max-w-md">
        <h3 className="font-semibold text-lg mb-1">Sign-ups Currently Disabled</h3>
        <p className="text-sm opacity-90">
          Due to heavy traffic and to manage server capacity, we are temporarily disabling new sign-ups. You can still login if you already have an account.
        </p>
      </div>
      <AuthView pathname={pathname} classNames={{base: 'bg-black/10 ring ring-indigo-900'}}/>
    </main>
  )
}