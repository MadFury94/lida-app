import { useAuth } from '../contexts/AuthContext'
import { Card, CardContent } from '../components/ui/card'
export default function Users() {
  const { user } = useAuth()
  return <div className="space-y-6">
    <div><h1 className="page-heading">Users</h1><p className="page-description">Your administration account.</p></div>
    <Card><CardContent><p className="font-semibold">{user.username}</p><p className="mt-2 text-sm text-muted-foreground">Administrator</p><p className="mt-4 text-sm text-muted-foreground">This workspace uses one administrator account. Additional user accounts are not enabled.</p></CardContent></Card>
  </div>
}
