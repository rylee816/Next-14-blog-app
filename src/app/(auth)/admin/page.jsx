import { Suspense } from 'react'
import Styles from './admin.module.css'
import AdminPosts from '@/components/adminPosts/adminPosts'
// import AdminUsers from "@/components/adminUsers/adminUsers";
// import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import { auth } from '@/lib/auth'
import AdminPostForm from '@/components/adminPostForm/AdminPostForm'
import AdminUsers from '@/components/adminUsers/AdminUsers'

const AdminPage = async () => {
    const session = await auth()

    return (
        <div className={Styles.container}>
            <div className={Styles.row}>
                <div className={Styles.col}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <AdminPosts />
                    </Suspense>
                </div>
                <div className={Styles.col}>
                    <AdminPostForm userId={session.user.id} />
                </div>
            </div>
            <div className={Styles.row}>
                <div className={Styles.col}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <AdminUsers />
                    </Suspense>
                </div>
                <div className={Styles.col}>{/* <AdminUserForm /> */}</div>
            </div>
        </div>
    )
}

export default AdminPage
