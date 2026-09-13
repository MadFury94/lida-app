import { Users as UsersIcon } from 'lucide-react'
import { Card, CardContent } from '../components/ui/card'

export default function Users() {
  return (
    <div className="space-y-6">
      <div><h1 className="page-heading">Users</h1><p className="page-description">People in your administration workspace.</p></div>
      <Card><CardContent className="flex min-h-72 flex-col items-center justify-center text-center">
        <span className="mb-4 flex size-12 items-center justify-center rounded-full bg-muted"><UsersIcon className="size-6 text-muted-foreground" /></span>
        <h2 className="font-semibold">No users yet</h2>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">User management is not connected yet. Your administrator account is managed through the existing sign-in system.</p>
      </CardContent></Card>
    </div>
  )
}
