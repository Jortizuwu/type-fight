import usePersistedStore from '@/store'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoute() {
  const { user } = usePersistedStore((state) => state)
  return user ? <Outlet /> : <Navigate to='/' />
}
